$(document).ready(function() {
var thermostat = new Thermostat();
updateTemp();

$('#up').click(function() {
  thermostat.increaseTemp();
  updateTemp();
});

$('#down').click(function() {
  thermostat.decreaseTemp();
  updateTemp();
});

$('#reset').click(function() {
  thermostat.reset();
  updateTemp();
});

$('#power-save').click(function() {
  thermostat.switchPowerSaving();
  updatePowerSaving();
  updateTemp();
})

function updateTemp() {
  $('#temp').text(thermostat.temperature());
  $('#temp').attr('class', thermostat.energyUsage());
};

function updatePowerSaving() {
  $('#power-saving').text("Power saving mode is " + thermostat.isPowerSaving());
}
});
