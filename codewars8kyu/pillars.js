/*function pillars(numPill, dist, width) {
  return numPill == 1 ? 0 : ((numPill - 2) * width) + ((100*dist) * (numPill - 1))
}*/
//Solution:
function pillars(numPill, dist, width) {
    //Distance between pillars is the same and the width of the pillars is the same
    //Calculate the distance between the first and the last pillat in cm 
    return numPill == 1 ? 0 : /*By subtraction 2 it eleminates of counting the first or last pillar  and multiply the width given and we will add the number with the number we get when we multiply dist times 100 to get the dist in cm and multiply it the num of pillars - 1 because they are ordered like this |--|--|--|*/ ((numPill - 2) * width) + ((100*dist) * (numPill - 1))
}