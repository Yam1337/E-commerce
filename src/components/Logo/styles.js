import styled from 'styled-components';
import { LinkIcon } from '../NavList/styles';
import logoIcons from '../../assets/icons/logoIcons.svg';

export const LogoLink = styled.a`
  font-family: ${({ theme }) => theme.fontFamilies.displayFont}, 'sans-serif';
  color: ${({ theme }) => theme.navbar.primaryColor};
  font-size: 2rem;
  display: flex;
  outline: none;
  font-weight: ${({ theme }) =>
    theme.lightMode ? theme.fontWeights.bold : theme.fontWeights.normal};
  align-items: center;
  margin-left: 1rem;

  @media (min-width: 520px) {
    font-size: 2.4rem;
    margin-left: 2rem;
  }

  @media (min-width: 950px) {
    font-size: 2.8rem;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.navbar.hoverColor};
  }

  &:hover div,
  &:focus div {
    background-position: center;
  }
`;

export const LogoLinkIcon = styled(LinkIcon)`
  background-image: url(${logoIcons});
  background-position: ${({ theme }) => (theme.lightMode ? 'top' : 'bottom')};
  background-size: cover;
  width: 2.6rem;
  height: 2.6rem;
  margin-right: 1rem;

  @media (min-width: 520px) {
    width: 3rem;
    height: 3rem;
  }
  @media (min-width: 950px) {
    width: 3.4rem;
    height: 3.4rem;
  }
`;
