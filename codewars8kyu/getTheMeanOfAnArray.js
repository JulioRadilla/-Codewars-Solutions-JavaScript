/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/
//Solution:
function getAverage(marks){
    //use the reduce method on the array given as an argument and then divide it with the length of the array to get the mean
    let mean = marks.reduce( (acc,c) => acc + c, 0) / marks.length;
    //return the result witj Math floor to round down 
    return Math.floor(mean);
}