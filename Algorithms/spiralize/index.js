// Given a number, n, 
// create a 2-D array of n by n that creates a spiral of numbers
// starting from the top left or array[0][0] and ends in the
// middle

// Examples - 
// spiralize(5) =>
//  [ 
//  [ 1, 2, 3, 4, 5 ],
//  [ 16, 17, 18, 19, 6 ],
//  [ 15, 24, 25, 20, 7 ],
//  [ 14, 23, 22, 21, 8 ],
//  [ 13, 12, 11, 10, 9 ] 
//  ]

// spiralize(4) =>
// [ 
// [ 1, 2, 3, 4 ],
// [ 12, 13, 14, 5 ],
// [ 11, 16, 15, 6 ],
// [ 10, 9, 8, 7 ] 
// ]

function spiralize(n) {
}

const spirOf4 = [[ 1, 2, 3, 4 ],[ 12, 13, 14, 5 ],[ 11, 16, 15, 6 ],[ 10, 9, 8, 7 ]];
const spirOf5 = [[ 1, 2, 3, 4, 5 ],[ 16, 17, 18, 19, 6 ],[ 15, 24, 25, 20, 7 ],[ 14, 23, 22, 21, 8 ],[ 13, 12, 11, 10, 9 ]];

module.exports = {spiralize, spirOf5, spirOf4};