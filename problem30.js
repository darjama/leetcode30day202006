var findWords = function(board, words) {
  const dictionary = new Trie();
  let results = [];
  for (let word of words) {
    let node = dictionary;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!node.kids[letter]) node.kids[letter] =  new Trie();
      node = node.kids[letter]
    }
    node.isEnd = true;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let temp = findWord(dictionary, board, i, j)
      if (temp.length > 0) results = [...results, ...temp]
    }
  }
  return results;
};

var findWord = function(trie, board, y, x) {
  const result = [];
  var recurse = function(y, x, node = trie, string = '', visited = []) {
    var traverse = function(y,x) {
      let a = false, b = false, c = false, d = false;
      if (!visited.includes('' + (y - 1) + ' ' + x) && y > 0) a = recurse(y - 1, x, node, string, [...visited])
      if (a) deleteTrie(node);
      if (!visited.includes('' + y + ' ' + (x + 1)) && x < board[0].length -1) b = recurse(y, x+ 1, node, string, [...visited])
      if (b) deleteTrie(node);
      if (!visited.includes('' + (y + 1) + ' ' + x) && y < board.length -1) c = recurse(y + 1, x, node, string, [...visited])
      if (c) deleteTrie(node);
      if (!visited.includes('' + y + ' ' + (x - 1)) && x > 0) d =recurse(y, x- 1, node, string, [...visited])
      if (d) deleteTrie(node);
    }
    if (node.kids[board[y][x]]) {
      string += board[y][x]
      node = node.kids[board[y][x]];
      visited.push(''+ y + ' ' + x)
      //console.log(string, node);
      if (node.isEnd) {
        node.isEnd = false;
        result.push(string);
        traverse(y,x);
        return true;
      } else {
        traverse(y,x);
      }

    } else {
      return false;
    }
  }
  recurse(y, x)
  return result;
}

var deleteTrie = function(node) {
  if (node.kids.length === 0) delete node;
}

var Trie = function(kids={}) {
  this.kids = kids;
  this.isEnd = false;
}

/**
 * Word Search II
 * 
 * Given a 2D board and a list of words from the dictionary, find all words in the board.
 * 
 * Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. 
 * The same letter cell may not be used more than once in a word.
 * 
 *  
 * 
 * Example:
 * 
 * Input: 
 * board = [
 *   ['o','a','a','n'],
 *   ['e','t','a','e'],
 *   ['i','h','k','r'],
 *   ['i','f','l','v']
 * ]
 * words = ["oath","pea","eat","rain"]
 * 
 * Output: ["eat","oath"]
 *  
 * 
 * Note:
 * 
 * All inputs are consist of lowercase letters a-z.
 * The values of words are distinct.
 * 
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
