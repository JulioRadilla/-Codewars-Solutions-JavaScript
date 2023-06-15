/*Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD */
//Solution:
function alternateCase(s) {
    //split array to have a for loop on it 
    let a =  s.split('');
    //create an empty array to push items to it 
    let newA = [];
    //Use for loop to loop through the array
    for(let i = 0; i < a.length; i++){
        //Use conditionals to see if letter is upper case or lower case bassed on its case alternate it 
      a[i] == a[i].toUpperCase() ? newA.push(a[i].toLowerCase()) : a[i] == a[i].toLowerCase() ? newA.push(a[i].toUpperCase()) : newA.push(a[i])
    }
    //Join the new array created
    return newA.join('')
}
//Examples: 
//alternateCase("Hello World") => "hELLO wORLD"
//alternateCase("abc") => "ABC"