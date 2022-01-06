let Admin = {
    fName: 'vijay',
    lName: 'Ram',
    Age: 28,
    City: 'mtm'

};

let { fName, lName, presentAge: Age = 18, mName = "ajith",City , fullname=`${fName} ${mName}${lName}` } = Admin;

console.log(fullname, Age ,City); 
 