$(document).ready( function() {
  const thermostat = new Thermostat();
  console.log(thermostat)
  $('#getTemperature').text(thermostat.getTemperature());

  $('#upTemp').click( function() {
    thermostat.upTemp()
    $('#getTemperature').text(thermostat.getTemperature());
  });

  $('#downTemp').click( function() {
    thermostat.downTemp()
    $('#getTemperature').text(thermostat.getTemperature());
  });

  $('#powerSaveOn').click( function() {
    thermostat.powerSaveOn()
  });

  $('#powerSaveOff').click( function() {
    thermostat.powerSaveOff()
  });

  $('#resetTemp').click( function() {
    thermostat.resetTemp();
    $('#getTemperature').text(thermostat.getTemperature());
  });

});
