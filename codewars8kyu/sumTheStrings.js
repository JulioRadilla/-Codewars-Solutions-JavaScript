/*Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)*/
//Solution:
function sumStr(a,b) {
    let total =  Number(a) + Number(b);
    return total.toString()
}
//Make a variable that holds in the sum of the strings
//wrap the string inside the Number() to convert it to a number and sum it up 
//return the variable with toString() to turn the number into a string 