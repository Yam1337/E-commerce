import styled from 'styled-components';

export const Select = styled.select`
  background-color: ${({ theme }) => theme.body.background};
  border: 0;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-radius: 5px;
  color: ${({ theme }) => theme.body.primaryColor};
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  font-size: calc(1.7rem + 0.15vw);
`;

export const SortWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.body.primaryColor};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

export const Option = styled.option`
  font-size: calc(1rem + 0.2vw);
