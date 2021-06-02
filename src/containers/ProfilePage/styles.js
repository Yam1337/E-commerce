import styled from 'styled-components';

export const Hello = styled.h1`
  text-align: center;
  color: ${(props) => props.color || 'black'}};
  font-size: calc(3rem + 0.6vw);
`;

export const ComponentWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const Info = styled.p`
  font-size: calc(1.5rem + 0.4vw);
  color: ${(props) => props.color || 'black'}};
  margin-top: 2.5rem;
  text-align: center;
`;
