/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.*/
//Solution:
const invert = array => {
    //use map method on the array given as an argument and get each num to be multiplied by -1 to get the invert value
    return array.map( num => num * -1 )
}