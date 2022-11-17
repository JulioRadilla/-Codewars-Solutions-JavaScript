/*When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.*/
//Solution:
function swap (string) {
    let v = 'aeiou';
    const check = x => v.includes(x);
    let a = []
    let s = string.split('')
    for(let i = 0; i<s.length; i++){
    check(s[i]) ? a.push(s[i].toUpperCase()) : a.push(s[i])
    }
    return a.join('')
}