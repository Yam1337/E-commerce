import styled from 'styled-components';

export const ProductDetailsPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;
`;

export const ProductDetailsWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 0px 50px 100px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(60vh - 100px);
  width: 40vw;
  & > *:first-child {
    font-size: 42px;
    font-weight: bold;
  }
  & > *:nth-child(2) {
    font-size: 32px;
  }
  & > *:nth-child(3) {
    font-size: 18px;
  }
  & > *:nth-child(4) {
    font-size: 18px;
  }
  & > *:last-child {
    font-size: 22px;
  }
`;

export const ProductImageWrapper = styled.div`
  display: flex;
  padding: 0px 50px 0px 50px;
  justify-content: center;
  height: 60vh;
  width: 60vw;
  background-image: url(${(props) => props.img || ''});
  background-size: 100% 100%;
  img {
    height: 100%;
  }
`;
