/*Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.*/
//Solution:
function isToday(date) {
    //Compare if the date is the same as the date of today
    return new Date().toDateString() == date.toDateString()
}
//We will be declaring a function labeled as isToday in the global memory with the value of function definition
