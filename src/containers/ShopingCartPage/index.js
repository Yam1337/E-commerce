import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import {
  Title,
  GridContainer,
  ComponentWrapper,
  Container,
  ProductCardOverlay,
  MarginLine,
  DeleteText,
  LineWrapper,
  IconImage,
  ButtonText,
  ButtonCountWrapper,
} from './styles';
import StandardButton from '../../components/StandardButton/styles';

import deleteIcon from '../../assets/icons/delete.svg';

const ShopingCartPage = () => {
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    setMyCart(JSON.parse(localStorage.getItem('userCart')));
  }, []);
  return (
    <ComponentWrapper>
      <Title>My cart</Title>
      <Container>
        <GridContainer>
          {myCart.map((item) => {
            return (
              <div key={item.id} style={{ position: 'relative' }}>
                <ProductCardOverlay
                  onClick={() => {
                    console.log(item.id);
                  }}
                >
                  <img src={deleteIcon} alt={`Delete ${item.name} from cart`} />
                  <DeleteText>{`Delete ${item.name} from cart`}</DeleteText>
                </ProductCardOverlay>
                <ProductCard
                  width='100%'
                  height='100%'
                  image={item.image}
                  name={`${item.count}x ${item.name}`}
                  price={`Total: ${item.count * item.price}`}
                />
              </div>
            );
          })}
        </GridContainer>
      </Container>
      <LineWrapper>
        <MarginLine />
        <StandardButton>
          <ButtonCountWrapper>
            <IconImage src={deleteIcon} alt='Delete from Cart Icon' />
            <ButtonText>Finish order</ButtonText>
          </ButtonCountWrapper>
        </StandardButton>
      </LineWrapper>
    </ComponentWrapper>
  );
};

export default ShopingCartPage;
