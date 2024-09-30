const dog = {
  name: "Lucas",
  role: "Ironhack CEO",
  age: 10,
  hobbies: ["Eat your food", "Play with a ball"],
  // Esto es un método
  bark: function () {
    console.log("Woof");
  },
  // Shorthand syntax
  play() {
    console.log("Lucas goes and gets the ball");
  },
  // arrow syntax
  runAway: () => {
    console.log("Lucas leaves because the campus door is open");
  },
};

dog.bark();

dog.play();

dog.runAway();


const player = {
  name: "Hero",
  life: 100,
  attack: 25,
  defense: 10,
  level: 1,
  hobbies: ["Training", "Exploring"],

  attackEnemy(enemy){
    enemy.life -= player.attack;
  }
}

const enemy1 = {
  name: "My last boss",
  life: 80,
  attack: 20,
  defense: 15,
  level: 1,
  hobbies: ["Scheming", "Fighting"]
}

console.log("ANTES DEL ATAQUE: ", enemy1);

// estamos usando un método dentro de player
player.attackEnemy(enemy1);