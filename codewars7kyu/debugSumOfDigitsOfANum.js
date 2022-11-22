/*Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14*/
//Solution:
function getSumOfDigits(integer) {
    let x = integer.toString()
    let a =  x.split('');
    return a.reduce((acc,c) => acc + Number(c),0)
}