/**
 * @param {number[][]} matches
 * @return {number[][]}
 * 
 * Time: O(N + k)
 * Space: O(k)
 */
var findWinners = function(matches) {
  const losses = new Array(100001).fill(-1);
  for (const [winner, loser] of matches) {
      if (losses[winner] === -1) losses[winner] = 0;
      if (losses[loser] === -1) {
          losses[loser] = 1;
      } else {
          losses[loser] += 1;
      }
  }
  const ans = [[], []];
  for (let i = 1; i < losses.length; i++) {
      if (losses[i] === 0) ans[0].push(i);
      if (losses[i] === 1) ans[1].push(i);
  }
  return ans;
};
