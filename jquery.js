$(document).ready( function() {
  const thermostat = new Thermostat();
  console.log(thermostat)
  update()
  updateweather()

  $('#upTemp').click( function() {
    thermostat.upTemp()
    update()
  });

  $('#downTemp').click( function() {
    thermostat.downTemp()
    update()
  });

  $('#powerSaveOn').click( function() {
    thermostat.powerSaveOn()
  });

  $('#powerSaveOff').click( function() {
    thermostat.powerSaveOff()
  });

  $('#resetTemp').click( function() {
    thermostat.resetTemp();
    update()
  });

  $('#updateweather').click( function() {
    updateweather();
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

  function update() {
    $('#getTemperature').text(thermostat.getTemperature() + ' c');
    $('#energyUsage').css('background-color', colour());
  }

  function updateweather() {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=abc5597e86100be39e5d15328031e161', function(data) {
      $('#weatherData').text(Math.round(data.main.temp - 273) + ' c');
    }) 
  }

});
