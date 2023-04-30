/*Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.*/
//Solution:
function toBinary(n){
    //Use the Number method and put the n given with the method toString(2) inside it so it can give a string of binary and make it a number
    return Number(n.toString(2))
}