import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";      // base layout, grids, images
import "./styles/main.css"; // overrides, colors, mobile


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
