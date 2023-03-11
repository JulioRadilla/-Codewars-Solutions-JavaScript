/*You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
Happy coding!*/
//Solution:
function mergeArrays(arr1, arr2) {
    //Merge both array by using a concat method on the first array and combine it with the 2nd array
    let combined = arr1.concat(arr2);
    //Make a set of the new array created to store  unique values 
    combined = new Set(combined);
    //Use the Array.from() static method to  create a new shallow-copied Array
    combined =  Array.from(combined);
    //sort the array that was combined 
    combined = combined.sort((a,b) => a-b);
    //return the value of the variable 
    return combined
}