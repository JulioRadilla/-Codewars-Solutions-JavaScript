/*Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1 */
//Solution:
function strCount(str, letter){  
    //create a count variable 
    let count = 0;
    //create a function that uses an include method on its parameter and checks if the letter is included 
    const check = x => x.includes(letter);
    //split the string given to make it into an array and put it into a variable
    let split = str.split("");
    //use forEach method to loop through the array that we created, this method will add 1 to the count variable if the check function is true otherwise it wont add 1 if false
    split.forEach(item => check(item) ? count++ : count);
    //lastly we return the count variable 
    return count
  }