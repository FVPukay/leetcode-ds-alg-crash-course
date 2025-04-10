/**
 * @param {string} s
 * @return {string}
 * 
 * Time: O(N)
 * Space: O(N)
 *
 */
var makeGood = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
      if (stack[stack.length-1] && Math.abs(s[i].charCodeAt(0) - stack[stack.length-1].charCodeAt(0)) === 32) {
          stack.pop();
          continue;
      }
      stack.push(s[i]);
  }
  return stack.join("");
};