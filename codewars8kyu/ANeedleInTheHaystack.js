/*Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6" */
//Solution:
function findNeedle(haystack) {
    //create variable to hold the index value once it is found 
    let index
    //Loop through array 
   for(let i = 0; i <= haystack.length; i++){
    //check the item if it is the same as the word needle
     if (haystack[i] == "needle"){
    //if true make index variable to the index that the word was found in the array
     index = i     
     }
   }
   //return template string with query selector of the index variable
    return `found the needle at position ${index}`
  }