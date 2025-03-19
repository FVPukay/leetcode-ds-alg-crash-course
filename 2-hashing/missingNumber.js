/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Time: O(NLOGN)
 * Space: O(1), sort was in place
 */
function compareNumbers(a, b) {
  return a - b;
}

var missingNumber = function(nums) {
  nums.sort(compareNumbers);
  
  if(nums[0] !== 0) return 0;
  if(nums[nums.length-1] !== nums.length) return nums.length;
  
  for(let i = 1; i < nums.length; i++) {
      let expected = nums[i-1] + 1;
      if(expected !== nums[i]) return expected;
  }
};
