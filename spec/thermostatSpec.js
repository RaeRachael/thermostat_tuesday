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

}); //describe
