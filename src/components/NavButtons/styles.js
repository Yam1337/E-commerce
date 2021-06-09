import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import modeIcons from '../../assets/icons/modeIcons.svg';
import cartIcons from '../../assets/icons/cartIcons.svg';

export const ButtonsWrapper = styled.div`
  display: flex;
`;

const baseButtonStyles = css`
  font-family: 'Poppins', 'sans-serif';
  font-size: 1.4rem;
  margin-right: 2rem;
  position: relative;
  background-color: unset;
  border: none;
  outline: none;
  width: 2.5rem;
  height: 2.5rem;
  background-size: cover;
  color: ${({ theme }) => theme.navbar.primaryColor};
  background-position-y: ${({ theme }) => (theme.lightMode ? 'top' : 'bottom')};
  font-weight: ${({ theme }) =>
    theme.lightMode ? theme.fontWeights.bold : theme.fontWeights.normal};

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${({ theme }) => theme.navbar.hoverColor};
  }

  @media (min-width: 520px) {
    margin-right: 3rem;
    width: 3rem;
    height: 3rem;
  }

  @media (min-width: 950px) {
    margin-right: 6rem;
  }

  span:last-of-type {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
  }
`;

export const ButtonQuantity = styled.span`
  position: absolute;
  top: -50%;
  left: 70%;
  display: block;
  color: white;
  background-color: crimson;
  height: 2.4rem;
  width: 2.4rem;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.3rem;
`;

export const CartButton = styled(NavLink)`
  ${baseButtonStyles}
  background-image: url(${cartIcons});

  &:hover,
  &:focus {
    background-position-y: center;
    background-position-x: right;
  }

  &:hover ${ButtonQuantity}, &:focus ${ButtonQuantity} {
    background-color: ${({ theme }) =>
      theme.lightMode ? theme.navbar.primaryColor : theme.navbar.primaryColor};
    color: ${({ theme }) => theme.navbar.background};
  }
`;

export const ThemeButton = styled.button`
  ${baseButtonStyles}
  background-image: url(${modeIcons});
  background-size: 200% 200%;

  &:hover,
  &:focus {
    background-position-x: right;
  }
`;
