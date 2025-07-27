import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills'; 


function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!isDarkMode);

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar /> {/* ✅ Add this line */}
      {/* Remove Header if not needed anymore */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
