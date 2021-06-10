import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

import {
  Title,
  GridContainer,
  ComponentWrapper,
  Container,
  ProductCardOverlay,
  MarginLine,
  LineWrapper,
  IconImage,
  ButtonText,
  ButtonCountWrapper,
  Info,
} from './styles';

import StandardButton from '../../components/StandardButton/styles';
import deleteIcons from '../../assets/icons/deleteIcons.svg';
import bagIcon from '../../assets/icons/bagIcons.svg';
import deleteFromCart from './utils/deleteFromCart';

const ShopingCartPage = () => {
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    setMyCart(JSON.parse(localStorage.getItem('userCart')));
  }, []);

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
        {` - ${myCart.length} saved products`}
      </Title>
      <Container>
        <GridContainer>
          {myCart.map((item) => {
            return (
              <div key={item.id} style={{ position: 'relative' }}>
                <ProductCardOverlay
                  onClick={(e) => {
                    setMyCart(deleteFromCart(item.id, myCart));
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
                    image={item.image}
                    name={`${item.count}x ${item.name}`}
                    price={`Total: ${item.count * item.price}`}
                  />
                </Link>
              </div>
            );
          })}
        </GridContainer>

        <LineWrapper>
          <MarginLine />
          {/* TODO: ADD FINISH ORDER FUNCTION */}
          <StandardButton>
            <ButtonCountWrapper>
              <IconImage src={bagIcon} alt='Delete from Cart Icon' />
              <ButtonText>Finish order</ButtonText>
            </ButtonCountWrapper>
          </StandardButton>
        </LineWrapper>
      </Container>
    </ComponentWrapper>
  );
};

export default ShopingCartPage;
