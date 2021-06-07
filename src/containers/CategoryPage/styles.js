import styled from 'styled-components';
import { displayCardAnimation } from '../../styles';

export const Title = styled.h1`
  color: ${({ theme }) => theme.body.primaryColor};
`;

export const ComponentWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  padding: 2rem;
`;

export const GridContainer = styled.div`
  margin-top: 1rem;
  padding: 2rem 3% 2rem 3%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(5rem, 0.5fr));
  grid-auto-rows: minmax(12rem, 0.5fr);
  grid-gap: 2rem 4%;

  * {
    animation: ${displayCardAnimation} 250ms ease-out;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(12rem, 0.9fr));
    grid-auto-rows: minmax(12rem, 0.6fr);
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(8rem, 0.9fr));
    grid-auto-rows: minmax(8rem, 0.6fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: minmax(16rem, 0.9fr);
    grid-auto-rows: minmax(12rem, 0.6fr);
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Error = styled.h2`
  color: ${({ theme }) => theme.body.primaryColor};
`;
