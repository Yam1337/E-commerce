import { useState, useEffect, useContext } from 'react';
import { List, NavLinkWrapper, LinkIcon, Error } from './styles';
import NavLoader from '../NavLoader';
import { UserNameContext } from '../UserDataContext/UserDataContext';

const NavList = ({ isMenuOpen, handleClick }) => {
  const [menuLinks, setMenuLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadError, setIsLoadError] = useState(false);
  const [userName, setUserName] = useContext(UserNameContext);

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) {
      setUserName(`${name}'s `);
    }
  }, [setUserName]);

  const fetchMenuLinks = async () => {
    const res = await fetch(
      'https://e-commerce-mock-api.herokuapp.com/main-menu'
    );
    if (res.ok) {
      const data = await res.json();
      setMenuLinks(data.item);
      setIsLoading(false);
    } else {
      setIsLoadError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuLinks().catch(() => {
      setIsLoadError(true);
      setIsLoading(false);
    });
  }, []);

  let responseToRender = '';

  if (isLoading) {
    responseToRender = <NavLoader />;
  } else if (isLoadError) {
    responseToRender = <Error>We couldn&apos;t fetch the data.</Error>;
  } else {
    responseToRender = menuLinks.map((item) => (
      <li key={item.id}>
        <NavLinkWrapper
          activeClassName='activeLink'
          to={item.path}
          onClick={handleClick}
        >
          <LinkIcon className='activeLinkIcon' iconName={item.name} />
          {item.name === 'Profile' ? userName : ''}
          {item.name}
        </NavLinkWrapper>
      </li>
    ));
  }

  return <List isMenuOpen={isMenuOpen}>{responseToRender}</List>;
};

export default NavList;
