// una clase va a ser un molde para todos nuestros objetos del mismo tipo

class Student {
  // PascalCase
  // lo primero es un método preexistente que se llama constructor
  constructor(name, age, role, bootcamp = "Ironhack") {
    // es el método que va a crear todas las propiedades de mis objetos
    this.name = name;
    this.age = age;
    this.role = role;
    this.bootcamp = bootcamp;
  }

  sayHi() {
    console.log(`Hi! I'm ${this.name}!`);
  }
}

const student1 = new Student("Marcel", 18, "Teacher"); // no le pongo el argumento de bootcamp, por tanto va a ser Ironhack
const student2 = new Student("Marina", 17, "Program manager", "Otro sitio");

student1.name = "Arnaldo";

console.log(student1);
console.log(student2);

student1.sayHi();
student2.sayHi();

const studentsArray = [
  new Student("Alice", 20, "Student"),
  new Student("Bob", 22, "Student"),
  new Student("Charlie", 21, "Student"),
  new Student("David", 23, "Student"),
  new Student("Eva", 19, "Student"),
  new Student("Frank", 24, "Student"),
  new Student("Grace", 22, "Student"),
  new Student("Hannah", 20, "Student"),
  new Student("Ivy", 21, "Student"),
  new Student("Jack", 23, "Student"),
];

console.log(studentsArray[0]);

const realArrayOfStudents = [];

realArrayOfStudents.push(new Student("Fernando", 43, "Student"));
realArrayOfStudents.push(new Student("Roberto", 43, "Student"));
realArrayOfStudents.push(new Student("Alejandro", 43, "Student"));
realArrayOfStudents.push(new Student("Marcel", 43, "Student"));
realArrayOfStudents.push(new Student("Arnaldo", 43, "Student"));
realArrayOfStudents.push(new Student("Miquel", 43, "Student"));
realArrayOfStudents.push(new Student("Marta", 43, "Student"));
realArrayOfStudents.push(new Student("Cristina", 43, "Student"));
realArrayOfStudents.push(new Student("Anastasia", 43, "Student"));
realArrayOfStudents.push(new Student("Rigoberta", 43, "Student"));
realArrayOfStudents.push(new Student("Otilia", 43, "Student"));
realArrayOfStudents.push(new Student("Ana María de todos los santos", 43, "Student"));
realArrayOfStudents.push(new Student("Fernando junior", 43, "Student"));

console.log(realArrayOfStudents);


// Cada vez que un usuario hace click en login:
realArrayOfStudents.push(new Student("Fernando junior", 43, "Student"));

realArrayOfStudents[0].hi()