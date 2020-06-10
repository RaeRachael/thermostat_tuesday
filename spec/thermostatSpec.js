'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('can increase the temperature', function(){
    thermostat.upTemp()
    expect(thermostat.getTemperature()).toBeGreaterThan(20)
  });

  it('can decrease the temperature', function(){
    thermostat.downTemp()
    expect(thermostat.getTemperature()).toBeLessThan(20)
  });

  it('no less than 10 degress', function(){
    for (var i = 0; i < 11; i++){
      thermostat.downTemp();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('when power saving mode is on, max temp is 25 degrees', function(){
    for (var i = 0; i < 6; i++){
      thermostat.upTemp();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  })

  it('when power saving mode is off, max temp is 32 degrees', function(){
    thermostat.powerSaveOff()
    for (var i = 0; i < 13; i++){
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

  describe('energy usage', function(){

    it("should return 'low-usage' if temp < 18 degrees", function(){
      for (var i = 0; i < 3; i++){
        thermostat.downTemp();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage')
    });
    it("should return 'medium-usage' if temp < 25 degrees", function(){
      for (var i = 0; i < 2; i++){
        thermostat.downTemp();
      }
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    });
    it("should return 'high-usage' if temp >= 25 degrees", function(){
      for (var i = 0; i < 5; i++){
        thermostat.upTemp();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage')
    });

  });

});
