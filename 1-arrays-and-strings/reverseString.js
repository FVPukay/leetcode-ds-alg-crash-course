/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 
 * Time: O(N)
 * Space: O(1)
 */
var reverseString = function(s) {
  let left, right, temp;
  for (let i = 0, j = s.length-1; i < j; i++, j--) {
      left = s[i];
      right = s[j];
      temp = left;
      
      left = right;
      right = temp;
      
      s[i] = left;
      s[j] = right;
  }
  return s;
};
