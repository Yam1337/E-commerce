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

export const Input = styled.input`
  margin-top: 0.5rem;
  font-size: 1.5rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
`;

export const Span = styled.span`
  margin-top: 2rem;
  font-size: calc(1.6rem + 0.2vw);
`;

export const LogButton = styled.button`
  margin: 2rem auto;
  width: 10rem;
  background-color: transparent;
  font-size: calc(1.6rem + 0.2vw);
  border-radius: 15px;
  transition: 150ms;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const Error = styled.h2`
  font-size: calc(1.5rem + 0.4vw);
  color: ${(props) => props.color || 'crimson'};
  margin-top: 2.5rem;
  text-align: center;
`;
