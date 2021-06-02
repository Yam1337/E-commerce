const fetchData = async (productId) => {
  const response = await fetch(productId);
  const productDetails = await response.json();
  return productDetails;
};

export default fetchData;
