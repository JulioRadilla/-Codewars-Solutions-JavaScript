/*Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/
//Solution:
class SmallestIntegerFinder {
    findSmallestInt(args) {
        //sort the array that was given as an argument so that you have the smallest int in the beginning of the array and then use the index 0 to get the smallest int in the array make sure to return it  
       return args.sort(function(a,b){return a - b })[0]
    }
}
