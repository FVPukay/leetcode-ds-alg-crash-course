/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 *
 * Time: O(M)
 * M length of magazine, N length of ransom note
 * When M < N, return false, worst case M >= N
 * 
 * Space: O(1)
 * Never more than 26 characters
 */
var canConstruct = function(ransomNote, magazine) {
  const ranMap = new Map();
  const magMap = new Map();
  
  for(const char of ransomNote) {
      ranMap.set(char, (ranMap.get(char) || 0) + 1);
  }
  
  for(const char of magazine) {
      magMap.set(char, (magMap.get(char) || 0) + 1);
  }
  
  for(const [key, val] of ranMap) {
      if (!magMap.get(key) || magMap.get(key) < val) {
          return false;
      }
  }
  
  return true; 
};
