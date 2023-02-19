const subArraySum = (array, k) => {
  const result = [];
  let sum;
  for(let i = 0; i < k-1; i++) {
    sum += array[i];
    result.push(sum);
  }
  return result;
};
