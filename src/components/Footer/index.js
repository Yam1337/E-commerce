import FooterWrapper from './styles';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <ul className='links'>
          <li>Careers</li>
          <li>About e-commerce</li>
          <li>Terms of use</li>
          <li>Privacy policy</li>
        </ul>
        <div className='linksWrapper'>
          <ul className='links links--social'>
            <li>
              <a
                href='https://www.facebook.com'
                rel='noreferrer'
                target='_blank'
                className='link link--fb'
              >
                <span className='sr-only'>Facebook account</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                rel='noreferrer'
                target='_blank'
                className='link link--tw'
              >
                <span className='sr-only'>Twitter account</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com'
                rel='noreferrer'
                target='_blank'
                className='link link--ig'
              >
                <span className='sr-only'>Instagram account</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.youtube.com'
                rel='noreferrer'
                target='_blank'
                className='link link--yt'
              >
                <span className='sr-only'>Youtube account</span>
              </a>
            </li>
          </ul>
          <p>© 2021 e-commerce, Inc. All Rights Reserved</p>
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;
