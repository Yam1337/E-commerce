import styled from 'styled-components';
import { displayCardAnimation } from '../../styles';

export const Title = styled.h1`
  color: ${({ theme }) => theme.body.primaryColor}};
  font-size: 3rem;
`;

export const ComponentWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  padding: 2rem 4rem;
`;

export const GridContainer = styled.div`
  background-color: ${(props) => props.color || ''};
  margin-top: 1rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 0.8fr));
  grid-auto-rows: minmax(16rem, 0.5fr);
  grid-gap: 2rem 4%;

  * {
    animation: ${displayCardAnimation} 250ms ease-out;
  }
`;
