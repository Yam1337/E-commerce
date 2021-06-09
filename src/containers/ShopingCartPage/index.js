import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { ShopingCartPageWrapper } from './styles';

const ShopingCartPage = () => {
  const [myCart, setMyCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMyCart(localStorage.getItem('myCart'));
  }, []);
  return (
    <ShopingCartPageWrapper>
      <h1>Your cart is empty</h1>
      <div>
        Search for products you like, add them to your cart and store them here
        safely
      </div>
    </ShopingCartPageWrapper>
  );
};

export default ShopingCartPage;
