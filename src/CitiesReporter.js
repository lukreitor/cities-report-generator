// src/CitiesReporter.js
export default class CitiesReporter {
    constructor({ formaterStrategy, dataAdapter }) {
      this._formaterStrategy = formaterStrategy;
      this._dataAdapter = dataAdapter;
    }
  
    report(filename) {
      const cities = this._dataAdapter.readData(filename);
      return this._formaterStrategy.output(cities);
    }
  }
  