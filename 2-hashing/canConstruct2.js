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
  if (ransomNote.length > magazine.length) return false;

  const magMap = new Map();
  for (const char of magazine) {
      magMap.set(char, (magMap.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
      if (!magMap.get(char) || magMap.get(char) <= 0) return false;
      if (magMap.get(char)) magMap.set(char, magMap.get(char) - 1);
  }

  return true;
};
