import { CategoryData } from "./categoryIntface";

export interface ProductData {
  id: string;
  name: string;
  price: string;
  stock: string;
  imageUel: string;
  detail: string;
  categoryId: string;
  category: CategoryData;
}

export interface ProductParam {
  searchName?: string;
  categoryId?: string;
  sortPrice?: string;
}