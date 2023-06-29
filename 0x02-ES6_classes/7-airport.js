export default class Airport {
  constructor(name, code) {
    // Create objs
    this._code = code;
    this._name = name;
  }

  // Methods

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  // Setters

  set name(value) {
    this._name = value;
  }
  set code(value) {
    this._code = value;
  }


  // Getters

  get name() {
    return this._name;
  }
  get code() {
    return this._code;
  }
}
