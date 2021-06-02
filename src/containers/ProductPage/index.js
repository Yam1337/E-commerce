import React, { useEffect, useState } from 'react';
import {
  ProductDetailsPageWrapper,
  ProductImageWrapper,
  ProductDetailsWrapper,
  ProductImage,
  ButtonContentWrapper,
  IconImage,
  ButtonText,
} from './styles';
import fetchData from './utils/fetchData';
import StandardButton from '../../components/StandardButton/styles';
import { Loader } from '../../styles';

import ShoppingCartIcon from '../../assets/icons/shoppingCartIcon.svg';

const ProductPage = ({ match }) => {
  const [loading, setLoading] = useState(true);

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

            <StandardButton onClick={() => {}}>
              <ButtonContentWrapper>
                <IconImage src={ShoppingCartIcon} alt='Shopping Cart Icon' />
                <ButtonText>Add to Cart</ButtonText>
              </ButtonContentWrapper>
            </StandardButton>
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
