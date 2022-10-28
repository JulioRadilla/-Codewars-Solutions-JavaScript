/*Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
(the dedicated builtin(s) functionalities are deactivated)*/
//Solution: 
reverse = function(array) {
    let output = [];
    for (let i = array.length - 1; i> -1; i--){
        output.push(array[i]);
    }
    return output;
}