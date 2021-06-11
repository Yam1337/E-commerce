import styled from 'styled-components';
import { displayCardAnimation } from '../../styles';

export const Title = styled.h1`
  color: ${({ theme }) => theme.body.primaryColor};
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: calc(2.4rem + 0.2vw);
  }
`;

export const ComponentWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  padding: 2rem 4rem;
`;

export const GridContainer = styled.div`
  margin-top: 1rem;
  padding: 2rem 3% 2rem 3%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(25rem, 40rem));
  grid-auto-rows: minmax(20rem, 35rem);
  grid-gap: 2rem 4%;

  * {
    animation: ${displayCardAnimation} 250ms ease-out;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(23rem, 30rem));
    grid-auto-rows: minmax(20rem, 28rem);
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(25rem, 28rem));
    grid-auto-rows: minmax(20rem, 25rem);
  }

  @media (max-width: 520px) {
    grid-template-columns: minmax(25rem, 30rem);
    grid-auto-rows: minmax(20rem, 27rem);
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Error = styled.h2`
  color: ${({ theme }) => theme.body.primaryColor};
`;
