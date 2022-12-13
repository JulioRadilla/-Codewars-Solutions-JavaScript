/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */
//Solution: 
function DNAStrand(dna){
    const checkA = x => x.includes('A');
    const checkC = x => x.includes('C');
    const checkT = x => x.includes('T');
    const checkG = x => x.includes('G');
    let split = dna.split('');
    return split.map(item => checkA(item) ? 'T' : checkT(item) ? 'A' : checkC(item) ? 'G' : checkG(item) ? 'C' : item ).join('')
}