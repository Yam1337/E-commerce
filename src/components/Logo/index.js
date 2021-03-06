import { LogoLink, LogoLinkIcon } from './styles';

const Logo = () => {
  return (
    <h1 className='logo'>
      <LogoLink href='/E-commerce/#/E-commerce/home'>
        <LogoLinkIcon />
        e-commerce
      </LogoLink>
    </h1>
  );
};

export default Logo;
