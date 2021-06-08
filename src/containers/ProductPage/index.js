import React, { useEffect, useState } from 'react';
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

import cartIcons from '../../assets/icons/cartIcons.svg';

const ProductPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(1);

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

            {/* TODO: ADD HERE ADDTOCART FUNCTION */}
            <ButtonCountWrapper>
              <StandardButton
                onClick={() => {
                  addToCart(productDetails);
                }}
              >
                <ButtonContentWrapper>
                  <IconImage src={cartIcons} alt='Shopping Cart Icon' />
                  <ButtonText>Add to Cart</ButtonText>
                </ButtonContentWrapper>
              </StandardButton>
              <Margin />
              <ProductCounter
                setItemCount={setItemCount}
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
