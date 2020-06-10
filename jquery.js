$(document).ready( function() {
  const thermostat = new Thermostat();
  console.log(thermostat)
  update()

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
    $('#getTemperature').text(thermostat.getTemperature());
    $('#energyUsage').css('background-color', colour());
  }

});
