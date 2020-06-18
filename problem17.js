var solve = function(board) {
  var checkAdjacent = function(y,x) {
    if (board[y][x] === 'X' || board[y][x] === 'o') return;
    board[y][x] = 'o';
    if (y < board.length -1) checkAdjacent(y+1, x)
    if (x < board[0].length - 1) checkAdjacent(y, x + 1)
    if (y > 0) checkAdjacent(y - 1, x)
    if (x > 0) checkAdjacent(y, x - 1)
  }
  for (let i = 0; i < board.length; i += 1) {
    let jIterator = (i === 0 || i === board.length -1) ? 1 : board[0].length -1;
    for (let j = 0; j < board[0].length; j += jIterator) {
      if (board[i][j] === 'O') checkAdjacent(i,j);
    }
  }
  for (let line of board) {
    for (let i = 0; i < line.length; i++) {
      if (line[i] === 'o') {
        line[i] = 'O';
      } else {
        line[i] = 'X';
      }
    }
  }
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 
 * 
 * Surrounded Regions
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
 * 
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 * 
 * Example:
 * 
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * After running your function, the board should be:
 * 
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * Explanation:
 * 
 * Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. 
 * Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are 
 * connected if they are adjacent cells connected horizontally or vertically.
 */
