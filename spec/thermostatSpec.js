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

// You can decrease the temperature with a down function
  it('can decrease the temperature', function(){
    thermostat.downTemp()
    expect(thermostat.getTemperature()).toBeLessThan(20)
  });
  // Set the minimum temperature
  it('no less than 10 degress', function(){
    for (var i = 0; i < 11; i++){ //we count how many times we use that method
      thermostat.downTemp();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('when power saving mode is on, max temp is 25 degrees', function(){
    for (var i = 0; i < 6; i++){ //we count how many times we use that method
      thermostat.upTemp();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  })

  it('when power saving mode is off, max temp is 32 degrees', function(){
    thermostat.powerSaveOff()
    for (var i = 0; i < 13; i++){ //we count how many times we use that method
      thermostat.upTemp();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  })
  it ('reset to the default temperature', function(){
    for (var i=0; i < 6; i++){
      thermostat.upTemp();
    }
    thermostat.resetTemp();
    expect(thermostat.getTemperature()).toEqual(20);
  });





}); //describe
