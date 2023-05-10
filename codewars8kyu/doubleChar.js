/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!*/
//Solution:
function doubleChar(str) {
    //Use a split method on the string argument given 
    let split = str.split('');
    //Use the map method to the array you just created by splitting the string
    let doubleLetter = split.map(item => item + item)
    //Use the join method to join the array to one string 
    return doubleLetter.join('')
}
  