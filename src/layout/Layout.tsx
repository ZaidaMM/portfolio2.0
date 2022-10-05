import React, { useEffect } from 'react';
import { useThemeContext } from '../provider/ThemeModeProvider';
import Homepage from '../pages/Homepage';

const Layout = () => {
  const { dark, darkMode, light, setDarkMode } = useThemeContext();

  return (
    <div
      className='main'
      style={
        darkMode
          ? { color: light, backgroundColor: dark }
          : { color: dark, backgroundColor: light }
      }
    >
      <div className='main'>
        <Homepage />
      </div>
    </div>
  );
};
export default Layout;
