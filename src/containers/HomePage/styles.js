import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { displayCardAnimation } from '../../styles';

export const ComponentWrapper = styled.div`
  padding: 2rem 4rem;
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  color: ${({ theme }) => theme.body.primaryColor};
  @media (max-width: 765px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  width: 80rem;
  margin-top: 6rem;
  grid-gap: 4rem 12rem;
  grid-template-columns: 55rem 55rem;
  grid-template-rows: repeat(5, 50rem);

  @media (max-width: 1200px) {
    justify-content: center;
    width: 80rem;
    margin-bottom: 2rem;
    grid-gap: 4rem 12rem;
    grid-template-columns: 40rem 40rem;
    grid-template-rows: repeat(5, 35rem);
  }
  @media (max-width: 920px) {
    margin-top: 6rem;
    margin-bottom: 2rem;
    justify-content: center;
    grid-template-columns: 28rem 28rem;
    grid-gap: 2rem 4rem;
    width: 32rem;
    grid-template-rows: repeat(5, 26rem);
  }

  @media (max-width: 600px) {
    justify-content: center;
    margin: 3rem 2rem;
    grid-template-columns: 28rem;
    width: 32rem;
    grid-template-rows: repeat(10, 26rem);
  }

  * {
    animation: ${displayCardAnimation} 250ms ease-out;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  @media (max-width: 600px) {
    position: static;
    margin-top: 2rem;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
