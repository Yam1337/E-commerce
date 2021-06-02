import styled from 'styled-components';

import modeIcons from '../../assets/icons/modeIcons.svg';
import cartIcons from '../../assets/icons/cartIcons.svg';

export const ButtonsWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-family: 'Poppins', 'sans-serif';
  font-size: 1.4rem;
  margin-right: 2rem;
  position: relative;
  background-color: unset;
  border: none;
  outline: none;
  width: 2.5rem;
  height: 2.5rem;
  background-size: 200% 200%;

  @media (min-width: 520px) {
    margin-right: 3rem;
    width: 3rem;
    height: 3rem;
  }

  @media (min-width: 950px) {
    margin-right: 6rem;
  }

  span {
    position: absolute;
    font-weight: 700;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
  }
`;

export const CartButton = styled(Button)`
  background-position: top center;
  background-image: url(${cartIcons});

  .button_quantity {
    top: -40%;
    left: 100%;
  }
`;

export const ThemeButton = styled(Button)`
  background-image: url(${modeIcons});
`;
