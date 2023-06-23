/*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */
//Solution:
function validatePIN (pin) {
    //Check if pin length is 6 or 4
    if ( pin.length != 4 && pin.length != 6 ){
      return false
    }
    //Make a for loop to loop through string if the digit is more than string 9 and less than string 0 return false
     for(let i = 0; i < pin.length; i++){
       if( pin[i] > '9' || pin[i] < '0'){
         return false
       }
     }
     //else return true since it is a valid pin
     return true
}