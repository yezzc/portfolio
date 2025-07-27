import React from 'react';
import './Header.css';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header({ isDarkMode, toggleTheme }) {
  return (
    <header className="header">
      <h1 className="logo">Nanditha C</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}

export default Header;
