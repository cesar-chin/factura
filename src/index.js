import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  // document.getElementById('cuerpo')
  document.querySelector('#cuerpo')
);
