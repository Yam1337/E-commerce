import { useState } from 'react';

import NavBarWrapper from './styles';

import HamburgerButton from '../HamburgerButton';
import Logo from '../Logo';
import NavList from '../NavList';

import NavButtons from '../NavButtons';

const NavBar = ({ isDarkMode, themeHandler }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickHandler = () => {
    setIsMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <NavBarWrapper>
      <HamburgerButton isMenuOpen={isMenuOpen} handleClick={clickHandler} />
      <Logo />
      <NavList isMenuOpen={isMenuOpen} handleClick={clickHandler} />
      <NavButtons isDarkMode={isDarkMode} themeHandler={themeHandler} />
    </NavBarWrapper>
  );
};

export default NavBar;
