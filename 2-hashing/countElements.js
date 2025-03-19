/**
 * @param {number[]} arr
 * @return {number}
 * 
 * Time: O(N)
 * Space: O(N)
 */
var countElements = function(arr) {
  const hashSet = new Set(arr);
  let ans = 0;
  for(const num of arr) {
      if(hashSet.has(num+1)) ans++;
  }
  return ans;
};
