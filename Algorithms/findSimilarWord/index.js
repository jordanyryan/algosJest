// Find Similar Word
// Google's Did you mean...?

// Given a word, and an array of words,
// find the next similar word


// Example

const words = ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry'];

// If the given word is the same as the one in the array, 
// return that word.
// A words similarity is based off of
// the minimum amount of changes needed

// Ex 1 - findSimilarWord('strawbery', words) => 'strawberry';
// Ex 2 - findSimilarWord('berry', words) => 'cherry';

// Ex 1 Explanation -
// 'strawberry' is in our words array, and our given word
// only needs 1 more letter, 'r', to match 'strawberry';
// Therefore, we return 'strawberry';

// Ex 2 Explanation -
// To go from 'berry' to 'cherry',
// You need to change the 'b' to an 'h'
// and add a 'c' in the beginning,
// therefore, it only needs 2 changes,
// which is the most similar compared to
// the other words in the array
// So we return, 'cherry'

function findSimilarWord(word, dictionaryWords) {
}

module.exports = findSimilarWord;