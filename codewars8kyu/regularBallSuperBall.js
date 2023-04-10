/*Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"*/
//Solution:
//Use a Class syntax 
class Ball{
    //Use the constructor syntax and make a parameter and hold a default value of regular
    constructor(ballType="regular"){
    //Use this on the parameter created
      this.ballType = ballType;
    }
}