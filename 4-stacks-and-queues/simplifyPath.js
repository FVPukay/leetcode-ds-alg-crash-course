/**
 * @param {string} path
 * @return {string}
 * 
 * Time: O(N)
 * Space: O(2N) due to the array that contains the split parts
 * Space simplifies to O(N)
 */
var simplifyPath = function(path) {
  let stack = [];
  for (const part of path.split("/")) {
      if (part === "..") {
          if (stack.length) stack.pop();
      } else if (part === "." || !part.length) {
          continue;
      } else {
          stack.push(part);
      }
  }
  return "/" + stack.join("/");
};
