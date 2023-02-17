/*Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5*/
//Solution:
const litres = time => {
    let litres =  time * .5;
    return Math.floor(litres);
}
  // .5 L / 1hr 
  //No minutes
  //No seconds
  //ONLY HOURS
  // litres(3) => 1.5 (ROUNDED)=> 1
  //lites(8.3) => 4.15 (ROUNDED) => 4
  //multiply time with .5 to get the litres that was dranked
  //then use Math.floor() to round it to the smallest value 