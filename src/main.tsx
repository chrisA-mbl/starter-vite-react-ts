import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import theme from './styles/Theme';
import App from './App';
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
