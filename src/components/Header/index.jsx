import {MenuIcon} from './icons/MenuIcon.jsx';
import {LogoIcon} from './icons/LogoIcon.jsx';
import {LoginIcon} from './icons/LoginIcon.jsx';

import './style.css';

export const Header = () => {

  return (
  <header className="sticky-top">
    <div className="container">
      <MenuIcon/>
      <LogoIcon/> 
      <LoginIcon/>
    </div>
  </header>
  );
}