const x = 1;
x=2;
// block scoped and accessible inside of the block
// variable cannot be reassigned
//creating objects
//person object with 3 members ie one property and 2 methods
const person = {
    name:'nani',
    app(){},
    walk(){}
};
person.walk();
person['name']='john';
// this-reference to the current objects
// this-method
const card ={
    name: "credit",
    money(){
        console.log(this);// this is giving reference to the 'card' object    
    }
};
card.money();
//money is an function
const money = card.money;
console.log(money);

// undefined
// strict mode enabled by default

const money = card.money;
money();
// if we call a function as a stand alone object or outside of object it returns global object which is the window object in browsers
