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

// Example 1 -
// n = 5
// qPos = [4,3]
// obs = [[5,5], [4,2], [2,3]]
// queensPossibleMoves(n, qPos, obs) => 10

// Example 1 Explanation
// 5 [[],  [3], [1], [4], [X]],
// 4 [[],  [X], [Q], [5], [6]],
// 3 [[],  [9], [2], [7], []],
// 2 [[10],[],  [X], [],  [8]],
// 1 [[],  [],  [],  [],  []]
//    1     2    3    4    5

// Q = the position of the queen
// X = Obstacles
// Numbers = all the possible positions the queen can move to 
// Any position after an obstacle in a queens trajectory is not valid.

function queensPossibleMoves(n, qPos, obs) {
};

module.exports = queensPossibleMoves;