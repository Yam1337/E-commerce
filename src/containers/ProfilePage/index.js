import { Hello, ComponentWrapper, Info } from './styles';
import { LogButton } from '../LoginPage/styles';

const ProfilePage = ({ history }) => {
  const infoData =
    "We shall be gratefull if you will leave some feedback on our FB to make our developer's life harder :)";

  const logoutHandler = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('name');
    localStorage.removeItem('lastname');
    localStorage.removeItem('email');
    history.push('/login');
  };

  return (
    <>
      <ComponentWrapper>
        <Hello>
          {`Hello,
            ${localStorage.getItem('name') || ''}
            ${localStorage.getItem('lastname') || ''}!`}
        </Hello>
        <Info>{infoData}</Info>
        <LogButton onClick={logoutHandler}>Logout</LogButton>
      </ComponentWrapper>
    </>
  );
};

export default ProfilePage;
