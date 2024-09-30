const student = {
  name: "John Doe",
  age: 21,
  course: "Computer Science",
  grade: "A",

  sayYourName() { // camelCase
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  },
};

student.sayYourName();

student.name = "John Wick";

student.sayYourName();

// container-cards kebab-case CSS

// snake_case

// aNarCHYcase
