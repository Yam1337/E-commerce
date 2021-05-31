import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => props.color || 'black'}};
`;

export const ComponentWrapper = styled.div`
  padding: 2rem;
`;

export const Info = styled.p`
  margin-top: 1rem;
  color: ${(props) => props.color || 'black'}};
`;
