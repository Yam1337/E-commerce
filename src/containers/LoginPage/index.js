import { useState, useEffect } from 'react';
import {
  Hello,
  ComponentWrapper,
  Input,
  FormContainer,
  InputWrapper,
  Span,
  LogButton,
  Error,
} from './styles';

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      history.push('/profile');
    }
  }, [history]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setError(false);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
    setError(false);
  };
  const lastnameHandler = (e) => {
    setLastname(e.target.value);
    setError(false);
  };
  const joinHandler = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      localStorage.setItem('authToken', 'some token');
      localStorage.setItem('email', email);
      localStorage.setItem('name', name);
      localStorage.setItem('lastname', lastname);
      history.push('/profile');
    }
  };

  const validateEmail = (item) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(item).toLowerCase());
  };

  const validateInput = (item) => {
    return item.length < 15 && item.length >= 3 && !item.match(/[0-9]/);
  };

  const handleValidation = () => {
    if (validateEmail(email) && validateInput(name) && validateInput(lastname))
      return true;
    setError(true);
    return false;
  };

  return (
    <>
      <ComponentWrapper>
        <FormContainer>
          <Hello>Login</Hello>
          <InputWrapper>
            {error && (
              <Error>Check your inputs, some of them might be incorrect!</Error>
            )}
            <Span>Email:</Span>
            <Input
              type='text'
              placeholder='Enter e-mail'
              value={email}
              onChange={emailHandler}
            />

            <Span>Name:</Span>
            <Input
              type='text'
              placeholder='Enter name'
              value={name}
              onChange={nameHandler}
            />

            <Span>Lastname:</Span>
            <Input
              type='text'
              placeholder='Enter lastname'
              value={lastname}
              onChange={lastnameHandler}
            />
            <LogButton onClick={joinHandler}>Join!</LogButton>
          </InputWrapper>
        </FormContainer>
      </ComponentWrapper>
    </>
  );
};

export default LoginPage;
