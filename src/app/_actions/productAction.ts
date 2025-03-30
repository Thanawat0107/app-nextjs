"use server";

import { ProductData, ProductParam } from "@/interface/productIntface";
import fetchInterceptor from "@/utils/fetchInterceptor";

export const fetchProducts = async ({
  searchName = "",
  categoryId = "",
  sortPrice = "",
}: ProductParam): Promise<ProductData[]> => {
  const param = new URLSearchParams({
    searchName: searchName,
    categoryId: categoryId,
    sortPrice: sortPrice,
  }).toString();

  const result = await fetchInterceptor.get("api/products");

  return result;
};

export const fetchProduct = async (id: string): Promise<ProductData> => {
    const result = await fetchInterceptor.get(`/api/product/${id}`);
    
    return result;
}

export const createProduct = async (product: any): Promise<ProductData> => {
  const result = await fetchInterceptor.post("/api/product", product);

  return result;
};

export const updateProduct = async (id: string, product: any): Promise<ProductData> => {
  const result = await fetchInterceptor.put(`/api/product/${id}`, product);

  return result;
}

export const deleteProduct = async (id: string): Promise<ProductData> => {
  const result = await fetchInterceptor.del(`/api/product/${id}`);

  return result;
};