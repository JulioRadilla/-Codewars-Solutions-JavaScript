/*Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: Input will either be a positive integer (or a string for untyped languages). */
//Solution:
function apple(x){
    //Use ternary operator and use the math.pow to square the x and if it is more than 1000 return the corresponding string
    //return it 
    return Math.pow(x,2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}