
class Person {
    static serialNumber = 65
    
    
    
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    
    introduce() {
      console.log(`Hi my name is ${this.name}, i am ${this.age} years old`);
    }
    greet() {
      console.log('Hi, How do you do!');
    }
    static help() {
      console.log('Hi, I am Person class. How can I help you?');
    }
  }
  const person1 = new Person('Martin', 33);
  const person2 = new Person('Robert', 20);
  const person3 = new Person('Sam', 24);
  
  person1.introduce();
  person2.greet();
  Person.help();
  const number1 = Person.serialNumber;
  console.log("number1:", number1)
  