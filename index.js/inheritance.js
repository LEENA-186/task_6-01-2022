class Person{
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("walk");
    }
}
//class Teacher extends Person {
  //  tech(){
    //    console.log("tech");

    //}
//}
//const teacher = new Teacher('nivi');
//teacher.walk
class Teacher extends Person {
    constructor(name, degree){
    super(name);
    this.degree = degree;
    }
        tech(){
         console.log("tech");
  
      }
  }
  const teacher = new Teacher("nivi","BE");
  teacher.degree;
  teacher.tech;
  

  