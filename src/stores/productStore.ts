import { fetchProducts } from "@/app/_actions/productAction";
import { ProductData, ProductParam } from "@/interface/productIntface";
import { create } from "zustand";

interface State {
  products: ProductData[];
  productLoaded: boolean;
}

interface Actions {
  loadProducts: (params: ProductParam) => void;
}

export const useProductStore = create<State & Actions>((set) => ({
  loadProducts: async (params: ProductParam) => {
    set({ productLoaded: false });

    const products = await fetchProducts(params);

    set({ productLoaded: true, products });
  },
  products: [],
  productLoaded: false,
}));
