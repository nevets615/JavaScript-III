/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. in window binding this uses the window to get its value
* 2. in Implicit bindinng this gets its value from whatever is to its left.
* 3. in new binding this gets its value form what it was assigned to inside a constructer function.
* 4. whenever call or apply are used this is specially defined.
*
* write out a code example of each explanation above
*/

// Principle 1
function something(somethingElse){
    console.log(this);
    return somethingElse;
}


// code example for Window Binding

// Principle 2

const newer = {
    newest: 'Hello World',
    hello: function(name) {
      console.log(`${this.newest} my name is ${name}`);
      console.log(this);
    }
  };
  newer.hello('Steven');


// code example for Implicit Binding

// Principle 3
function Hi(hello) {
    this.howdy = 'howdy ';
    this.hello = hello;
    this.speak = function() {
      console.log(this.howdy + this.hello);
      console.log(this);
    };
  }
  
  const tex = new Hi("tex");
  const rex = new Hi("rex");
  
  tex.speak();
  rex.speak();
// code example for New Binding

// Principle 4
function Hero(attributes) {
    Humanoid.call(this,attributes)
    }
// code example for Explicit Binding