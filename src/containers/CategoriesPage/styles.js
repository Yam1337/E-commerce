import styled from 'styled-components';
import { displayCardAnimation } from '../../styles';

export const Title = styled.h1`
  color: ${(props) => props.color || 'black'}};
`;

export const ComponentWrapper = styled.div`
  padding: 2rem;
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
