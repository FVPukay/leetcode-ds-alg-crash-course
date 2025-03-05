/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * Time: O(N)
 * Space: O(1)
 */
var findMaxAverage = function(nums, k) {
  let curr = 0;
  for (let i = 0; i < k; i++) {
      curr += nums[i];
  }
  
  let answer = curr;
  
  for (let i = k; i < nums.length; i++) {
      curr += nums[i] - nums[i - k]
      answer = Math.max(answer, curr);
  }
  
  return answer / k;
  
};
