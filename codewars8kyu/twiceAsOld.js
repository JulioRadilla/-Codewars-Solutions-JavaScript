/*Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.*/
//Solution:
function twiceAsOld(dadYearsOld, sonYearsOld) {
    //Double the years of the sonYearsOld by multiplying it by 2 and hold it in a variable
    let doubleYears = sonYearsOld * 2;
    //Subtract the years of the dad with the variable that was created on top 
    //Use the math.abs on the subtraction to get negative years ago to positive since it doesn't matter if it was in the past
    let result =  Math.abs(dadYearsOld - doubleYears);
    //Return it 
    return result 
}