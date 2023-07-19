/*Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")*/
//Solution:
function isDigit(s) {
    //Use the string given with the equality(not strict equality) and compare it with the string given but with the method parseFloat()
    return s==parseFloat(s);
}