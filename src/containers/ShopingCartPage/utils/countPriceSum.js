const countPriceSum = (arr) => {
  const sumArr = arr.map((item) => item.price * item.count);
  const sum = sumArr.reduce((a, b) => a + b, 0);
  return sum;
};

export default countPriceSum;
