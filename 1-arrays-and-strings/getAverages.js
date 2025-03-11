/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * Time: O(N)
 * Space: O(1) if we don't count the output, otherwise O(N)
 */
var getAverages = function(nums, k) {
  if (k === 0) return nums;
  
  const winSize = k*2+1;
  const n = nums.length;
  const prefix = new Array(n).fill(-1);
  if (winSize > n) {
      return prefix;
  }
  
  let curr = 0;
  for (let i = 0; i < n; i++) {
      curr += nums[i];
      if (i === winSize - 1) {
          prefix[winSize - (k+1)] = Math.trunc(curr / (winSize));
      }
      if (i > winSize - 1) {
          curr -= nums[i - (winSize)];
          prefix[i - k] = Math.trunc(curr / (winSize));
      }
  }
  return prefix;
};
