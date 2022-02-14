import React, { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

interface ThemeContextData {
    theme: ThemeData;
    updateTheme(theme: ThemeData): void;
}

type ThemeData = {
    id: string,
    name: string
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
}

const defaultTheme = {
  id: '0',
  name: 'default',
  backgroundColor: '#FFF',
  primaryColor: '#EF7C8E',
  secondaryColor: '#616D69',
  accentColor: '#007FFF',
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeContextProvider:React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState('@themes-app/themeUsed', defaultTheme);

  const updateTheme = (newTheme: ThemeData) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ updateTheme, theme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>

  );
};

function useTheme():ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
}

export { ThemeContextProvider, useTheme };
