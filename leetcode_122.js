// 125. Valid Palindrome
// Solved
// Easy
// Topics
// Companies
// A phrase is a palindrome if, after converting all uppercase 
// letters into lowercase letters and removing all non-alphanumeric 
// characters, it reads the same forward and backward. Alphanumeric 
// characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 
// ======================================================================
// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let word = ""
    for (let letter of s.split("")) {
        if (alphabet.includes(letter.toLowerCase())) {
            word += letter
        }
    }
    return word.toLowerCase() === word.toLowerCase().split("").reverse().join("")
}