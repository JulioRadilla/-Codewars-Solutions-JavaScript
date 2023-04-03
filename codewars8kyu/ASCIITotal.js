/*You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291
 */
//Solution:
function uniTotal (string) {
    //Make a variable to hold the total
    let result = 0;
    //do a for loop and end it when i is less than the string length
    for(let i = 0; i < string.length; i++){
    //Use the charCodeAt on the string and use the index to get the value for each word
    result += string.charCodeAt(i)
    }
    //return the total
    return result
}