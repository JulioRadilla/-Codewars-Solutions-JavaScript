/*Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'. */
//Solution:
function DNAtoRNA(dna) {
    //Use the split the method on the dna given and put it in a variable 
    let a = dna.split('');
    //Use the map method on the array created and check if the letter is equal to the letter T and if it is just change the value to the letter U and if it is not then return the same item also store this in a variable
     let result = a.map(item => item === 'T' ? item = 'U' : item)
     //return the result using the join method on it so it can be a string and not an array 
     return result.join('')
}