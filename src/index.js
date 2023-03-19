import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Crear un shadow DOM
const shadowHost = document.getElementById('shadow-host');
const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

const shadowContent = document.createElement('div');
shadowContent.innerHTML = '<p>Este es un ejemplo de Shadow DOM para practicar automation testing.</p>';
shadowRoot.appendChild(shadowContent);

reportWebVitals();
