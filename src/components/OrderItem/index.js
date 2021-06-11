import { useState } from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { GiShipBow } from 'react-icons/gi';
import { ComponentWrapper, Header, Products, Details } from './styles';
import OrderProduct from '../OrderProduct';

const OrderItem = ({ id, totalPrice, products, shippingPrice }) => {
  const [open, setOpen] = useState(false);
  const iconStyle = { transition: '.4s', margin: 'auto 0' };

  return (
    <>
      <ComponentWrapper>
        <Header
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Details>
            <span>id:</span>
            <span>{id}</span>
          </Details>
          <Details>
            <span>Value:</span>
            <span>{`${totalPrice} zł`}</span>
          </Details>
          <BsChevronDoubleDown
            size='30'
            style={
              open
                ? {
                    ...iconStyle,
                    transform: 'rotate(90deg)',
                  }
                : iconStyle
            }
          />
        </Header>
        <Products>
          {open && (
            <>
              {shippingPrice !== 0 && (
                <OrderProduct
                  Icon={GiShipBow}
                  name='Shipping Price'
                  price={shippingPrice}
                />
              )}
              {products.map((item) => (
                <OrderProduct
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  id={item.id}
                />
              ))}
            </>
          )}
        </Products>
      </ComponentWrapper>
    </>
  );
};

export default OrderItem;
