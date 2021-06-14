import React, { useState, useEffect, createContext } from 'react';

export const UserNameContext = createContext();
export const CartProductsNumberContext = createContext();

export default function UserDataProvider({ children }) {
  const [userName, setUserName] = useState('');
  const [cartProductsNumber, setCartProductsNumber] = useState(0);

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) {
      setUserName(`${name}'s `);
    }
  }, []);

  useEffect(() => {
    const storageCart = localStorage.getItem('userCart');
    if (!storageCart) {
      setCartProductsNumber(0);
      return;
    }
    const storageCartObject = JSON.parse(storageCart);
    const productsNumber = storageCartObject.reduce(
      (sum, product) => sum + product.count,
      0
    );
    setCartProductsNumber(productsNumber);
  }, []);

  return (
    <UserNameContext.Provider value={[userName, setUserName]}>
      <CartProductsNumberContext.Provider
        value={[cartProductsNumber, setCartProductsNumber]}
      >
        {children}
      </CartProductsNumberContext.Provider>
    </UserNameContext.Provider>
  );
}
