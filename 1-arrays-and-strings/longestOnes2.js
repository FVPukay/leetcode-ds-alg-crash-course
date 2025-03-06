/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * Time: O(N)
 * Space: O(1)
 */
var longestOnes = function(nums, k) {
  let left = 0;
  let right = 0;

  for(right = 0; right < nums.length; right++) {
      if(nums[right] === 0) {
          k -= 1;
      }
      
      if(k < 0) {
          k += 1 - nums[left];
          left += 1;
      }
  }
  
  // Not right - left + 1
  // Because for loop, line 13, increments at the end
  return right - left;
};
