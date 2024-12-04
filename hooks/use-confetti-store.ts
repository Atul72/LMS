import { create } from "zustand";

type ConfettiStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useConfettiStore = create<ConfettiStore>((set) => ({
  isOpen: false,
  // This function is used to open the confetti store
  onOpen: () => set({ isOpen: true }),
  // This function is used to close the confetti store
  onClose: () => set({ isOpen: false }),
}));
