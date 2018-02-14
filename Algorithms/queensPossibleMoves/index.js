// Given a chessboard of size, n x n,
// the position of the queen, qPos,
// and an array with the positions of obstacles, obs, 
// return the number of positions that the queen can move to.

// In chess, the queen can move across the board horizontally both ways,
// vertically both ways, and diagonally 4 ways.

// If an obstacle is positioned somewhere in the queens trajectory,
// any position in a direction after and including the obstacles
// position does not count as a possible position.



// Example of layout of the chessboard -
// [
// 5 [[],[],[],[],[]],
// 4 [[],[],[],[],[]],
// 3 [[],[],[],[],[]],
// 2 [[],[],[],[],[]],
// 1 [[],[],[],[],[]]
//    1  2  3  4  5
// ]
// with rows numbered increasingly from bottom to top, 
// and columns numbered increasingly from left to right,

function queensPossibleMoves(n, qPos, obs) {
};

module.exports = queensPossibleMoves;