$(document).ready( function() {
  const thermostat = new Thermostat();
  console.log(thermostat)
  $('#getTemperature').text(thermostat.getTemperature());
});
