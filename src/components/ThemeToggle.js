import React from 'react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
