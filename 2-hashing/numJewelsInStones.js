/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 */
var numJewelsInStones = function(jewels, stones) {
  const jewelSet = new Set(jewels);
  const map = new Map();
  for (const stone of stones) {
      if (jewelSet.has(stone)) map.set(stone, (map.get(stone) || 0) + 1);
  }
  let ans = 0;
  for (const [key, val] of map) {
      ans += val;
  }
  return ans;
};
