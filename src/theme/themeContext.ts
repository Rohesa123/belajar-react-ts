import { createContext, useContext } from "react";

export const THEME_KEY = "theme";
export type Theme = "dark" | "light";

export type ThemeState = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeState>({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function useTheme(): ThemeState {
  return useContext(ThemeContext);
}

/** Tema awal: dari localStorage, jika belum ada ikuti preferensi sistem. */
export function readTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
    if (window.matchMedia?.("(prefers-color-scheme: light)").matches) {
      return "light";
    }
  } catch {
    /* abaikan */
  }
  return "dark"; // default gelap
}
