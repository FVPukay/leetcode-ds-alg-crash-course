/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  // Time: O(N) - used two pointers
  // Space: O(N) - if output is taken into account, otherwise O(1)
  
  let left = 0;
  let right = nums.length - 1;
  let result = new Array(nums.length);
  
  for (let i = right; i >= 0; i--) {
      if (Math.abs(nums[left]) < Math.abs(nums[right])) {
          result[i] = Math.pow(nums[right], 2);
          right -= 1;
      } else {
          result[i] = Math.pow(nums[left], 2);
          left += 1;
      }
  }
  
  return result;
};
