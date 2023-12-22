import React from 'react';
import './App.css';

import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
