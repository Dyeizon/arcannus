// import {Menu} from '../Menu/Menu.jsx';
import {MenuIcon} from './icons/MenuIcon.jsx';
import {LogoIcon} from './icons/LogoIcon.jsx';
import {LoginIcon} from './icons/LoginIcon.jsx';

import './style.css';

export const Header = () => {
  var isMenuActive = false;

  function openMenu() {
    this.isMenuActive = true;
    document.getElementById('menu').style.width = "300px";
    document.getElementById('menuContent').style.opacity = "1";
  }

  function closeMenu() {
    document.getElementById('menu').style.width = "0px";
    document.getElementById('menuContent').style.opacity = "0";
    
    setTimeout(() => {
      this.isMenuActive = false;
    }, 500)
  }

  return (
  <header className="sticky-top">
    <div className="container h-alignment">
      {/* <Menu id="menu" className={"menu menuTransitions" + (isMenuActive ? 'showMenu' : '')}/> */}
      <MenuIcon className={isMenuActive ? 'hideMenuIcon' : ''}/>
      <LogoIcon/>
      <LoginIcon/>
    </div>
  </header>
  );
}
