var merge = function(nums1, m, nums2, n) {
  let end1 = nums1.length - 1;
  let end2 = nums2.length - 1;
  const lastNumber = nums1.filter(num => num !== 0).length - 1;
  let index = lastNumber < 0 ? 0 : lastNumber;
  
  
  while (end2 > 0) {
    if(nums1[index] < nums2[end2] ) {
        nums1[end1] = nums2[end2];
    } else {
      nums1[end1] = nums1[index];
      nums1[index] = nums2[end1];
    }

    end1--;
    end2--;
  }
  return nums1;
};