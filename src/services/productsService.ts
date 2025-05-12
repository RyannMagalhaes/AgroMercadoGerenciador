import type { AxiosResponse } from "axios";
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteProduct: async (id: number): Promise<AxiosResponse<any>> => {
    const response = await api.delete<Product>(`/products/delete/${id}`);
    return response;
  },
};

export default productsService;
