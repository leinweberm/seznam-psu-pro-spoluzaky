import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import React Browser Routeru
//Navlink a Link meni url adresu v nasi aplikaci, Router hlida zmeny URL a stara se o to, aby se pri zmene URL vyrenderovali odpovidajici komponenty
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* je treba obalit nasi APPku do BrowserRouteru */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

