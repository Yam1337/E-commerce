import { useState, useEffect } from 'react';
import { ButtonsWrapper, CartButton, ThemeButton } from './styles';

const NavButtons = ({ isDarkMode, themeHandler }) => {
  const [labelsVisibility, setLabelsVisibility] = useState(false);

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
      <CartButton>
        <span className='button_quantity'>3</span>
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
