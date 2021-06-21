import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ComponentWrapper, Photo, Span } from './styles';

const OrderProduct = ({ name, image, price, id, Icon, count }) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <ComponentWrapper>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {!Icon ? (
            <Photo src={image} alt={name} />
          ) : (
            <Icon size={50} color={theme.body.background} />
          )}
          {count ? <Span>{`${count}x ${name}`}</Span> : <Span>{name}</Span>}
        </div>
        <Span style={{ whiteSpace: 'nowrap' }}>{price} zł</Span>
      </ComponentWrapper>
    </>
  );
};

export default OrderProduct;
