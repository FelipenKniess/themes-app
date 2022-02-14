import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeContextProvider } from './hooks/theme';
import Routes from './routes';
import GlobalStyle from './Assets/styles/global';

const App:React.FC = () => (
  <BrowserRouter>
    <ThemeContextProvider>
      <GlobalStyle />
      <ToastContainer position="top-center" />
      <Routes />
    </ThemeContextProvider>
  </BrowserRouter>
);

export default App;
