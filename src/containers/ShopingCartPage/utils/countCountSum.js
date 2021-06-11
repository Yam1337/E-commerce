const countCountSum = (arr) => {
  const sumArr = arr.map((item) => item.count);
  const sum = sumArr.reduce((a, b) => a + b, 0);
  return sum;
};

export default countCountSum;
