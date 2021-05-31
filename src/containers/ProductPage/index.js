import React, { useEffect, useState } from 'react';
import {
  ProductDetailsPageWrapper,
  ProductImageWrapper,
  ProductDetailsWrapper,
} from './styles';
import fetchData from './utils/fetchData';
import StandardButton from '../../components/StandardButton/styles';

const ProductPage = ({ match }) => {
  useEffect(() => {
    const getData = async () => {
      setProductDetails(await fetchData(match.params.id));
    };
    getData();
  }, [match.params.id]);
  const [productDetails, setProductDetails] = useState([]);
  return (
    <ProductDetailsPageWrapper>
      <ProductDetailsWrapper>
        <div>{productDetails.name}</div>
        <div>{`${productDetails.price} zł`}</div>
        <div>{`Color: ${productDetails.color}`}</div>
        <div>{`Material: ${productDetails.material}`}</div>
        <div>{productDetails.description}</div>
        <StandardButton>Add to cart</StandardButton>
      </ProductDetailsWrapper>
      <ProductImageWrapper img={productDetails.image}>
        <img src={productDetails.image} alt={productDetails.name} />
      </ProductImageWrapper>
    </ProductDetailsPageWrapper>
  );
};

export default ProductPage;
