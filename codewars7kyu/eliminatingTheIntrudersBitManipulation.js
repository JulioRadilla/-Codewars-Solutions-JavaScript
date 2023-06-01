/*You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:

function eliminateUnsetBits(number);
Examples
eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
eliminateUnsetBits("111") ->  7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0*/
//Solution:
function eliminateUnsetBits(number) {
    //Return corresponding number after keeping only the 1's
    
    //Create an array to hold the 1's that you will pushing
    let a0 = [];
    //Create a for loop to loop through the string 
    for(let i = 0; i<number.split('').length; i++){
        //While it loops through each number use a ternary operator  to check if the number is equal to 1 and if it is push it to array that will be holding the 1's
        number[i] == 1 ? a0.push(number[i]) : a0.push()
    }
    //Return the array holding the ones and check if it is than 1 then return 0 else use parseInt to create the number of that binary of 1's
    return a0.join('') < 1 ? 0 : parseInt(a0.join(''), 2)
}