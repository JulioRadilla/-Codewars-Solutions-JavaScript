/*Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function? */
//Solution:
function evalObject(value){
    var result = 0;
    switch(value.operation){
    //add the break after each case so it can work properly
      case'+': result = value.a + value.b;
      break;
      case'-': result = value.a - value.b;
      break;
      case'/': result = value.a / value.b;
      break;
      case'*': result = value.a * value.b;
      break;
      case'%': result = value.a % value.b;
      break;
      case'^': result = Math.pow(value.a, value.b);
      break;
    }
    return result;
  }