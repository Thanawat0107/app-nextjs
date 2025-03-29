import { ProductParam } from "@/interface/productIntface";
import { db } from "./db";

const getProducts = async ({
  searchName,
  categoryId,
  sortPrice,
  
}: ProductParam) => {
  return await db.product.findMany({
    where: {
      name: {
        contains: searchName? searchName: undefined,
      },
      categoryId: {
        equals: categoryId ? categoryId: undefined,
      },
    },
    orderBy: {
      price: sortPrice as any,
    },
    include: {
      category: true,
    }
  })
}

const getProduct = async (id: string) => {
 return await db.product.findUnique({
    where: {
      id: id,
    },
    include: {
      category: true,
    },
  });
};

const createProduct = async (data: any) => {
  return await db.product.create({
    data: data,
  });
};

const updateProduct = async (id: string, data: any) => {
  return await db.product.update({
    where: {
      id,
    },
    data: data,
  });
};

const deleteProduct = async (id: string) => {
  return await db.product.delete({
    where: {
      id,
    },
  });
};

export const productService = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
