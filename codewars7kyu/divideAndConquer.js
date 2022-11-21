/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.*/
//Solution: 
function divCon(x){
    let strings =  x.map(item => item === item.toString() ? Number(item) : 0 ) ;
    let number = x.map(item => item === item.toString() ? 0 : item  )
    let total = strings.reduce((acc,c) => acc + c , 0)
    let total1 = number.reduce((acc,c) => acc + c , 0)
    return total1 - total
}