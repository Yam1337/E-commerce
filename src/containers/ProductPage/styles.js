import styled from 'styled-components';

export const ProductDetailsPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

export const ProductDetailsWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  padding: 0px 50px 100px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75vh;
  width: 40vw;
  color: ${({ theme }) => theme.body.primaryColor};
  font-size: 20px;
  & > *:first-child {
    font-size: calc(1.3em + 1vw);
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  & > *:nth-child(2) {
    font-size: calc(1.2em + 0.5vw);
  }
  & > *:nth-child(3) {
    font-size: calc(0.6em + 0.5vw);
  }
  & > *:nth-child(4) {
    font-size: calc(0.6em + 0.5vw);
  }
  & > *:nth-child(5) {
    font-size: calc(0.6em + 0.8vw);
  }
  @media (max-width: 1200px) {
    width: 100%;
    padding: 20px 10px 20px 10px;
    height: 35vh;
  }
  @media (max-width: 768px) {
    height: 45vh;
  }
  @media (max-width: 520px) {
    height: 50vh;
  }
  @media (max-width: 320px) {
    height: 60vh;
  }
`;

export const ProductImageWrapper = styled.div`
  display: flex;
  margin: 0px 50px 0px 50px;
  justify-content: center;
  height: 75vh;
  width: 60vw;
  background-image: url(${(props) => props.img || ''});
  background-size: 100% 100%;
  @media (max-width: 1200px) {
    margin: 0px 10px 0px 10px;
    background-size: 100% 100%;
    width: 100%;
    height: 50vh;
  }
  @media (max-width: 520px) {
    height: 30vh;
  }
  @media (max-width: 320px) {
    height: 20vh;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  backdrop-filter: blur(2px);
`;
export const ButtonContentWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;
export const IconImage = styled.img`
  display: flex;
  height: 3.2rem;
  width: 3.2rem;
  object-fit: cover;
  object-position: ${({ theme }) => (theme.lightMode ? 'bottom' : 'top')};
`;
export const ButtonText = styled.div`
  display: flex;
`;
