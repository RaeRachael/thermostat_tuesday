'use strict';

class Thermostat {
  constructor() { // priv
    this.MAXIMUM_TEMPERATURE = [25, 32];
    this.MINIMUM_TEMPERATURE = 10;
    this.DEFAULT_TEMPERATURE = 20;
    this.MEDIUM_USAGE_LOW_LIMIT = 18;
    this.HIGH_USAGE_LOW_LIMIT = 25;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.isPowerSaveOn = true;
  }

  getTemperature() {
    return this.temperature;
  };

  upTemp() {
    if (this.isMaxTemp()){ }
    else {
      this.temperature ++;
    }
  };

  downTemp() {
    if (this.isMinTemp()){
      return;
    }
    this.temperature --;
  }

  isMinTemp() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaxTemp() {
    if (this.isPowerSaveOn) {
      return this.temperature === this.MAXIMUM_TEMPERATURE[0];
    } else {
      return this.temperature === this.MAXIMUM_TEMPERATURE[1];
    }
  }

  powerSaveOff() {
    this.isPowerSaveOn = false;
  }

  powerSaveOn() {
    this.isPowerSaveOn = true;
  }

  resetTemp() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_USAGE_LOW_LIMIT) {
      return 'low-usage'
    } else if (this.temperature < this.HIGH_USAGE_LOW_LIMIT) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    }
  }

};
