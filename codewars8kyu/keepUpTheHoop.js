/*Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".*/
//Solution:
//Make an arrow fuction with 1 argument, We use that argument to check 
//How many hoops alex has made so far if the shots he made are more than 10 
//Or equal to 10 then show an encouraging message if its less than 10 then another encouraging message
const hoopCount = n => n >= 10 ? `Great, now move on to tricks` : `Keep at it until you get it`