class Person {           
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this.lname;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'error';
        }
        this.lname = newName;
    }
}
person.name = 'vishu rao';
console.log(person.name);
