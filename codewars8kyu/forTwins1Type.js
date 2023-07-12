/*Prolog:
This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

Task:
Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

Examples:
42, "number"   --> true
"42", "number" --> false */
//Solution:
function typeValidation(variable, type) {
    //Use typeof operator on the variable argument given and compare it with the type argument given and use  the equality operator when comparing
    return typeof variable == type
}