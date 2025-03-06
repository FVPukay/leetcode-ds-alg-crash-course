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
  for (right in nums) {
      k -= 1 - nums[right];
      if (k < 0) {
          k += 1 - nums[left];
          left += 1;
      }
  }
  
  return right - left + 1;
};
