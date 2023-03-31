/*Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error". */
//Solution:
function problem(x){
    //Use the typeof to check if the value inputed as an argument is a number , if its true than multiply by 50 and add 6 if not then return error
    return typeof x == 'number' ? (x * 50) + 6 : 'Error'
}