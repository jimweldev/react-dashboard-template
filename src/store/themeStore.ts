import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const themeStore = (set: any): ThemeState => ({
  theme: "light",
  toggleTheme: () =>
    set((state: ThemeState) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
});

const useThemeStore = create(
  devtools(
    persist(themeStore, {
      name: "theme",
    })
  )
);

export default useThemeStore;
