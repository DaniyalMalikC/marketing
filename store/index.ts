import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { type ThemeSlice, createThemeSlice } from "./slices/theme-slice";

type StoreState = ThemeSlice;

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (...a) => ({
        ...createThemeSlice(...a),
      }),
      {
        name: "marketing-storage",
        partialize: (state) => ({
          theme: state.theme,
        }),
      },
    ),
    {
      name: "Marketing Store",
    },
  ),
);

// Export individual hooks for convenience
export const useTheme = () => useStore((state) => state.theme);
export const useSetTheme = () => useStore((state) => state.setTheme);
