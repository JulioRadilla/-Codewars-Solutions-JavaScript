/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata*/
//Solution:
function shortcut (string) {
    //Make a local variable to store the lowercase vowels
    let v = 'aeiou';
    //Make an arrow function that uses the vowel to check if the argument includes it
    const check = x => v.includes(x);
    //Make a local variable to store in the string that will be split for each individual letter
    let s = string.split('');
    //Make a local variable with an empty array to push in the letters that arent vowels
    let result = [];
    //Use the foreach method on the splited string variable and check each individual letter 
    //Then use a ternary operator, if the letter is true that it includes a vowel then dont push
    // otherwise if its false then push it to the result variable and it would be stored in an array 
    s.forEach(item => check(item) ? result.push() : result.push(item))
    //Finally join the array that you pushed that werent vowels and you get your word with no vowels 
    return result.join('')
}