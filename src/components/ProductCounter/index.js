import { ChangeButton, Counter, CounterWrapper } from './styles';

const ProductCounter = ({ setItemCount, itemCount }) => {
  return (
    <CounterWrapper>
      <ChangeButton
        onClick={() => {
          if (itemCount > 1) {
            setItemCount(-1);
          }
        }}
      >
        -
      </ChangeButton>
      <Counter>
        <div>{itemCount}</div>
      </Counter>
      <ChangeButton
        onClick={() => {
          if (itemCount <= 9) {
            setItemCount(1);
          }
        }}
      >
        +
      </ChangeButton>
    </CounterWrapper>
  );
};

export default ProductCounter;
