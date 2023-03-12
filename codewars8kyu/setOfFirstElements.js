/*Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> []*/


//Solution:
function first(arr, n) {
    //use a ternary operatir to check if n has an undefined argument , if there is no argument use the slice method on the array to start fromm 0 and end to 0 to get the first element 
    //else just return the arr sliced with the n inputed to end to get those elements
    return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
}