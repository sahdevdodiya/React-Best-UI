import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
)