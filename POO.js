class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    tellMyName(){
        console.log(`I am ${this.name}`);
    }
    
    tellMyAge(){
        console.log(`I am ${this.age} years old`);
    }
}

const John = new Person ("John", 40);
const Mary = new Person ("Mary", 35)
John.tellMyName();
John.tellMyAge();
Mary.tellMyName();
Mary.tellMyAge();
