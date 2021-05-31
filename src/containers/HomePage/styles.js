import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  padding: 2rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 1rem 10%;
  grid-template-columns: repeat(2, 0.6fr);
  margin: 2rem 0;
  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
