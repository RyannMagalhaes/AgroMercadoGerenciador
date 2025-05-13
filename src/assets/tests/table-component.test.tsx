import { render, screen, } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsView from "../pages/products-view/products-view";
//import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
//import { waitForElementToBeRemoved } from "@testing-library/react";
//import productsService from "../../services/productsService.ts";

jest.mock("../../services/productsService.ts", () => ({
  getProducts: jest.fn().mockResolvedValue([
    { id: 1, name: "Milho", price: 10 },
    { id: 2, name: "Chuchu", price: 1 },
    { id: 3, name: "Batata", price: 999 },
    { id: 4, name: "Cenoura", price: 5 },
    { id: 5, name: "Beterraba", price: 6 },
  ]),

  deleteProduct: jest.fn().mockResolvedValue(undefined),
}));

describe("BasicTable", () => {
  it("Testa se a tabela exibe os produtos corretamente", async () => {
    render(
      <MemoryRouter>
        <ProductsView />
      </MemoryRouter>
    );
    //Aguarda o produto aparecer na tela
    expect(await screen.findByText("Milho")).toBeInTheDocument();
    expect(screen.getByText("Chuchu")).toBeInTheDocument();
    expect(screen.getByText("Batata")).toBeInTheDocument();
    expect(screen.getByText("Cenoura")).toBeInTheDocument();
    expect(screen.getByText("Beterraba")).toBeInTheDocument();
    expect(screen.getByText("10 R$")).toBeInTheDocument();
    expect(screen.getByText("5 R$")).toBeInTheDocument();
    expect(screen.getByText("1 R$")).toBeInTheDocument();
    expect(screen.getByText("6 R$")).toBeInTheDocument();
    expect(screen.getByText("999 R$")).toBeInTheDocument();
    expect(screen.getByText("10 R$")).toBeInTheDocument();
  });

  //---------------------------------------------------------//

  

});
