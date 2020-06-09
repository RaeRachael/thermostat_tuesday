'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  getTemperature() {
    return this.temperature;
  };

  upTemp() {
    this.temperature ++;
  };
};
