import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  frid-column-gap: 50px;
  grid-template-columns: 1fr 1fr;
s  position: absolute;
  left: 0;
  top: 2rem;
`;

export const ProductCard = styled.div`
  width: 100px;
  height: 150px;
  border: 1px solid black;
`;
