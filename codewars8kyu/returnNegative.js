/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.*/
//Solution:
function makeNegative(num) {
    //Use a negative in front of the math.abs() method to get the absolute value of that num and returns it as a negative even if the num is negative
    //Math.abs() gets the absolute value of num example: Math.abs(-4) returns 4 
    return -Math.abs(num);
}
