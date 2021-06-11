import {
  MarginLine,
  GridContainer,
  TableWrapper,
  BottomText,
  ButtonWrapper,
} from './styles';
import StandardButton from '../StandardButton/styles';

const OrderDetailsTable = ({
  width,
  alignSelf,
  cell1,
  cell2,
  cell3,
  cell4,
  bottomText,
  minWidth,
  mobileWidth,
}) => {
  return (
    <>
      <TableWrapper
        width={width}
        minWidth={minWidth}
        alignSelf={alignSelf}
        mobileWidth={mobileWidth}
      >
        <MarginLine />
        <GridContainer>
          <div>{cell1}</div>
          <div>{cell2}</div>
          <div>{cell3}</div>
          <div>{cell4}</div>
        </GridContainer>
        <MarginLine />
        <BottomText>{bottomText}</BottomText>
        <ButtonWrapper>
          <StandardButton width='400px'>Purchase products</StandardButton>
        </ButtonWrapper>
      </TableWrapper>
    </>
  );
};

export default OrderDetailsTable;
