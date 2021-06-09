import styled from 'styled-components';

export const Info = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.body.primaryColor};
  text-align: center;

  @media (min-width: 520px) {
    font-size: 1.6rem;
  }
`;

export const Hello = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.body.secondaryColor};
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 2rem;

  @media (min-width: 520px) {
    font-size: 2.4rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  span {
    color: ${({ theme }) => theme.body.errorColor};
    font-size: 2.4rem;
    font-weight: bold;

    @media (min-width: 520px) {
      font-size: 3rem;
    }

    @media (min-width: 768px) {
      font-size: 3.4rem;
    }
  }
`;
