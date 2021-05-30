import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  width: ${(props) => props.width};
  /* width: 566px; */
  height: ${(props) => props.height};
  /* height: 445px; */
`;
export const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 88%;
  & img {
    height: 100%;
  }
`;
export const ProductDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  height: 12%;
  & > *:first-child {
    font-size: 20px;
    color: #181818;
  }

  & > *:nth-child(2) {
    font-size: 14px;
    color: #181818;
  }
`;
