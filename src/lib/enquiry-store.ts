import { create } from "zustand";

interface EnquiryState {
  model: string;
  setModel: (model: string) => void;
}

export const useEnquiryStore = create<EnquiryState>((set) => ({
  model: "Phantom",
  setModel: (model) => set({ model }),
}));
