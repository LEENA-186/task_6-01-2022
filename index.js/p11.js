import {Person} from './p1';
export class Teacher extends Person {
    constructor(name, degree){
    super(name);
    this.degree = degree;
    }
        tech(){
         console.log("tech");
  
      }
  }