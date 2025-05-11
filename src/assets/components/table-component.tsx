import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {type Product} from "../types/products";
import { getProducts } from "../../services/productsService";
import { useEffect,  useState } from "react";



export default function BasicTable() {

  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    getProducts().then((response: Product[]) => {
      setProducts(response);
      console.log(products);
    });
  }, [])

  return (
    <TableContainer component={Paper} className="p-8">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="text-[#29543A] font-bold">
          <TableRow>
            <TableCell className="!text-[#29543A] !font-bold">Produto</TableCell>
            <TableCell className="!text-[#29543A] !font-bold">Preço em R$</TableCell>
            <TableCell className="!text-[#29543A] !font-bold">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => 
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.price} R$</TableCell>
            <TableCell></TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
