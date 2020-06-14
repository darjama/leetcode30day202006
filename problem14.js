var findCheapestPrice = function(n, flights, src, dst, K) {
  if (!flights.length) return -1;
  let nodes = [];  
  for (let flight of flights) {
    let  [start, end, price] = flight;
    if (!nodes[start]) nodes[start] = {};
    nodes[start][end] = price;
  }
  let trips = 0;
  let minPrice = Infinity;
  let minPriceDone = Infinity;
  let results = [];
  while (trips <= K) {
    trips ++;
    let temp = [];
    if (!results.length) {
      for (let key in nodes[src]) {
        if(Number(key) !== dst) temp.push([key, nodes[src][key]])
        if(Number(key) === dst) minPriceDone = Math.min(minPriceDone, nodes[src][key])
        minPrice = Math.min(minPrice, nodes[src][key])
      }
    } else {
      results.forEach(a => {
        for (let key in nodes[a[0]]) {
          let newTtl = nodes[a[0]][key] + a[1];
          if(Number(key) !== dst && newTtl < minPriceDone) temp.push([key, newTtl])
          if(Number(key) === dst) minPriceDone = Math.min(minPriceDone, newTtl)
          minPrice = Math.min (minPrice, newTtl)
        }
      })
    }
    if (minPrice === minPriceDone && minPrice < Infinity) return minPriceDone;
    results = [...temp];
  }
  return minPriceDone === Infinity ? -1 : minPriceDone;
};

/**
 * Cheapest Flights Within K Stops
 * There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.
 * 
 * Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the 
 * cheapest price from src to dst with up to k stops. If there is no such route, output -1.
 * 
 * Example 1:
 * Input: 
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 * src = 0, dst = 2, k = 1
 * Output: 200
 * Explanation: 
 * The graph looks like this:
 * 
 * 
 * The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */

//graph, bfs, 
