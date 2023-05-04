/*After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).*/
//Solution:
function rentalCarCost(d) {
    //Multiply the days times 40 
    //minus value with the result of the ternary operator
    //do a ternary operator if the days are more than 6 if it is return 50 
    //else if its more than 2 if it is return 20 or else return 0
    return 40 * d - (d > 6 ? 50 : d > 2 ? 20 : 0)
}