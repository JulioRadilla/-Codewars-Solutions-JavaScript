/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings. */
//Solution:
function areYouPlayingBanjo(name) {
    // Implement me
    //If first letter of name is "r" or "R" then return there name + you are playing banjo else return there name + does not play banjo
    return name[0] === "r" || name[0] ===  "R" ? `${name} plays banjo` : `${name} does not play banjo`;
}
//Examples 
//areYouPlayingBanjo("Adam") => "Adam does not play banjo");
//areYouPlayingBanjo("Ringo") =>gi "Ringo plays banjo");