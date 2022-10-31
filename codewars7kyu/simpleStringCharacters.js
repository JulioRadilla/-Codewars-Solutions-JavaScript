/*In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!*/
//Solution:
function solve(s){
    let U = 0;
    let L = 0 ;
    let N = 0; 
    let SC = 0;
    s.split('').forEach( letter => {
    if( /[A-Z]/.test(letter)){
       U++
       } else if( /[a-z]/.test(letter)){
      L++
    } else if ( /[0-9]/.test(letter)){
      N++
    }
      else{
        SC++
      }
    })
    return [U,L,N,SC]
}