/* */
//Solution:
function alternate(n, firstValue, secondValue){
    //Build an array based on the integer given and the two other values alternating
     let a = [];
     for(let i = 0; i<n; i++){
       i % 2 == 0 ? a.push(firstValue) : a.push(secondValue)
     }
     return a
   }
   
   //alternate(5,true,false) =>  [true, false, true, false, true]
   //alternate(10, "blue", "red") =>["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]