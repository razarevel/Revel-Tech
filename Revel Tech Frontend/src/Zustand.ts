import { create } from "zustand";
interface Prop {
  productCollection_id: number;
  sellerCollection_id: number;
  productCollection_name: string;
  sellerCollection_name: string;
  setproductCollection_id: (num: number) => void;
  setSellerCollection_id: (num: number) => void;
  setproductCollection_name: (name: string) => void;
  setSellerCollection_name: (name: string) => void;
}
const useZustand = create<Prop>((set) => ({
  productCollection_id: 1,
  sellerCollection_id: 1,
  productCollection_name: "TV & Video",
  sellerCollection_name: "Pc Products",
  setproductCollection_id: (num: number) => set({ productCollection_id: num }),
  setSellerCollection_id: (num: number) => set({ sellerCollection_id: num }),
  setproductCollection_name: (name: string) =>
    set({ productCollection_name: name }),
  setSellerCollection_name: (name: string) =>
    set({ sellerCollection_name: name }),
}));
export default useZustand;
