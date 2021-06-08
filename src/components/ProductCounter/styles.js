import styled from 'styled-components';

export const ChangeButton = styled.button`
  height: 62px;
  width: 31px;
  border: none;
  background-color: ${({ theme }) => theme.body.primaryColor};
  color: ${({ theme }) => theme.body.background};
  font-family: 'Poppins', sans-serif;
  font-size: 26px;
  font-weight: bold;
  &:active {
    transform: scale(0.95);
  }
`;

export const Counter = styled.div`
  display: flex;
  height: 62px;
  width: 31px;
  font-family: 'Poppins', sans-serif;
  font-size: 26px;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  align-items: center;
  align-content: center;
`;

export const CounterWrapper = styled.div`
  display: flex;
`;
