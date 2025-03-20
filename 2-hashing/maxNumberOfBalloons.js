/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  // Time: O(N)
  // Space: O(1)
  
  let maxDouble;
  let maxSingle;
  
  const freqCounter = {
      b: 0,
      a: 0,
      l: 0,
      o: 0,
      n: 0
  };
  
  for(const char of text) {
      if(char in freqCounter) freqCounter[char] += 1;
  }
  
  maxDouble = Math.min(freqCounter["l"], freqCounter["o"]);
  maxDouble = Math.floor(maxDouble / 2);
  maxSingle = Math.min(freqCounter["b"], freqCounter["a"], freqCounter["n"]);
  
  if(maxSingle >= maxDouble) {
      return maxDouble;
  } else {
      return maxSingle;
  }
};
