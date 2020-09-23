import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from "styled-components"

const theme = {
  colored : {
    "backgroundColor":"#2a00ff",
    "textColor": "#fff",
    "secondBackgroundColor":"rgba(0,0,0,0.2)",
    "secondTextColor": "#ff2a00"
  },
  dark : {
    "backgroundColor":"#000",
    "textColor": "#fff",
    "secondBackgroundColor":"#FF2A00",
    "secondTextColor": "#ff2a00"
  },
  light : {
    "backgroundColor":"#fff",
    "textColor": "#000",
    "secondBackgroundColor":"#e9e5ff",
    "secondTextColor": "#ff2a00"
  }
}


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
