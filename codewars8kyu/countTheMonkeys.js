/*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]*/
//Solution:
function monkeyCount(n) {
    //Make a variable that holds in a array
    let nums = [];
    //make a for loop that starts with 1 and ends when it equals to num that was inputed
    for(let i = 1; i<=n; i++){
    //insert  the num to the array created by using the push method 
      nums.push(i)
    }
    //return the variable that was holding the array 
    return nums
}