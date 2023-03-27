/*Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"*/
//Solution: 
function remove(s) {
    //use the endsWith method to check if it has an exclamation mark at the end 
    //Use a ternary operator if it is true use the slice method on the string to take out the exclamation mark
    //if not just return the string given 
    return s.endsWith('!') ? s.slice(0, -1) : s;
}