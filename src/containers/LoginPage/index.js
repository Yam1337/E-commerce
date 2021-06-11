import { useState, useEffect, useContext } from 'react';
import {
  Hello,
  ComponentWrapper,
  Input,
  FormWrapper,
  LoginButton,
  LoginButtonIcon,
  Label,
  Error,
  InputGroup,
} from './styles';
import { UserNameContext } from '../../components/UserDataContext/UserDataContext';

const LoginPage = ({ history }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [userName, setUserName] = useContext(UserNameContext);

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      history.push('/profile');
    }
  }, [history]);

  const nameHandler = (e) => {
    setName(e.target.value);

    if (!e.target.value) {
      setNameError('Please provide the value');
      return;
    }

    if (validateInput(e.target.value)) {
      setNameError('');
      return;
    }
    setNameError('Please keep it 3-15 letters, no special characters');
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);

    if (!e.target.value) {
      setLastNameError('Please provide the value');
      return;
    }

    if (validateInput(e.target.value)) {
      setLastNameError('');
      return;
    }
    setLastNameError('Please keep it 3-15 letters, no special characters');
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);

    if (!e.target.value) {
      setEmailError('Please provide the value');
      return;
    }

    if (validateEmail(e.target.value)) {
      setEmailError('');
      return;
    }
    setEmailError('E-mail address you provided seems invalid');
  };

  const validateInput = (item) => {
    return item.match(/^[a-z|ąęóżźłćśń]{3,15}$/i);
  };

  const validateEmail = (item) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(item).toLowerCase());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      localStorage.setItem('authToken', 'some token');
      localStorage.setItem('name', name);
      localStorage.setItem('lastname', lastName);
      localStorage.setItem('email', email);
      history.push('/profile');
    }
  };

  const handleValidation = () => {
    if (!name || !lastName || !email) {
      if (!name) {
        setNameError(() => 'Please provide your first name');
      }
      if (!lastName) {
        setLastNameError('Please provide your last name');
      }
      if (!email) {
        setEmailError('Please provide your e-mail address');
      }
      return false;
    }

    if (nameError || lastNameError || emailError) {
      return false;
    }

    setUserName(`${name}'s `);
    return true;
  };

  return (
    <ComponentWrapper>
      <Hello>Login page</Hello>
      <FormWrapper onSubmit={submitHandler}>
        <InputGroup>
          <Input
            value={name}
            onChange={nameHandler}
            id='firstname'
            placeholder=' '
          />
          <Label htmlFor='firstname'>First name</Label>
          <Error>{nameError}</Error>
        </InputGroup>
        <InputGroup>
          <Input
            value={lastName}
            onChange={lastNameHandler}
            id='lastname'
            placeholder=' '
          />
          <Label htmlFor='lastname'>Last name</Label>
          <Error>{lastNameError}</Error>
        </InputGroup>
        <InputGroup>
          <Input
            value={email}
            onChange={emailHandler}
            id='email'
            placeholder=' '
          />
          <Label htmlFor='email'>E-mail address</Label>
          <Error>{emailError}</Error>
        </InputGroup>
        <LoginButton>
          <LoginButtonIcon />
          Sign in
        </LoginButton>
      </FormWrapper>
    </ComponentWrapper>
  );
};

export default LoginPage;
