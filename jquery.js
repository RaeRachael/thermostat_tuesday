$(document).ready( function() {
  const thermostat = new Thermostat();
  console.log(thermostat)
  $('#getTemperature').text(thermostat.getTemperature());
  $('#energyUsage').css('background-color', colour());

  $('#upTemp').click( function() {
    thermostat.upTemp()
    $('#getTemperature').text(thermostat.getTemperature());
    $('#energyUsage').css('background-color', colour());
  });

  $('#downTemp').click( function() {
    thermostat.downTemp()
    $('#getTemperature').text(thermostat.getTemperature());
    $('#energyUsage').css('background-color', colour());
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
    $('#energyUsage').css('background-color', colour());
  });

  function colour() {
    var usage
    usage = thermostat.energyUsage()
    if (usage === 'low-usage') {
      return 'green';
    } else if (usage === 'medium-usage') {
      return 'orange';
    } else {
      return 'red';
    }
  }

});
