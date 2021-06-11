import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.4rem;
    color: white;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body.primaryColor};
  padding: 1rem;
  width: clamp(26rem, 40vw, 80vw);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.4rem 1rem;
  cursor: pointer;
`;
