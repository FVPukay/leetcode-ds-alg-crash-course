/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Time: O(N)
 * Space: O(N)
 */
var largestUniqueNumber = function(nums) {
  const freq = new Map();
  for (const num of nums) {
      freq.set(num, (freq.get(num) || 0) + 1);
  }
  console.log(freq)
  let max = -1;
  for (const [num, count] of freq) {
      if (count === 1) max = Math.max(num, max);
  }
  return max;
};
