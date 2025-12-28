import type { Theme } from "@/types";
import type { StateCreator } from "zustand";

export interface ThemeSlice {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
  theme: "system",
  setTheme: (theme) => set({ theme }),
});
