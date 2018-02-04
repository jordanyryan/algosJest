// Given a 2D Matrix(Array of arrays),mat, and a number, key
// Check to see if the key is in the matrix
// Example -
// const matrix = 
// [
//  [1,4,7,11,15],
//  [2,5,8,12,19],
//  [3,6,9,16,22],
//  [10,13,14,17,24],
//  [18,21,23,26,30]
// ]

// searchMatrix(matrix, 9) ==> true
// in the matrix, matrix[2][2] === 9, therefore we return true;

// in the matrix, there is no number 20, therefore we return false;
// searchMatrix(matrix, 20) ==> false

// Bonus - Try not to iterate through the array, and then iterate through those arrays
// It can be done without using 2 loops

const matrix = 
[
 [1,4,7,11,15],
 [2,5,8,12,19],
 [3,6,9,16,22],
 [10,13,14,17,24],
 [18,21,23,26,30]
]

function searchMatrix(mat, key) {
}

module.exports = {searchMatrix, matrix};