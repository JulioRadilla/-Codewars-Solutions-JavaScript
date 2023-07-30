/*In this kata you need to write a function that will receive two strings (n1 and n2), each representing an integer as a binary number. A third parameter will be provided (o) as a string representing one of the following operators: add, subtract, multiply.

Your task is to write the calculate function so that it will perform the arithmetic and the result returned should be a string representing the binary result.

Examples:

1 + 1 === 10
10 + 10 === 100
Negative binary numbers are usually preceded by several 1's. For this kata, negative numbers can be represented with the negative symbol at the beginning of the string.

Examples of negatives:

1 - 10 === -1
10 - 100 === -10*/
//Solution:
function calculate(n1, n2, o) {
    //Use if else and check if o is equal if so take the numbers and parse int them with 2 to get them to be numbers then add them and use to string 2 to return the integer created by those binary numbers
    //repeat proccess for subtract and multiply
    if( o == 'add') {
       let x = parseInt(n1, 2);
       let y = parseInt(n2, 2);
       let sum = x + y;
       return sum.toString(2);
    } else if ( o == 'subtract'){
      let x = parseInt(n1, 2);
       let y = parseInt(n2, 2);
       let sum = x - y;
       return sum.toString(2);
    } else if (o == 'multiply'){
      let x = parseInt(n1, 2);
       let y = parseInt(n2, 2);
       let sum = x * y;
       return sum.toString(2);
    }
  }