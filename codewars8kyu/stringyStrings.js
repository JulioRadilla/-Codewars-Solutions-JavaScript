/*write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.*/
//Solution:
function stringy(size) {
    //Make a variable to hold a string 
    let str = '';
    //return the string by using padstart method 
    //This method pads the current string with another string multiple times if needed
    //Put the size given to the first parameter of the method and then put the string you want to be repeated
    return str.padStart(size, '10');
  }
