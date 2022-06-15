import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import theme from './theme'
import './styles.css'
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider provider={theme}>
      <BrowserRouter>    
        <MoralisProvider serverUrl="https://s9jjjsa4mmpy.usemoralis.com:2053/server" appId="SqjCd73EOiDkYt9vlS01Ybi4PKjXTSV8I7k4Ocj9">
          <App />
        </MoralisProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
