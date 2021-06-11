const calculateDeliveryPrice = (arr) => {
  const sumArr = arr.map((item) => item.count);
  const sum = sumArr.reduce((a, b) => a + b, 0);

  if (sum <= 3) {
    return 19;
  }
  if (sum > 3 && sum <= 5) {
    return 29;
  }
  if (sum > 5 && sum < 10) {
    return 49;
  }
  if (sum >= 10) {
    return 79;
  }
  return null;
};

export default calculateDeliveryPrice;
