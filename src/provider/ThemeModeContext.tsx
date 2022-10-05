import { createContext } from 'react';

export interface IThemeModeContext {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  dark: string;
  light: string;
  handleToggleTheme: () => void;
  // styles: any;
}

export const ThemeModeContext = createContext<IThemeModeContext | undefined>(
  undefined
);
