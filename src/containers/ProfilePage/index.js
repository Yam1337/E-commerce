import React, { useContext } from 'react';
import { Hello, Info } from './styles';
import {
  ComponentWrapper,
  LogoutButton,
  LogoutButtonIcon,
} from '../LoginPage/styles';
import { UserNameContext } from '../../components/UserDataContext/UserDataContext';

const ProfilePage = ({ history }) => {
  const infoData =
    "We would be grateful if you left some feedback on our FB to make our developer's life harder :)";
  const [userName, setUserName] = useContext(UserNameContext);

  const logoutHandler = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('name');
    localStorage.removeItem('lastname');
    localStorage.removeItem('email');
    setUserName('');
    history.push('/login');
  };

  return (
    <ComponentWrapper>
      <Hello>
        Hello,
        <br />
        <span>
          {` ${localStorage.getItem('name') || ''} ${
            localStorage.getItem('lastname') || ''
          }!`}
        </span>
      </Hello>
      <Info>{infoData}</Info>

      <LogoutButton onClick={logoutHandler}>
        <LogoutButtonIcon />
        Sign out
      </LogoutButton>
    </ComponentWrapper>
  );
};

export default ProfilePage;
