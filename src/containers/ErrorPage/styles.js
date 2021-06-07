import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.body.primaryColor};
  font-size: 2.8rem;

  @media (min-width: 1200px) {
    font-size: 3.6rem;
  }
`;

export const ComponentWrapper = styled.div`
  padding: 2rem;
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
`;

export const Info = styled.p`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.body.primaryColor};

  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;
