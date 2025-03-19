/**
 * @param {number[][]} matches
 * @return {number[][]}
 * Time: O(NlogN)
 * Space: O(N)
 */
var findWinners = function(matches) {
  const answer = [[], []];
  const results = new Map();
  
  for(const match of matches) {  
      const winner = match[0];
      const loser = match[1];
      if(!results.has(winner)) {
          results.set(winner, 0);
      }
      results.set(loser, (results.get(loser) || 0) + 1);
  }
  
  for(const player of results) {
      const numLosses = player[1];
      const playerNum = player[0];
      
      if(numLosses === 0) {
          answer[0].push(playerNum);
      } else if (numLosses === 1) {
          answer[1].push(playerNum);
      }
  }
  
  answer[0] = answer[0].toSorted((a, b) => a - b);
  answer[1] = answer[1].toSorted((a, b) => a - b);
  return answer;
};
