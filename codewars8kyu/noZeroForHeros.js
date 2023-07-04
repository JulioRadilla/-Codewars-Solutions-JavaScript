/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway */

//Solution:
function noBoringZeros(n) {

    //Make a variable and store in the number that was converted into a string and then array after splitting the string 
    let numArr = n.toString().split('');
    //Make a while loop that loops until the statement isnt true
    while(numArr[numArr.length - 1 ] === '0'){
        //While looping the statement is true then pop that number
      numArr.pop()
    }
    //once while loop is done return the array into a number and join it with a string
    return +numArr.join("")
  }