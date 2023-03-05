/*Complete the square sum function so that it squares each number passed into it and then sums the results together.*/
//Solution:
function squareSum(numbers){
    let pow = numbers.map(item => Math.pow(item,2))
    return pow.reduce((acc,c) => acc + c, 0)
}
//make a variable that holds a new array and map the argument that was giving inside the map method take the item and use the math.pow() on the item to the power of 2
//return the variable and use a reduce method to add all the numbers inside the array 