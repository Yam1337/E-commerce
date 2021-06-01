import React, { useEffect, useState } from 'react';
import {
  ProductDetailsPageWrapper,
  ProductImageWrapper,
  ProductDetailsWrapper,
  ProductImage,
} from './styles';
import fetchData from './utils/fetchData';
import StandardButton from '../../components/StandardButton/styles';
import { Loader } from '../../styles';

const ProductPage = ({ match }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setProductDetails(await fetchData(match.params.id));
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
            <StandardButton
              onClick={() => {
                console.log(`Add to cart ${productDetails.id}`);
              }}
              backgroundColor='#181818'
              color='#F5F5F5'
            >
              Add to cart
            </StandardButton>
          </ProductDetailsWrapper>
          <ProductImageWrapper img={productDetails.image}>
            <ProductImage
              src={productDetails.image || '#'}
              alt={productDetails.name}
            />
          </ProductImageWrapper>
        </ProductDetailsPageWrapper>
      )}
    </>
  );
};

export default ProductPage;
