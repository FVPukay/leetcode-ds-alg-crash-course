/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(N)
 * Space: O(N)
 */
var missingNumber = function(nums) {
  const numsSet = new Set(nums);
  for(let i = 0; i < nums.length + 1; i++) {
      if(!numsSet.has(i)) return i;
  }
};
