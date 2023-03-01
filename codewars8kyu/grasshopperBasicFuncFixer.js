/*Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?*/
//Solution: 
function addFive(num) {
    var total = num + 5
    return total
}
//it was returning the num and not the variable created
//the variable must be returned because thats where the adding the number 5 is stored in
