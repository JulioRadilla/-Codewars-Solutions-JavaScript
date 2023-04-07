/*If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.*/
//Solution:
var countSheep = function (num){
    //Make a variable to hold an array
    let a = [];
    //Use a for loop and start with num and if the i is less or equal to keep going until its not while adding 1 each time
    for(let i = 1; i<=num; i++){
     //Each time its looping push a template string and use a query selector to get i variable and then add the sentence you wish to push each time
      a.push(`${i} sheep...`)
    }
    //return the array by using the join method 
    return a.join('')
}