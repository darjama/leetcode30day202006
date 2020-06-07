var reconstructQueue = function(people) {
  const result = [];
  const unused = [...people.keys()];
  people.sort((a,b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return a[0]-b[0];
  })
  for (let p of people) {
    let i = unused.splice(p[1],1)
    result[i] = p;
  }
  return result;
};

/** 
 * Queue Reconstruction by Height
 * 
 * Suppose you have a random list of people standing in a queue. 
 * Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of 
 * people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.
 * 
 * Note:
 * The number of people is less than 1,100.
 * 
 * Example
 * 
 * Input:
 * [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
 * 
 * Output:
 * [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
 *  
 * @param {number[][]} people
 * @return {number[][]}
 */
