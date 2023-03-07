/*Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"*/
function nerdify(txt){
    //use  split method on the string to split it into an arrayn and store in a variable
    let s = txt.split('');
    //Use map method on the variable created to split the word so that it can loop and check if the item is the letter that has to replaced to a number if so just assign the item to the correct number by using a ternary operator
   let word =  s.map(item => item == 'E' || item == 'e' ? item = 3 : item == 'A' || item == 'a' ? item = 4 : item =='l' ? item = 1 : item)
   //return the variable that was made to keep the new array and use the join method so that it becomes an actual word
   return word.join('')
}
