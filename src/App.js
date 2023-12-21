import React from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Header from './components/Header/Header';
import AboutMe from './components/AbourtMe/AboutMe';
function App() {
  return (
    <div className="app">
      {/* Utiliza tus componentes aquí */}
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
