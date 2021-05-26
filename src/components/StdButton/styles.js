import styled, { keyframes, css } from 'styled-components';

const smallPhone = `@media only screen and (min-width: 768px)`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  background: ${props => props.background || 'palevioletred'};
  border-radius: ${props => props.radius ? '8px' : '0'};
  color: white;
  margin: 4px 8px;
  min-width: 150px;
  cursor: pointer;
  transition: opacity 0.5s ease;

  ${props => props.radius && css`
    background: pink;
    padding: 40px;
  `};

  & > span {
    color: black;
    padding-left: 10px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const RedButton = styled(ButtonWrapper)`
  background: red;
`;

export const Loader = styled.div`
  border: 6px solid #fff;
  border-top: 6px solid #3482d9;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: ${spin} 1s linear infinite;
`;
