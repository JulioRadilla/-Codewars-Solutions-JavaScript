/*Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0 */
//Solution:
function nthEven(n){
    //to get the placement of a number you can use this formula 
    //by subtracting the number by 1 since we starting at 0 and then multiplying it by 2
    return 2 * (n - 1)
}