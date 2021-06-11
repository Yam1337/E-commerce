const addToCart = (productDetails, itemCount) => {
  const myProduct = { ...productDetails };
  myProduct.count = itemCount;

  if (localStorage.getItem('userCart') === null) {
    const cartProduct = JSON.stringify([myProduct]);
    localStorage.setItem('userCart', cartProduct);
    return;
  }

  const actualCart = localStorage.getItem('userCart');
  const parsedCart = JSON.parse(actualCart);
  const objIndex = parsedCart.findIndex((x) => x.id === myProduct.id);

  if (objIndex >= 0) {
    parsedCart[objIndex].count += itemCount;
    const cartProduct = JSON.stringify(parsedCart);
    localStorage.setItem('userCart', cartProduct);
    return;
  }

  parsedCart.push(myProduct);
  const cartProduct = JSON.stringify(parsedCart);
  localStorage.setItem('userCart', cartProduct);
};

export default addToCart;
