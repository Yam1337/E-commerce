import { useState, useEffect } from 'react';
import { List, NavLinkWrapper, LinkIcon, Error } from './styles';
import NavLoader from '../NavLoader';

const NavList = ({ isMenuOpen, handleClick }) => {
  const [menuLinks, setMenuLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadError, setIsLoadError] = useState(false);

  const fetchData = async () => {
    const res = await fetch('https://frontend-labs.herokuapp.com/main-menu');
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
    fetchData().catch(() => {
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
          activeClassName='navLink'
          to={item.path}
          onClick={handleClick}
        >
          <LinkIcon className='navLink_icon' iconName={item.name} />
          {item.name}
        </NavLinkWrapper>
      </li>
    ));
  }

  return <List isMenuOpen={isMenuOpen}>{responseToRender}</List>;
};

export default NavList;
