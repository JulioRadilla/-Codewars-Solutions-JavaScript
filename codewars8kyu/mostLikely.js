/*Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.*/
//Solution:
function mostLikely(prob1,prob2){
    //Compare the two probabilities and return true if the first one is most likely otherwise false
    const pro1 = prob1.split(':')[0] / prob1.split(':')[1];
    //Split the prob with semi colon so that you get the numbers and divide them to see the probability
    const pro2 = prob2.split(':')[0] / prob2.split(':')[1];
    //Compar if prob1 is more than prob2, if it is then return true otherwise return false
    return pro1 > pro2 ? true : false;
}