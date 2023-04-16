/*Write a function that checks if a given string (case insensitive) is a palindrome.*/
//Solution:
function isPalindrome(x) {
    //Make variable to hold the given argument by using the split method and reverse method to check if it is palindrom
    let reversed =  x.split('').reverse();
    //return the variable by joining it and using lower case method to check if it is palindrome with the argument given and also use lower case method on it 
    return reversed.join('').toLowerCase() === x.toLowerCase()
}