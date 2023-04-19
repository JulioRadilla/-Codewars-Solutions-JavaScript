/* */
//Solution:
let replaceDots = function(str) {
    //Use the method of split on the str and split it with the dot so it can make an array without the dots
    //Use the join method after the split method and join it with the dash so it can join with the dash instead of the dots
    return str.split('.').join('-')
}