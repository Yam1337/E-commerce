import styled from 'styled-components';

const Button = styled.button`
  margin: calc(0.3rem + 0.1vw);
  width: 3rem;
  height: 3rem;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.body.primaryColor};
`;

export const PageButton = styled(Button)`
  cursor: pointer;
  background-color: ${({ theme }) => theme.body.background};
  color: ${({ theme }) => theme.body.primaryColor};

  &:hover {
    background-color: ${({ theme }) => theme.body.primaryColor};
    color: ${({ theme }) => theme.body.background};
  }
`;

export const ActivePageButton = styled(Button)`
  background-color: ${({ theme }) => theme.body.primaryColor};
  color: ${({ theme }) => theme.body.background};
`;

export const ButtorsWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid ${({ theme }) => theme.body.primaryColor};
`;
