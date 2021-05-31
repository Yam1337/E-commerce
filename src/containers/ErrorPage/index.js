import { ComponentWrapper, Title, Info } from './styles';

const ErrorPage = () => {
  return (
    <>
      <ComponentWrapper>
        <Title>Page not found.</Title>
        <Info>
          Sorry, but the address you are trying to
          <br />
          get to is unavaliable for now.
        </Info>
      </ComponentWrapper>
    </>
  );
};

export default ErrorPage;
