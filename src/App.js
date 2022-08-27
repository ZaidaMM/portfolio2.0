import { useEffect } from 'react';
import { useThemeContext } from './provider/ThemeModeProvider';
import './App.css';

const App = () => {
  const { dark, light, darkMode, setDarkMode } = useThemeContext();

  return (
    <div
      className='App'
      style={
        darkMode
          ? { color: light, backgroundColor: dark }
          : { color: dark, backgroundColor: light }
      }
    >
      <div className='main'>
        <h1>PORTFOLIO</h1>
        <p>This is my new portfolio</p>
      </div>
    </div>
  );
};

export default App;
