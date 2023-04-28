/*Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!*/
//Solution:
function createArray(number){
    var newArray = [];
    //this for loop wasn't working because it didnt add the counter so add counter++ 
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
}