/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Time: O(N)
 * Space: O(N) array of size 2N+1 is used
 */
var findMaxLength = function(nums) {
  const arr = [];
  arr.fill(-2, 0, 2 * nums.length + 1);
  arr[nums.length] = -1;
  let maxLen = 0, count = 0;
  for(let i = 0; i < nums.length; i++) {
      count = count + (nums[i] === 0 ? -1: 1);
      if(arr[count + nums.length] >= -1) {
          maxLen = Math.max(maxLen, i - arr[count + nums.length])
      } else {
          arr[count + nums.length] = i;
      }
  }
  return maxLen;
};
