/*Our counter prototype is broken. Can you spot, what's wrong here?*/
//Solution:
function Counter() {
    this.value = 0;
}
//Instead of having Counter.prototype.increase() just assign that with a function  Counter.prototype.increase = function()
Counter.prototype.increase = function(){
    this.value++;
};

Counter.prototype.getValue = function() {
    return this.value;
};
  
Counter.prototype.reset = function(){
    this.value = 0;
};