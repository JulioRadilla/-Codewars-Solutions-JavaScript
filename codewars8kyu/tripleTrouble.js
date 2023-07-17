/*Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length. */
//Solution:
function tripleTrouble(one, two, three) {
    //make a variable to hold an empty string
    let result = "";
    //Use for loop on the first array and loop through the length of the array since each array is the same length
    for (let i = 0; i < one.length; i++) {
        //Add the string of each array to the variable created by using charAt and the index number given from the for loop so it can loop trough the array
       result += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    //return the variable that was created first since it is holding the value of strings pushed from all three arrays fromm the for loop
    return result;
  }