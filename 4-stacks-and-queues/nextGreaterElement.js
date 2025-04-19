/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const stack = [];
  const map = new Map();
  
  for (const num of nums2) {
      while (stack.length && num > stack[stack.length-1]) {
          map.set(stack.pop(), num);
      }
      stack.push(num);
  }
  
  for (let i = 0; i < nums1.length; i++) {
      nums1[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1;
  }
  
  return nums1;
};