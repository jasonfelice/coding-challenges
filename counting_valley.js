function countingValleys(steps, path) {
  let valleys = 0;
  let count = {c: 0, p: 0};
  for(let i = 0; i < steps; i++) {
      count.p = count.c;
      if (path[i] === "U") count.c++;
      if (path[i] === "D") count.c--;
      if (count.c < 0 && count.p == 0) valleys++;
  }
  return valleys;
}