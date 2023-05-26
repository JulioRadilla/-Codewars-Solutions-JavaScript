/*Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```
Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings*/
//Solution:
var TempleStrings = function(obj, feature) {
    //Use template strings to use the query selector and get the arguments inputed in the paramater of the function 
    return `${obj} are ${feature}`
}