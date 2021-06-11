import styled from 'styled-components';

export const MarginLine = styled.div`
  width: '100%';
  height: 1px;
  background-color: ${({ theme }) => theme.body.primaryColor};
`;

export const GridContainer = styled.div`
  width: '100%';
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  font-size: calc(1.1rem + 0.2vw);
  div {
    margin: 3px 0px 3px 0px;
  }
  & > *:first-child {
    display: flex;
    align-self: center;
    justify-self: flex-start;
  }
  & > *:nth-child(2) {
    display: flex;
    justify-self: flex-end;
    align-self: center;
  }
  & > *:nth-child(3) {
    display: flex;
    justify-self: flex-start;
    align-self: center;
  }
  & > *:last-child {
    display: flex;
    align-self: center;
    justify-self: flex-end;
  }
`;

export const BottomText = styled.div`
  width: 100%;
  font-size: calc(2rem + 0.3vw);
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
`;

export const TableWrapper = styled.div`
  width: ${(props) => props.width || '50%'};
  min-width: ${(props) => props.minWidth || '300px'};
  align-self: ${(props) => props.alignSelf || 'center'};
  margin-top: 50px;
  @media (max-width: 600px) {
    width: ${(props) => props.mobileWidth || '100%'};
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
