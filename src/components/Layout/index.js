import './layout.css';
import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='App'>
      {/* Navbar bude vyrenderovan na kazde strance protoze je v hlavnim tele Layout komponentu */}
      <Navbar />
      <div className='page'>
         {/* Outlet ma na starost vyrenderovani komponentu, ktere si vyzada Router na zaklade zmeny URL */}
         <Outlet />
      </div>
    </div>
  )
}
