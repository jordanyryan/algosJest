// Given an array of numbers where each number is the height of the tower
// and the max distance they can hop to the next index,
// check to see if it is possible to traverse out of the array
// return true if it's possible, and false if it's not

// Example - 
// Given an array, [4,2,1,0,2,0]
//
//
//
//
// x           
// x           
// x x     x   
// x x x 0 x 0    --> Anything past the last index makes it out. 

// If you land on an index with a value of 0, you can't jump anywhere


// The start of the array is index 0
// Whatever number is at index 0, is the maximum distance you can go
// from there
// for example - arr[0] = 4, so you can jump anywhere from index 0 --> index 4

// Given the array [4,2,1,0,2,0]
// Our first step would be to start at array[0] == 4
// The next best step would be to jump to array[4] == 2
// Then jump 2 more indexes out of the array
// So we would return true for this input

// Given the array [2,0,1,0]
// We start at array[0] == 2
// We can jump anywhere from index 0 --> index 2
// So are possible spaces are index 1 == 0 or index 2 == 1
// If we jump to index 1 == 0, we can't jump anywhere else
// So we try index 2 == 1
// at index 2 == 1, we can only jump 1 space to index 3 == 0
// Since we can't jump anywhere else, and we didn't get out of the array
// We return false

function isHoppable(tower){
}


module.exports = isHoppable;