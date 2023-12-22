import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header className="header">
      <div id="logo">
        <a href="/">LuisDev</a>
      </div>
      <nav>
        <div className='burger-menu' onClick={updateMenu}>
          <div className={burgerClass}> </div>
          <div className={burgerClass}> </div>
          <div className={burgerClass}> </div>
        </div>
      </nav>

      <div className={menuClass}>
        <a href="#/qw" className="menu-item">Skills</a>
        <a href="#/qw" className="menu-item">Contact</a>
        <a href="#/qw" className="menu-item">Projects</a>
      </div>
    </header>
  );
};

export default Header;