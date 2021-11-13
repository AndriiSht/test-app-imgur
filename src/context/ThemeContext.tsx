import { createTheme, PaletteMode, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const THEME: { [key: string]: PaletteMode } = {
  DARK: "dark",
  LIGHT: "light",
};

const ThemeToggleContext = createContext({
  themePaletteMode: "",
  setThemePaletteMode: (mode: SetStateAction<"dark" | "light">) => {},
});

export const useThemeToggleContext = () => useContext(ThemeToggleContext);

export const ThemeContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [themePaletteMode, setThemePaletteMode] = useState(
    prefersDarkMode ? THEME.DARK : THEME.LIGHT
  );

  useEffect(() => {
    setThemePaletteMode(prefersDarkMode ? THEME.DARK : THEME.LIGHT);
  }, [prefersDarkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themePaletteMode,
        },
      }),
    [themePaletteMode]
  );

  return (
    <ThemeToggleContext.Provider
      value={{ themePaletteMode, setThemePaletteMode }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
