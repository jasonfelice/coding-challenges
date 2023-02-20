const subArraySum = (array, k) => {
    const result = [];
    let start = 0;
    let end = k-1;
    let sum = array.slice(0, end+1).reduce((a, b) => a + b);
    while (end < array.length-1) {
      sum -= array[start];
      start++;
      end++;
      sum += array[end];
      result.push(sum);
    }
    return result;
  };
    
  console.log(subArraySum([1,2,3,4,5,6], 4));