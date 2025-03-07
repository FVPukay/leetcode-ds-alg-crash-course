/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Time: O(N)
 * Space: O(1)
 */
var runningSum = function(nums) {
  for (let i = 1; i < nums.length; i++) {
      nums[i] += nums[i - 1];
  }
  return nums;
};
