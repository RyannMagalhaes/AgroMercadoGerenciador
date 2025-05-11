import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  nome: string,
  preco: number
) {
  return { nome, preco };
}

const rows = [
  createData("Produto 1", 150),
  createData("Produto 2", 89.90,)
];

export default function BasicTable() {
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
          {rows.map((row) => 
          <TableRow key={row.nome}>
            <TableCell>{row.nome}</TableCell>
            <TableCell>{row.preco}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
