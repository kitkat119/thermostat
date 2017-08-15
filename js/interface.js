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


function updateTemp() {
  $('#temp').text(thermostat.temperature());
};
});
