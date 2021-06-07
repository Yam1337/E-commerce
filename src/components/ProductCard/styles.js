import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 88%;
  & img {
    height: 100%;
    width: 100%;
  }
`;
export const ProductDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  height: 10%;
  & > *:first-child {
    font-size: calc(1.1rem + 0.2vw);
    color: ${({ theme }) => theme.body.primaryColor};
  }

  & > *:nth-child(2) {
    font-size: calc(1rem + 0.2vw);
    color: ${({ theme }) => theme.body.primaryColor};
  }
`;
export const PriceWrapper = styled.div`
  overflow-wrap: break-word;
  white-space: nowrap;
  padding-right: 1rem;
`;
