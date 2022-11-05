/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/
//Solution: 
function getCount(str) {
    let v = 'aeiou';
    let sum = 0;
    function check(x){
    return v.includes(x);
    }
    let s = str.split('')
    for(let i = 0; i<s.length; i++){
    if(check(s[i]) === true){
      sum+=1
    }
    }
    return sum
}