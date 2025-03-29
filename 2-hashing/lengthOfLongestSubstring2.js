/**
 * @param {string} s
 * @return {number}
 *
 * Time: O(N)
 * Space: O(Min(M, N))
 */
var lengthOfLongestSubstring = function(s) {
  let ans = 0;
  const slideIdxs = new Map();
  
  for(let j = 0, i = 0; j < s.length; j++) {
      if(slideIdxs.get(s[j])) {
          i = Math.max(slideIdxs.get(s[j]), i);
      }
      ans = Math.max(ans, j - i + 1);
      slideIdxs.set(s[j], j + 1);
  }
  
  return ans;
};
