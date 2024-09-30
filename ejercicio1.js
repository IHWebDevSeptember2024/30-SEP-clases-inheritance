class Player {
  constructor(name, attack) {
    this.name = name;
    this.live = 100;
    this.level = 1;
    this.attack = attack;
  }

  receiveDamage(ditto) {
    switch (ditto.element) {
      case "fire":
        this.live -= ditto.attack * 2;
        break;
      case "ice":
        this.live -= ditto.attack * 2.5;
        break;
      default:
        this.live -= ditto.attack;
        break;
    }

    if (this.live <= 0) {
      console.log("GAME OVER");
    }
  }
}

class Enemy {
  constructor(attack, element) {
    this.name = "Koopa";
    this.live = 100;
    this.attack = attack;
    this.element = element;
  }
  receiveDamage(ditto) {
    this.live -= ditto.attack;
    if (this.live <= 0) {
      console.log("The enemy is dead");
    }
  }
}

const playerOne = new Player("Son Goku", 50);

const enemyOne = new Enemy(10, "earth");

console.log("Vida del enemigo antes del golpe: ", enemyOne.live);

// hagamos que el enemigo reciba un golpe del player

enemyOne.receiveDamage(playerOne);

console.log("Vida del enemigo después del golpe: ", enemyOne.live);

console.log("Vida del player antes del golpe: ", playerOne.live);

for (let i = 0; i < 5; i++) {
  playerOne.receiveDamage(enemyOne);
}

console.log("Vida del player después del golpe: ", playerOne.live);