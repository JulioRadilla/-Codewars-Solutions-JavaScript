/*Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"*/
//Solution:
//Make an arrow function
const hello = (name) => {
    //Use a template string and use the sentence given to display 
    //Use a query selector and inside use a ternary operator if there is a name 
    //Display the name given and capitalize the first index 
    //add it back with the name slice to lowercase 
    //if the name isn't given return world and return it 
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`
}