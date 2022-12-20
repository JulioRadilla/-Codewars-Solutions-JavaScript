/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/
//Solution: 
function findShort(s){
    let x = s.split(' ');
    let shortest = [];
    x.forEach(item => shortest.push(item.length) )
    return Math.min(...shortest ) 
}