export default class Car {
  constructor(brand, motor, color) {
    // Create objs
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Methods

  cloneCar() {
    const NewObj = this.constructor[Symbol.species] || this.constructor;
    const clone = new NewObj();
    return clone;
  }

  // Setters

  set brand(value) {
    this._brand = value;
  }
  set motor(value) {
    this._motor = value;
  }
  set color(value) {
    this._color = value;
  }

  // Getters

  get brand() {
    return this._brand;
  }
  get motor() {
    return this._motor;
  }
  get color() {
    return this._color;
  }
}
