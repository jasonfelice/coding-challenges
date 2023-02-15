function birthday(s, d, m) {
  let count = 0;
  if (s.length >= m) {
    for(let i in s) {
      const ways = [];
      for(let j = 0; j <= m; j++) {
          ways.push(s[j]);
      }
    if (ways.reduce((a, b) => a + b) === d) {
      count++;
    }
      s.shift();
    }
  }
  return count;
}
