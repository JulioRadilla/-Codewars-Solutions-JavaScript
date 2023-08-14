/*SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!! */
//Solution:
function arrayMadness(a, b) {
    //Make new array to square the first array given and cube the second array 
    let newA = a.map(item => Math.pow(item,2));
    let newB = b.map(item => Math.pow(item,3))
    //If the sum of the first array is greater than the sum of the second array return true else false
    return newA.reduce((acc,c) => acc + c, 0) > newB.reduce((acc,c) => acc + c, 0)
}