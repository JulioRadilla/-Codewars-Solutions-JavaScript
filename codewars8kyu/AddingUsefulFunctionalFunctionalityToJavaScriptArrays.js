/*Array.range = function(start, count) {
    var arr = [];
    while (count >0){
        arr.push(start++);
        count--;
    }
    return arr;
}

Array.prototype.sum = function() {
  return this.reduce((acc,c) => acc + c, 0)
}*/
//Solution:
Array.range = function(start, count) {
    //Use an array to hold nums
    var arr = [];
    //Use while loop to count nums to push in array
    while (count >0){
        arr.push(start++);
        count--;
    }
    //return array
    return arr;
}

Array.prototype.sum = function() {
    //Add the array with reduce method
  return this.reduce((acc,c) => acc + c, 0)
}