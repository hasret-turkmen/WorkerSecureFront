import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // '../index.css' yolunu doğru hale getirin
import App from './js/App'; // './App' yolunu doğru hale getirin

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
