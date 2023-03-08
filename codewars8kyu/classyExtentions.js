/*Classy Extensions
Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.
Task
Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

Reference: JS, Ruby, Python.*/
//Solution:
class Cat extends Animal {
    //use constructor and put name to access the name from the class and also inside the constructor use the super(name) so you can access the property from the class prototype
    constructor(name){
      super(name);
    }
    //make a method speak and inside it return it with ticks , use a query selector and inside it use this.name to access the name when they make new cat class 
    speak(){
      return `${this.name} meows.`
    }  
}