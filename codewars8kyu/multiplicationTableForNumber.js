/*Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.*/
//Solution:
function multiTable(number) {
    //Make a variable for an empty string
    let table = '';
    //Make a for loop and start it at and if it is less than or equal to 10 to continue the loop
    //Add +1 to i 
    for(let i = 1; i <= 10; i++){
        //Add a template string to the empty string and use query selector to get the i and number to use them for your multiplication 
        //At the end of the query selector if i is less than 10 then return \n to the string else return an empty string
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`
    }
    //return the string 
    return table
}