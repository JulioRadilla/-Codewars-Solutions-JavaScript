/*This function will display every element of the array on your screen.

Ok, lesson is over, let's do a task with for.

Task
The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop. */

//Solution: 
function pickIt(arr){
    var odd=[],even=[];
    for( let i = 0; i < arr.length;i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i])
    } else if(arr[i] % 2 !== 0) {
      odd.push(arr[i])
    }
    }
    
    
    return [odd,even];
}