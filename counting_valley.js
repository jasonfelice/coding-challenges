function countingValleys(steps, path) {
   let count = 0;
   let valleys = 0;
   path = path.split("");
   path.forEach(path => {
      if(path === "U") count++;
      if(path === "D") count--;
   })
}
