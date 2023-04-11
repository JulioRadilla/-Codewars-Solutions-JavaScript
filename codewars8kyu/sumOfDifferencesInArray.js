/*Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).*/
//Solution:
function sumOfDifferences(arr) {
    //sort the array from descending order
    let a =  arr.sort(function(a,b){return b - a});
    //make a variable for the sum 
     let sum = 0;
     //Use a for loop, start from 0 and keep going until it reaches the array length and keep adding one
     for(let i = 0; i<a.length - 1; i++){
        //add the sum with array index subtracting with the next index next to it by adding 1 to the index 
       sum+= arr[i] - arr[i + 1];
     }
     //return the sum 
     return sum 
}