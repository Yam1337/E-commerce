import styled from 'styled-components';
import { LinkIcon } from '../NavList/styles';
import logoIcons from '../../assets/icons/logoIcons.svg';

export const LogoLink = styled.a`
  font-family: 'Lobster', 'sans-serif';
  color: #181818;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;

  @media (min-width: 520px) {
    font-size: 2.6rem;
    margin-left: 2rem;
  }

  @media (min-width: 950px) {
    font-size: 3.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 4rem;
  }
`;

export const LogoLinkIcon = styled(LinkIcon)`
  background-image: url(${logoIcons});
  background-position: top;
  background-size: cover;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;

  @media (min-width: 520px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (min-width: 1200px) {
    width: 4rem;
    height: 4rem;
  }
`;
