import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  padding: 2rem;
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
  width: 75rem;
  margin: 0 2rem;
  grid-gap: 4rem 4rem;
  grid-template-columns: 35rem 35rem;
  grid-template-rows: repeat(5, 30rem);
  @media (max-width: 765px) {
    grid-template-columns: 18rem;
    grid-template-rows: repeat(10, 15rem);
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
