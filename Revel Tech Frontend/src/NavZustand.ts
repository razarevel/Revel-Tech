import { create } from "zustand";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}
const navZustand = create<Props>((set) => ({
  show: false,
  setShow: (show: boolean) => set({ show: show }),
}));
export default navZustand;
