'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
  }

  getTemperature() {
    return this.temperature;
  };

  upTemp() {
    this.temperature ++;
  };

  downTemp() {
    if (this.isMinTemp()){  // Go with this method but only if the temperature in already 10 degrees
      return;
    }
    this.temperature --;
  }

  isMinTemp() {  // is , convention for a boolean
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  // === comparison similar need to be



};
