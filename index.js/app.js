function num(){
    for (var i=0; i<5; i++)//i should only be accessed inside the block but here it is accessing outside also
    {
        console.log(i);
    }
    console.log(i);
}
num();

function num(){
    for (let i=0; i<5; i++)// not accessed outside only inside the function 
    {
        console.log(i);
    }
    console.log("welcome");
}
num();