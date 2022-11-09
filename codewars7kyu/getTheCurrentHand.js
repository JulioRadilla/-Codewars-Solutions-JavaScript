/*Given an array of cards played in a certain order. You need to return the opponent's current hand (4 cards max) in any order.
If you receive less than 8 cards as an argument => return as many cards as we could possibly know from this play.
Queue Scheme
Task:

Given an array of cards played in a certain order. You need to return the opponent's current hand (4 cards max) in any order.
If you receive less than 8 cards as an argument => return as many cards as we could possibly know from this play.

getCurrentHand(['Hog Rider','Earthquake','Archer Queen','Giant Skeleton','Fire Spirit','Cannon']) // => ['Hog Rider', 'Earthquake']
Example:

currentHand([
  'Hog Rider',
  'Earthquake',
  'Archer Queen',
  'Giant Skeleton',
  'Fire Spirit',
  'Cannon',
  'Skeletons',
  'Hog Rider',
  'The Log',
  'Fire Spirit',
  'Earthquake',
  'Giant Skeleton',
  'Skeletons',
  'Archer Queen',
  'Fire Spirit',
  'Cannon',
  'Giant Skeleton',
  'Skeletons',
]); // => ['Archer Queen', 'Earthquake',  'The Log', 'Hog Rider']
Explanation:

The current hand definitely can't contain:

'Fire Spirit', 'Cannon', 'Giant Skeleton', 'Skeletons'

Because they're the last played cards withing the 4-card range.

Archer Queen => definitely in the current hand (no Archer Queen in the last 4 cards played)
Skeletons => not in the current hand (we can see Skeletons in the last 4 cards played)

...and so on...

Good luck!*/
//Solution: 
function getCurrentHand(arr) {
    
    let last =  arr.slice(-4)
    function check(x) {
      return last.includes( x )
    }
    let a = [];
     arr.forEach( item => check(item) ? a.push() : a.push(item))
    return a.filter(function(item, pos) {
      return a.indexOf(item) == pos;
  })
}
  