// Merge sort

function merge_sort(list) {
//   Sorts a list in ascending order
//   Returns a new sorted list
//   Divide the midpoint of the list and divide into sublists
//   Recursively sort sublist created in previous step
//   Merge the sorted sublist created in previous step

  if (list.length <= 1) return list;
  
//Find midpoint to split the list
  let mid = Math.floor(list.length/2);
  let left_half = list.slice(0, mid);
  let right_half = list.slice(mid);

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
        l.push(left[i]);
        i++;
      } else {
        l.push(right[j]);
        j++;
      }
  }
  
  while(i < left.length) {
      l.push(left[i])
      i++;
  }
  
  while(j < right.length) {
    l.push(right[j]);
    j++;
  }
  return l;
}

function verify_sorted(list) {
  const n = list.length;
  if (n === 0 || n === 1) return true;
  
  return (list[0] < list[1]) &&  verify_sorted(list.slice(1));
}

const list = [10,9,8,7,6,5,4,3,2,1]
const new_list = merge_sort(list);
console.log(verify_sorted(list));
setTimeout(() => console.log("Now Sorting"), 500);
setTimeout(() => console.log(verify_sorted(new_list)), 1000);
