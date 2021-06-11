import styled, { keyframes } from 'styled-components';
import DoorIcons from '../../assets/icons/doorIcons.svg';
import LoginArrowIcons from '../../assets/icons/loginArrowIcons.svg';
import LogoutArrowIcons from '../../assets/icons/logoutArrowIcons.svg';

export const Hello = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.body.primaryColor};
  font-size: 2.4rem;
  margin-bottom: 2rem;

  @media (min-width: 520px) {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 3.4rem;
  }
`;

export const ComponentWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 25rem);
  margin: 0 auto;
  width: 75%;
  max-width: 42rem;
  @media (min-width: 520px) {
    width: 65%;
  }

  @media (min-width: 768px) {
    min-height: calc(100vh - 20rem);
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  font-size: 1.6rem;
  height: 2.4rem;
  font-family: 'Poppins';
  color: #989898;
  border-bottom: 1px solid ${({ theme }) => theme.body.primaryColor};
  outline: none;

  &:focus + label {
    transform: translateY(-80%);
  }

  &:not(:placeholder-shown) + label {
    transform: translateY(-80%);
  }

  @media (min-width: 520px) {
    font-size: 1.8rem;
    height: 2.8rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
    height: 3rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.body.primaryColor};
  transform-origin: top left;
  transition: transform 0.4s ease-out;

  @media (min-width: 520px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Error = styled.p`
  min-height: 1.8rem;
  color: ${({ theme }) => theme.body.errorColor};
  font-size: 1.2rem;
  font-weight: ${({ theme }) =>
    theme.lightMode ? theme.fontWeights.bold : theme.fontWeights.normal};

  @media (min-width: 768px) {
    font-size: 1.4rem;
    min-height: 2.1rem;
  }
`;

const anime1 = keyframes`
  from {
      transform: translateX(-40%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
`;

const anime2 = keyframes`
  from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-40%);
      opacity: 0;
    }
`;

export const Button = styled.button`
  margin: 2rem 0;
  width: 100%;
  font-family: 'Poppins';
  outline: none;
  border: 1px solid ${({ theme }) => theme.body.primaryColor};
  background-color: ${({ theme }) => theme.body.primaryColor};
  font-size: 2.2rem;
  color: ${({ theme }) => theme.body.background};
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.2s;
  padding: 0.8rem 0;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.body.background};
    color: ${({ theme }) => theme.body.primaryColor};
  }

  &:hover div,
  &:focus div {
    background-position: ${({ theme }) => (theme.lightMode ? 'bottom' : 'top')};
  }
  &:hover div:before,
  &:focus div:before {
    background-position: ${({ theme }) => (theme.lightMode ? 'bottom' : 'top')};
  }
`;

export const LoginButton = styled(Button)`
  &:hover div:before,
  &:focus div:before {
    animation: ${anime1} 1s ease infinite;
  }
`;

export const LogoutButton = styled(Button)`
  &:hover div:before,
  &:focus div:before {
    animation: ${anime2} 1s ease infinite;
  }
`;

const buttonIcon = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  margin-right: 1rem;
  background-size: cover;
  position: relative;
  background-position: ${({ theme }) => (theme.lightMode ? 'top' : 'bottom')};
  background-image: url(${DoorIcons});

  &::before {
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    position: absolute;

    background-position: ${({ theme }) => (theme.lightMode ? 'top' : 'bottom')};
    background-size: cover;
  }
`;

export const LoginButtonIcon = styled(buttonIcon)`
  &::before {
    top: 0;
    left: 0;
    background-image: url(${LoginArrowIcons});
  }
`;

export const LogoutButtonIcon = styled(buttonIcon)`
  &::before {
    top: 0;
    left: -10%;
    background-image: url(${LogoutArrowIcons});
  }
`;
