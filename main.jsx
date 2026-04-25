import React from 'react';
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Global CSS imports - load once here
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>
);