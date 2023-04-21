/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3*/
//Solution:
function stray(numbers) {
    //Use the array given and use the filter method, use index of method on the array to check the items index in that array
    //compare if that value is the same as using the array last index method on the item to check if there is duplicates
    //if it is true it will filter out the duplicates and give only the  non duplicates numbers
    let num =  numbers.filter(item => numbers.indexOf(item) === numbers.lastIndexOf(item));
    //join the array that was filtered out
    let numS = num.join('');
    //Since the join method made it a string use the number method on it so it outputs it as a number
    return Number(numS);
}