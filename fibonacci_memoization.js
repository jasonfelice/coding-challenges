const fib = (n, prevValues = []) => {
  if (prevValues[n]) {
    return prevValues[n];
  }
  let result;
  if (n <= 2) {
    return 1;
  } else {
    result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
  }
  prevValues[n] = result;
  return result;
};
