const subArraySum = (array, k) => {
    const result = [];
    let j = 0;
    while (j <= array.length) {
      let sum = 0;
      for (let i = 0; i < k; i++) {
        if(i+j === array.length) {
            break;
        }
        sum += array[i+j];
      }
      result.push(sum);
      j++;
    }
    return result;
  };
  
  console.log(subArraySum([1,2,3,4,5,6], 3));