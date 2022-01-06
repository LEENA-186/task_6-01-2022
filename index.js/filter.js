const employees=[
    {name: "ram",category: "developer", start:1990, end: 2000},
    {name: "ramesh",category: "developer", start:1988, end: 2000},
    {name: "hari",category: "trainee", start:1950, end: 2003},
    {name: "jessy",category: "developer", start:2017, end: 2020},
    {name: "vinay",category: "trainee", start:1988, end: 1998},
    {name: "chaitu",category: "manager", start:1900, end: 1931},
    {name: "vikram",category: "developer", start:1979, end: 2000},
    {name: "raksh",category: "manager", start:1999, end: 2018},
    {name: "ravi",category: "clerk", start:2012, end: 2021},

] ;

const ages = [88, 83, 32, 45, 33, 56, 77, 65, 44, 43, 33, 55, 67, 54];
//let drink = [];
//for (let i=0; i< ages.length; i++){
    //if(ages[i] >21){
       // drink.push(ages[i]);
    
    //}
//}
//const drink = ages.filter(function(age){
    //if (age > 45){
        //return true;
    //}
//});
//const sdrink= ages.filter(age => age > 45);
//console.log(sdrink);
const eigEmployees = employees.filter(employ => (employ.start >1920 && employ.start<1990));
console.log(eigEmployees);
