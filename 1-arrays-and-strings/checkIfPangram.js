/**
 * @param {string} sentence
 * @return {boolean}
 * 
 * Time: O(N)
 * Space: O(1), since 26 unique lowercase letters
 */
var checkIfPangram = function(sentence) {
  const alpha = new Set(sentence);
  return alpha.size === 26 ? true : false;
};
