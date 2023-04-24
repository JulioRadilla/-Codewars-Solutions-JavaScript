/*Task
Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

Examples
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4
Reference
QuadrantsQuadrants
There are four quadrants:

First quadrant, the quadrant in the top-right, contains all points with positive X and Y
Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y
More on quadrants: Quadrant (plane geometry) - Wikipedia*/
//Solution:
function quadrant(x, y) {
    //use ternary operator to check if x and y are more than 0 if they are then return quadrant 1
    //else if x  is more than 0 and y is less than 0  then return quadrant 4
    //else if x is less than 0 and y is more than 0   then return quadrant  2 
    //else if x and y are less than 0  then return quadrant 3
    //else if none of this fit the description then return false
    return (x > 0 && y > 0) ? 1 : (x > 0 && y < 0) ? 4 : (x < 0 && y > 0)  ?  2 : (x < 0 && y < 0) ? 3 : false
}