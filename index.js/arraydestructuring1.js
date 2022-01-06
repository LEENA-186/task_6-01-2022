//let a = 10, 
    //b = 20;

//[a, b] = [b, a];

//console.log(a); 
//console.log(b); 


function prob(x, y) {
    return [
        x + y,
        x - y,
        x*y,
        x /y,
        (x + y) / 2

    ]
}
let [add, sub, mul, div, avg] = prob(60, 3);
console.log(add, sub, mul, div, avg);
