import type { Product, ProductRegister } from "../../src/assets/types/products";
import api from "./api";

const productsService = {
  getProducts: async (): Promise<Product[]> => {
    const response = await api.get<Product[]>("/products");
    return response.data;
  },

  postProduct: async (product: ProductRegister): Promise<Product> => {
    const response = await api.post<Product>("/products/create", product);
    return response.data;
  },
};

export default productsService;
