/*Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!*/
//Solution:
function solve(arr) {
    //remove duplicares and keep last occurence of each element 
    //Reverse array
    let a =  arr.reverse();
    //filter the array reversed to keep the first non duplicates numbers (technically last duplicate numbers so we will reverse next)
    let result = a.filter((el,i) => arr.indexOf(el) === i);
    //reverse the array filtered to get the last duplicates 
    return result.reverse();
}