/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Time: O(N)
 * Space: O(N)
 */
var runningSum = function(nums) {
  let prefix = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
      prefix.push(nums[i] + prefix[prefix.length - 1]);
  }
  return prefix;
};
