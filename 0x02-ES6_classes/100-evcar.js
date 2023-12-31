import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // call constructor of super class (Building)
    super(brand, motor, color);

    // Create objs
    this._range = range;
  }

  // Methods

  cloneCar() {
    const NewObj = super.constructor[Symbol.species] || super.constructor;
    const clone = new NewObj();
    return clone;
  }

  // Setters

  // Getters
}
