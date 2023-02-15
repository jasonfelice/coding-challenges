const prevValue = [];

const square = (n) => {
  if(prevValue[n]){
    return prevValue[n];
  }
  let result = 0;
  for(let i = 0; i<n; i++) {
    for(let j = 0; j<n; j++){
        result += 1;
    }
  }
  prevValue[n] = result;
  return result;
};
