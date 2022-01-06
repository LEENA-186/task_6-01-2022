// bind
const form = {
    name:"nivi",
    age:"20",
    value(){
        console.log(this);

    }
};
form.name;
form.age;
form.value();

const value = form.value.bind(form);
value();
