/*Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.*/
//Solution:
String.prototype.toAlternatingCase = function () {
    //make a variable to store in the this and using the split method to split the word into an array 
    //this is a hidden parameter for this function and gets the value that this method is being used on
    let a =  this.split('');
    //Use map method on the variable created above and get the item to compare if its upper case or lowercase depending on the result alternate it and if its not a letter then return an item and store this new array in a variable
    let letters = a.map(item => item == item.toLowerCase() ? item.toUpperCase() : item == item.toUpperCase() ? item.toLowerCase() : item );
    //return the variable created above with a join method to join the array and make it into actual word/words
    return letters.join('')
}