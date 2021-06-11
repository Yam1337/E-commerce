import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
`;

export const Photo = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  transition: transform 350ms;

  &:hover {
    transform: scale(2) rotate(360deg);
  }
`;

export const Span = styled.span`
  font-size: calc(1.1rem + 0.2vw);
  color: ${({ theme }) => theme.body.background};
  margin: auto 0;
`;
