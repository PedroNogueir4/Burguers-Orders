import React from 'react';
import ReactDOM from 'react-dom';
//import App from './pages/home';
import Order from './pages/orders';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <>
      <Order/>
      <GlobalStyle/>
  </>,
   document.getElementById('root'))
