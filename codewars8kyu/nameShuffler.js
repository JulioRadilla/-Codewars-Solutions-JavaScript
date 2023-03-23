/*Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"*/
//Solution: 
function nameShuffler(str){
    //Use the split, reverse and join method on the str to get the name to flip 
    return str.split(' ').reverse().join(' ')
}