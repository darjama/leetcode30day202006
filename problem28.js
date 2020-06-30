var findItinerary = function(tickets) {
  const map = {};
  for (let ticket of tickets) {
    if (map[ticket[0]]) {
      addInOrder(map[ticket[0]], ticket[1])
    } else {
      map[ticket[0]] = [ticket[1]];
    }
  }
   return makeList("JFK", map);
};

var makeList = function(start, map, result = []) {        
  var dests = map[start];        
  while(dests && dests.length > 0){
      makeList(dests.shift(), map, result); 
  }        
  result.unshift(start);
  return result;
}

var addInOrder = function(list, item) {
  let left = 0;
  let right = list.length -1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (list[middle] === item) {
      left = middle;
      break;
    } else if (list[middle] < item) {
      left = middle + 1;
    } else {
      right = middle -1;
    }
  }
  list.splice(left, 0, item);
}

/**
 * Reconstruct Itinerary
 * 
 * Solution
 * Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the 
 * tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.
 * 
 * Note:
 * 
 * If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, 
 * the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
 * All airports are represented by three capital letters (IATA code).
 * You may assume all tickets form at least one valid itinerary.
 * One must use all the tickets once and only once.
 * 
 * Example 1:
 * Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
 * Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
 * 
 * Example 2:
 * Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
 * Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
 * Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
 *              But it is larger in lexical order.
 *              
 * @param {string[][]} tickets
 * @return {string[]}
 */
