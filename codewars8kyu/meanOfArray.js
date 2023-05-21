/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/
//Solution:
function getAverage(marks){
    //Add all numbers
    let total = marks.reduce( (acc,c)  => acc + c, 0);
    //Divide the total of the array with the the arrays length 
    let mean =  total/marks.length
    //Round down to nearest integer
    return Math.floor(mean)
  }
  //getAverage([2,2,2,2]) Output: 2 