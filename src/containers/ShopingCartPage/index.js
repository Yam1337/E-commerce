import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import OrderDetailsTable from '../../components/OrderDetailsTable/index';
import { CartProductsNumberContext } from '../../components/UserDataContext/UserDataContext';

import {
  Title,
  GridContainer,
  ComponentWrapper,
  Container,
  ProductCardOverlay,
  Info,
} from './styles';

import deleteIcons from '../../assets/icons/deleteIcons.svg';
import deleteFromCart from './utils/deleteFromCart';
import countPriceSum from './utils/countPriceSum';
import countCountSum from './utils/countCountSum';
import calculateDeliveryPrice from './utils/calculateDeliveryPrice';
import finishOrder from './utils/finishOrder';

const ShopingCartPage = () => {
  const [myCart, setMyCart] = useState([]);
  const [orderValue, setOrderValue] = useState(0);
  const [deliveryValue, setDeliveryValue] = useState(Number(19));
  const [totalValue, setTotalValue] = useState(orderValue + deliveryValue);
  const history = useHistory();
  const [cartProductsNumber, setCartProductsNumber] = useContext(
    CartProductsNumberContext
  );

  if (JSON.parse(localStorage.getItem('userCart')) === null) {
    localStorage.setItem('userCart', JSON.stringify([]));
  }

  useEffect(() => {
    setMyCart(JSON.parse(localStorage.getItem('userCart')));
    setOrderValue(countPriceSum(myCart));
    setTotalValue(orderValue + deliveryValue);
    setDeliveryValue(calculateDeliveryPrice(myCart));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myCart.length, orderValue, deliveryValue, totalValue]);

  if (myCart === null || myCart.length === 0) {
    return (
      <ComponentWrapper>
        <Title>Your cart is empty</Title>
        <Info>
          Search for products you like, add them to your cart and store them
          here safely
        </Info>
      </ComponentWrapper>
    );
  }

  return (
    <ComponentWrapper>
      <Title>
        <b>Cart</b>
        {` - ${countCountSum(myCart)} saved products`}
      </Title>
      <Container>
        <GridContainer>
          {myCart.map((item) => {
            return (
              <div key={item.id} style={{ position: 'relative' }}>
                <ProductCardOverlay
                  onClick={(e) => {
                    setMyCart(deleteFromCart(item.id, myCart));
                    setCartProductsNumber(
                      countCountSum(
                        JSON.parse(localStorage.getItem('userCart'))
                      )
                    );
                  }}
                >
                  <img
                    src={deleteIcons}
                    alt={`Delete ${item.name} from cart`}
                  />
                </ProductCardOverlay>
                <Link to={`/product/${item.id}`} key={item.id}>
                  <ProductCard
                    width='100%'
                    height='100%'
                    image={item?.image}
                    name={`${item?.count}x ${item?.name}`}
                    price={`Total: ${item?.count * item?.price}`}
                  />
                </Link>
              </div>
            );
          })}
        </GridContainer>
        <OrderDetailsTable
          width='50%'
          mobileWidth='100%'
          alignSelf='flex-end'
          cell1='Order value:'
          cell2={`${orderValue} zł`}
          cell3='Delivery:'
          cell4={`${deliveryValue} zł`}
          bottomText={`Total: ${totalValue} zł`}
          minWidth='280px'
          buttonFunction={() => {
            finishOrder(totalValue, deliveryValue);
            setMyCart([]);
            setCartProductsNumber(0);
            history.push('/profile');
          }}
        />
      </Container>
    </ComponentWrapper>
  );
};

export default ShopingCartPage;
