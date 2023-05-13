/*For every good kata idea there seem to be quite a few bad ones!
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.*/
//Solution:
function well(x){
    let goodCount = 0; 
    x.forEach(item => item == 'good' ? goodCount++ : goodCount)
    return  goodCount == 1 || goodCount == 2 ? "Publish!" : goodCount > 2 ? "I smell a series!" : "Fail!"
  //if 1 or 2 good in array return Publish!
  //if more than 2 good return I smell a series!
  //if no good return Fail!
}

well(['bad','bad','bad','good']) //Output: Publish!
well(['good','good','good','good']) //Output: I smell a series!