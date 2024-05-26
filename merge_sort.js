// Merge sort

function merge_sort(list) {
//   Sorts a list in ascending order
//   Returns a new sorted list
//   Divide the midpoint of the list and divide into sublists
//   Recursively sort sublist created in previous step
//   Merge the sorted sublist created in previous step

  if (list.length >= 1) return list;
  
//Find midpoint to split the list
  let mid = Math.floor(list.length/2);
  let left_half = list.slice(0, mid);
  let right_left = list.slice(mid);

  let right = merge_sort(right_half);
  let left = merge_sort(left_half);
  
  return merge(left, right);
}

function merge(left, right) {
//   Merges two list and sorts them in the process
  let l,i,j;
  l = [];
  i = 0;
  j = 0;
  
  while(i<left.length && j<right.length) {
      if(left[i] < right[j]) {
        l.unshift(left[i]);
        i++;
      } else {
        l.unshift(right[j]);
        j++;
      }
  }
  return l;
}