import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import homeIcons from '../../assets/icons/homeIcons.svg';
import categoriesIcons from '../../assets/icons/categoriesIcons.svg';
import profileIcons from '../../assets/icons/profileIcons.svg';

export const List = styled.ul`
  top: 0;
  left: 0;
  transform: ${(props) => {
    return props.isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
  }};
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  transition: transform 0.8s ease-in-out;

  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 5;
  background-color: #f5f5f5;
  font-weight: 500;
  font-size: 1.8rem;
  list-style: none;
  color: #989898;
  font-family: 'Poppins', 'sans-serif';
  align-items: center;

  @media (min-width: 768px) {
    position: static;
    width: unset;
    height: unset;
    flex-direction: unset;
    transform: unset;
    transition: unset;
  }

  @media (min-width: 1200px) {
    font-size: 2.2rem;
  }

  .navLink {
    color: #181818;
    font-weight: 700;

    .navLink_icon {
      background-position: top center;
    }
  }
`;

export const NavLinkWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  @media (min-width: 950px) {
    margin-right: 3rem;
  }

  @media (min-width: 1200px) {
    margin-right: 6rem;
  }
`;

export const LinkIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-position: center;
  background-image: url(${(props) => {
    switch (props.iconName) {
      case 'Home': {
        return homeIcons;
      }
      case 'Categories': {
        return categoriesIcons;
      }
      default: {
        return profileIcons;
      }
    }
  }});
`;

export const Error = styled.div`
  color: #989898;
  font-size: 1.4rem;
  font-family: 'Poppins';
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
`;
