import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ProductDetailsPageWrapper,
  ProductImageWrapper,
  ProductDetailsWrapper,
  ProductImage,
  ButtonContentWrapper,
  IconImage,
  ButtonText,
  ButtonCountWrapper,
  Margin,
} from './styles';
import fetchData from './utils/fetchData';
import addToCart from './utils/addToCart';
import StandardButton from '../../components/StandardButton/styles';
import ProductCounter from '../../components/ProductCounter/index';
import { Loader } from '../../styles';
import { CartProductsNumberContext } from '../../components/UserDataContext/UserDataContext';

import cartIcons from '../../assets/icons/cartIcons.svg';

const ProductPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(1);
  const history = useHistory();
  const [cartProductsNumber, setCartProductsNumber] = useContext(
    CartProductsNumberContext
  );

  useEffect(() => {
    const getData = async () => {
      setProductDetails(
        await fetchData(
          `https://frontend-labs.herokuapp.com/products/${match.params.id}`
        )
      );
      setLoading(false);
    };
    getData();
  }, [loading, match.params.id]);

  const [productDetails, setProductDetails] = useState([]);
  const productCounterHandler = (change) => {
    setItemCount(itemCount + change);
  };

  return (
    <>
      {loading ? (
        <ProductDetailsPageWrapper>
          <Loader />
        </ProductDetailsPageWrapper>
      ) : (
        <ProductDetailsPageWrapper>
          <ProductDetailsWrapper>
            <div>{productDetails.name}</div>
            <div>{`${productDetails.price} zł`}</div>
            <div>{`Color: ${productDetails.color}`}</div>
            <div>{`Material: ${productDetails.material}`}</div>
            <div>{productDetails.description}</div>

            <ButtonCountWrapper>
              <StandardButton
                onClick={() => {
                  setItemCount(1);
                  addToCart(productDetails, itemCount);
                  setCartProductsNumber((prevNumber) => prevNumber + itemCount);
                  history.push('/cart');
                  // TODO: ADD ANIMATION
                }}
              >
                <ButtonContentWrapper>
                  <IconImage src={cartIcons} alt='Shopping Cart Icon' />
                  <ButtonText>Add to Cart</ButtonText>
                </ButtonContentWrapper>
              </StandardButton>
              <Margin />
              <ProductCounter
                setItemCount={productCounterHandler}
                itemCount={itemCount}
              />
            </ButtonCountWrapper>
          </ProductDetailsWrapper>
          <ProductImageWrapper img={productDetails.image}>
            <ProductImage
              src={productDetails.image || '#'}
              alt={productDetails.name || '#'}
            />
          </ProductImageWrapper>
        </ProductDetailsPageWrapper>
      )}
    </>
  );
};

export default ProductPage;
