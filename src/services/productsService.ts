import type { Product } from "../../src/assets/types/products";
import api from "./api";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products");
  return response.data;
};
