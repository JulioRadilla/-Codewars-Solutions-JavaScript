/*Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.*/
//Solution:
function none(arr, fun){
    //use the some method on the arr to check if some of the array align with the function givien and since it is none 
    //we want to see if it is not on the array so we use the not operator in front of arr and we return it 
    return !arr.some(fun)
}