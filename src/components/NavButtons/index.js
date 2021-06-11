import { useState, useEffect, useContext } from 'react';
import {
  ButtonsWrapper,
  ButtonQuantity,
  CartButton,
  ThemeButton,
} from './styles';
import { CartProductsNumberContext } from '../UserDataContext/UserDataContext';

const NavButtons = ({ isDarkMode, themeHandler }) => {
  const [labelsVisibility, setLabelsVisibility] = useState(false);
  const [cartProductsNumber] = useContext(CartProductsNumberContext);

  const toggleLabelsVisibility = (e) => {
    if (e.matches) {
      setLabelsVisibility(true);
    } else {
      setLabelsVisibility(false);
    }
  };

  useEffect(() => {
    const mediaQueryObject = window.matchMedia('(min-width: 950px)');

    if (mediaQueryObject.matches) {
      setLabelsVisibility(true);
    }

    mediaQueryObject.addEventListener('change', toggleLabelsVisibility);

    return () => {
      mediaQueryObject.removeEventListener('change', toggleLabelsVisibility);
    };
  }, []);

  return (
    <ButtonsWrapper>
      <CartButton activeClassName='activeLink' to='/cart'>
        {cartProductsNumber > 0 ? (
          <ButtonQuantity>{cartProductsNumber}</ButtonQuantity>
        ) : null}

        <span className={labelsVisibility ? '' : 'sr-only'}>Your cart</span>
      </CartButton>
      <ThemeButton onClick={themeHandler}>
        <span className={labelsVisibility ? '' : 'sr-only'}>
          {isDarkMode ? 'Light' : 'Dark'} mode
        </span>
      </ThemeButton>
    </ButtonsWrapper>
  );
};

export default NavButtons;
