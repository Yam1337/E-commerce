import { useState, useEffect } from 'react';
import { List, NavLinkWrapper, LinkIcon } from './styles';

const NavList = ({ isMenuOpen, handleClick }) => {
  const [menuLinks, setMenuLinks] = useState([]);

  useEffect(() => {
    fetch('https://frontend-labs.herokuapp.com/main-menu')
      .then((res) => res.json())
      .then((res) => {
        setMenuLinks(res.item);
      });
  }, []);

  return (
    <List isMenuOpen={isMenuOpen}>
      {menuLinks.map((item) => (
        <li key={item.id}>
          <NavLinkWrapper
            activeClassName='navLink'
            to={item.path}
            onClick={handleClick}
          >
            <LinkIcon className='navLink_icon' iconName={item.name} />
            {item.name}
          </NavLinkWrapper>
        </li>
      ))}
    </List>
  );
};

export default NavList;
