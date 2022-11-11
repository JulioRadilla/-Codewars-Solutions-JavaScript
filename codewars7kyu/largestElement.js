/*Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7] */
//Solution:
function largest(n,xs){
    let sorted = xs.sort(function(a,b){return a - b});
  return n > 0 ?  sorted.slice(-n) : [];
}