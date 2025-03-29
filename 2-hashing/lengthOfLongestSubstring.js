/**
 * @param {string} s
 * @return {number}
 *
 * Time: O(N)
 * Space: O(min(m, n))
 */
var lengthOfLongestSubstring = function(s) {
  // loop over the arr of chars
  // add the chars to a set
  // if an item is already in the set do the following:
  // if length of set is > max_len, update max_len
  // empty the set
  // continue looping over the arr of chars until complete
  // return max_len
  
  let arr = s.split("");
  let charSet = new Set();
  let maxLength = 0;
  let position = 0;

  for (let i = 0; i < arr.length; i++) {
      if (charSet.has(arr[i])) {
          if (maxLength < charSet.size) {
              maxLength = charSet.size;
          }
          position++;
          i = position;
          charSet = new Set(arr[i]);
      } else if (i === arr.length - 1) {
          charSet.add(arr[i]);
          if (maxLength < charSet.size) {
              maxLength = charSet.size;
          }
      } else {
          charSet.add(arr[i]);
      }
  }
  return maxLength;
};
