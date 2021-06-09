const addToCart = (productDetails, itemCount) => {
  const myProduct = [{ ...productDetails }];
  myProduct[0].count = itemCount;

  if (localStorage.getItem('userCart') === null) {
    const cartProduct = JSON.stringify(myProduct);
    localStorage.setItem('userCart', cartProduct);
    return;
  }

  const actualCart = localStorage.getItem('userCart');
  const parsedCart = JSON.parse(actualCart);
  const myProductObj = myProduct[0];
  const objIndex = parsedCart.findIndex((x) => x.id === myProductObj.id);

  if (objIndex >= 0) {
    parsedCart[objIndex].count += itemCount;
    const cartProduct = JSON.stringify(parsedCart);
    localStorage.setItem('userCart', cartProduct);
    return;
  }

  parsedCart.push(myProductObj);
  const cartProduct = JSON.stringify(parsedCart);
  localStorage.setItem('userCart', cartProduct);
};

export default addToCart;
