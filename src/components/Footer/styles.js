import styled from 'styled-components';
import facebookIcon from '../../assets/icons/facebookIcon.svg';
import twitterIcon from '../../assets/icons/twitterIcon.svg';
import instagramIcon from '../../assets/icons/instagramIcon.svg';
import youtubeIcon from '../../assets/icons/youtubeIcon.svg';

const FooterWrapper = styled.footer`
  height: 15rem;
  background-color: ${({ theme }) => theme.footer.background};
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins';
  justify-content: space-between;
  padding: 1rem 2rem;

  .links {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    width: 70%;

    &--social {
      flex-direction: unset;
      justify-content: space-evenly;
    }

    .link {
      display: block;
      width: 2.4rem;
      height: 2.4rem;
      background-size: cover;
      margin-bottom: 0.5rem;

      &--fb {
        background-image: url(${facebookIcon});
      }
      &--tw {
        background-image: url(${twitterIcon});
      }
      &--ig {
        background-image: url(${instagramIcon});
      }
      &--yt {
        background-image: url(${youtubeIcon});
      }
    }
  }

  .linksWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    flex-direction: unset;
    height: 10rem;
    padding: 1.5rem 2rem;

    .links {
      align-items: flex-start;

      &--social {
        width: unset;
      }

      .link {
        margin-left: 2rem;
        width: 3.2rem;
        height: 3.2rem;
      }
    }

    .linksWrapper {
      align-items: flex-end;
      justify-content: space-between;
      height: 100%;
    }
  }
`;

export default FooterWrapper;
