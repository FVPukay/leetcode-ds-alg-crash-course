/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Time: O(N)
 * Space: O(1)
 */
var minStartValue = function(nums) {
  let minValue = 0, total = 0;
  for (let i = 0; i < nums.length; i++) {
      total += nums[i];
      minValue = Math.min(minValue, total);
  }
  return 1 - minValue;
};
