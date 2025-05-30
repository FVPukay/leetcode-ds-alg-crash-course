/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(N)
 * Space: O(N)
 */
var findMaxLength = function(nums) {
  const map = new Map();
  map.set(0, -1);
  let maxLen = 0, count = 0;
  for (let i = 0; i < nums.length; i++) {
      count += (nums[i] === 1 ? 1 : -1);
      if (map.has(count)) {
          maxLen = Math.max(maxLen, i - map.get(count));
      } else {
          map.set(count, i);
      }
  }
  return maxLen;
};
