'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

/*
thermostat.getTemperature === FUNCTION
thermostat.getTemperature()  === result of the function
*/

//You can increase the temperature with an up function
  it('can increase the temperature', function(){
    thermostat.upTemp()
    expect(thermostat.getTemperature()).toBeGreaterThan(20)
  });

}); //describe
