/*Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

Sample Input: 07:05:45PM Sample Output: 19:05:45

Try not to use built in DateTime libraries.

For more information on military time, check the wiki https://en.wikipedia.org/wiki/24-hour_clock#Military_time*/
//Solution:
var getMilitaryTime = function(input) {
    //Check if the time is at AM if it is than return 0 + the first two numbers in front else add 12 to the numbers in front and then do the divisible of 12
    //Else add 12 to the first two numbers and then do the divisible of 12 
    let hour = (input.slice(-2) === 'AM' ? 0 : 12)
             + +input.slice(0, 2) % 12;
    //add 00 string to the hour created above and get the last two digits of that new number 
    //Also add the remainder of string inserted without the am or pm at the end 
    let time = ('00' + hour).slice(-2) 
             + input.slice(2, -2)
    
    return time;
    
};