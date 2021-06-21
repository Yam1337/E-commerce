const finishOrder = async (totalValue, deliveryValue) => {
  const products = JSON.parse(localStorage.getItem('userCart'));

  const customer = {
    name: localStorage.getItem('name'),
    surname: localStorage.getItem('lastname'),
    email: localStorage.getItem('email'),
  };

  const order = {
    customer,
    totalPrice: totalValue,
    products,
    shippingPrice: deliveryValue,
  };
  await fetch('https://e-commerce-mock-api.herokuapp.com/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
  localStorage.setItem('userCart', JSON.stringify([]));
};

export default finishOrder;
