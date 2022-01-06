function add2(a,b,...c){
    console.log(a);
    console.log(b);
        
    for(var i of c)
     console.log(i);
    
}	


add2(1,2,3,4,4,55,66);
let[d,e,f,g] = add2;
console.log(add2); 
//rest should be only last parameter in method definition.



//task:
//From abov code snippet,get the value of c and use array destructuring 
//and assign it to seperate variable and print them