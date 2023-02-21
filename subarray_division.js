function birthday(s, d, m) {
  const result = [];
  let start = 0;
  let end = m - 1;
  let sum = s.slice(0, m).reduce((a ,b) => a + b);
  result.push(sum);
  while (end < s.length - 1) {
    sum -= s[start];
    start++;
    end++;
    sum += s[end];
    result.push(sum);
  }
  return result.filter(sum => sum === d).length;
}