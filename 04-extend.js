class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.year = 2024;
  }
  startEngine() {
    console.log("BROOOOM!");
  }
}

class ElectricCar extends Car {
  constructor(brand, model, batteryKWh) {
    super(brand, model);

    this.batteryKWh = batteryKWh;
  }
}

const myCar1 = new Car("Toyota", "Yaris");

const myCar2 = new ElectricCar("Tesla", "X", 500050);

myCar2.startEngine()
