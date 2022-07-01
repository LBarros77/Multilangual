import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import './i18n';
import i18next from 'i18next';

const lang = localStorage.getItem('lang') || 'en';
axios.defaults.baseURL = 'http:localhost:5000/'
axios.defaults.headers.common['Accept-Language'] = lang;
i18next.changeLanguage(lang);
document.documentElement.lang = lang;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
