import { create } from "zustand";

interface SearchState {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchQuery: "",
  setSearchQuery: (value) =>
    set({ searchQuery: value }),
}));