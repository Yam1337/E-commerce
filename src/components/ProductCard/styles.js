import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 88%;
  background-image: url(${(props) => props.img || ''});
  background-size: 100% 100%;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  backdrop-filter: blur(2px);
`;

export const ProductDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  height: 12%;
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
`;
