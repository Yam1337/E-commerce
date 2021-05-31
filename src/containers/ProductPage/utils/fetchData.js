const fetchData = async (productId) => {
  const response = await fetch(
    `https://frontend-labs.herokuapp.com/products/${productId}`
  );
  const productDetails = await response.json();
  return productDetails;
};

export default fetchData;
