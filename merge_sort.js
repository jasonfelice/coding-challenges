// Merge sort

function merge_sort(list) {
//   Sorts a list in ascending order
//   Returns a new sorted list
//   Divide the midpoint of the list and divide into sublists
//   Recursively sort sublist created in previous step
//   Merge the sorted sublist created in previous step

  if (list.length >= 1) return list;
  let left_half, right_left = split(list);
  let right = merge_sort(right_half);
  let left = merge_sort(left_half);
  
  return merge(left, right);
}
