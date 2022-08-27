import { useState, useContext, useEffect } from 'react';
import { ThemeModeContext } from './ThemeModeContext';

const ThemeModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const dark = '#020826';
  const light = '#f5f5f5';

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (darkMode) {
      setDarkMode(darkMode);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeModeContext.Provider
      value={{
        dark,
        light,
        darkMode,
        setDarkMode,
        handleToggleTheme,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};

function useThemeContext() {
  return useContext(ThemeModeContext);
}

export { ThemeModeProvider, useThemeContext };
