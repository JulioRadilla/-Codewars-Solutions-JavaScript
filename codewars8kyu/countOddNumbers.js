/*Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!*/
//Solution:
//Each number if you divide it by half it will always give you how many odds
//Are below that number so I will divide the number by 2 and use Math.floor()
//So that it rounds to a whole number.
function oddCount(n){
    return Math.floor(n / 2)
}