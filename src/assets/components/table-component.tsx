import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TfiTrash } from "react-icons/tfi";
import { type Product } from "../types/products";
import productsService from "../../services/productsService";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";

export default function BasicTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const isMobile = useIsMobile();

  function useIsMobile(breakpoint = 640) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);
    return isMobile;
  }

  useEffect(() => {
    productsService
      .getProducts()
      .then((response: Product[]) => {
        setProducts(response);
      })
      .catch(() => {
        alert("Erro ao carregar produtos, verifique se está logado.");
      });
  }, []);

  function deleteProduct(id: number) {
    const confirmacao = window.confirm(
      "Tem certeza que deseja deletar este produto?"
    );

    if (confirmacao) {
      productsService
        .deleteProduct(id)
        .then(() => {
          alert("Produto deletado com sucesso");
          setProducts((prev) => prev.filter((product) => product.id !== id));
        })
        .catch(() => {
          alert("Falha ao deletar produto");
        });
    } else {
      return;
    }
  }

  // Layout para mobile
  if (isMobile) {
    return (
      <div className="space-y-4 p-2">
        {products.map((row) => (
          <div
            key={row.id}
            className="border rounded-lg p-4 bg-white flex justify-between items-center shadow"
          >
            <div>
              <div className="text-xs text-gray-500 mb-1">ID: {row.id}</div>
              <div className="font-semibold text-[#29543A]">{row.name}</div>
              <div className="text-[#29543A]">R$ {Number(row.price).toFixed(2)}</div>
            </div>
            <IconButton onClick={() => deleteProduct(row.id)}>
              <TfiTrash
                className="w-6 h-6 text-red-400"
                data-testid={`delete-product-${row.id}`}
                aria-label="Excluir"
              />
            </IconButton>
          </div>
        ))}
      </div>
    );
  }

  // Layout para desktop
  return (
    <TableContainer
      component={Paper}
      className="p-8"
      sx={{ overflowX: "auto" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="text-[#29543A] font-bold">
          <TableRow>
            <TableCell className="!text-[#29543A] !font-bold">
              Produto
            </TableCell>
            <TableCell className="!text-[#29543A] !font-bold">
              Preço em R$
            </TableCell>
            <TableCell className="!text-[#29543A] !font-bold" align="right">
              Excluir Produto
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price} R$</TableCell>
              <TableCell align="right">
                <div className="flex justify-end items-center h-full">
                  <IconButton>
                    <TfiTrash
                      className="w-6 h-6 text-red-400 mr-12"
                      onClick={() => deleteProduct(row.id)}
                      data-testid={`delete-product-${row.id}`}
                      aria-label="Excluir"
                    />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
