/*Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10. */
//Solution:
function sumNoDuplicates(numList) {
    //Use the array given and use the filter method, use index of method on the array to check the items index in that array
    //compare if that value is the same as using the array last index method on the item to check if there is duplicates
    //if it is true it will filter out the duplicates and given only non duplicates number
    let original = numList.filter(item => numList.indexOf(item) === numList.lastIndexOf(item))
    //return the original number by using the reduce method to add all the number in the array 
    return original.reduce((acc,c) => acc + c, 0)
}