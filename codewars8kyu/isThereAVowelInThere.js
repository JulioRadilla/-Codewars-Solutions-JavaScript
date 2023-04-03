/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.*/
//Solution:
//Use the map method on the array given.
// 'aeiou' includes the character represented by the character code x, using String.fromCharCode(x).
//If the string 'aeiou' includes the character corresponding to the character code x, then the includes() method returns true. Otherwise, it returns false.
const isVow = a => a.map(x=> 'aeiou'.includes(String.fromCharCode(x)) ? String.fromCharCode(x) : x)
