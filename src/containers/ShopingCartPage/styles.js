import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { displayCardAnimation } from '../../styles';

export const ComponentWrapper = styled.div`
  padding: 2rem;
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
  width: 80vh;
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  justify-content: center;
  width: 80rem;
  margin-top: 6rem;
  grid-gap: 4rem 12rem;
  grid-template-columns: 55rem 55rem;
  grid-auto-rows: minmax(12rem, 0.5fr);

  @media (max-width: 1200px) {
    justify-content: center;
    width: 80rem;
    margin-bottom: 2rem;
    grid-gap: 4rem 12rem;
    grid-template-columns: 40rem 40rem;
  }
  @media (max-width: 920px) {
    margin-top: 6rem;
    margin-bottom: 2rem;
    justify-content: center;
    grid-template-columns: 28rem 28rem;
    grid-gap: 2rem 4rem;
    width: 32rem;
  }

  @media (max-width: 600px) {
    justify-content: center;
    margin: 3rem 2rem;
    grid-template-columns: 28rem;
    width: 32rem;
  }

  * {
    animation: ${displayCardAnimation} 250ms ease-out;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  position: absolute;
  left: 5rem;
  top: 11rem;
  margin-bottom: 3rem;
  @media (max-width: 600px) {
    position: static;
    margin-top: 2rem;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const ProductCardOverlay = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  font-size: calc(1.1em + 0.5vw);
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #181818;
  opacity: 0%;
  z-index: 1;
  &:hover {
    opacity: 70%;
  }
  transition: opacity 0.5s;
  img {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 40%;
    margin-bottom: 20px;
    opacity: 100%;
  }
`;

export const MarginLine = styled.div`
  background-color: #181818;
  display: flex;
  align-self: center;
  width: 80vw;
  height: 1px;
  margin-bottom: 20px;
`;

export const DeleteText = styled.div`
  opacity: 100%;
  color: #f5f5f5;
  text-align: center;
`;
export const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 20px 0px 20px 0px;
`;

export const IconImage = styled.img`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 3.2rem;
  width: 3.2rem;
  object-fit: cover;
  object-position: ${({ theme }) => (theme.lightMode ? 'bottom' : 'top')};
`;
export const ButtonText = styled.div`
  display: flex;
`;
export const ButtonCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
