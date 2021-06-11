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
  width: 100vh;
  height: 100%;
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
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }

  * {
    animation: ${displayCardAnimation} 250ms ease-out;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.body.primaryColor};
  font-size: 2.8rem;

  @media (min-width: 1200px) {
    font-size: 3.6rem;
  }
`;

export const ProductCardOverlay = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  width: 34px;
  height: 34px;
  align-items: center;
  position: absolute;
  top: 3%;
  left: calc(97% - 34px);
  bottom: 0;
  right: 0;
  background-color: #181818;
  z-index: 1;
  border-radius: 50%;
  &:hover {
    opacity: 100%;
    transform: scale(1.1);
  }
  transition: transform 0.5s;
  img {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 16px;
    width: 14px;
  }
`;

export const IconImage = styled.img`
  display: flex;
  height: 3.2rem;
  width: 3.2rem;
  object-fit: cover;
  object-position: ${({ theme }) => (theme.lightMode ? 'bottom' : 'top')};
`;

export const Info = styled.p`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.body.primaryColor};

  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;
