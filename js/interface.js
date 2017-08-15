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

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  updateWeather(city);
});

function updateTemp() {
  $('#temp').text(thermostat.temperature());
  $('#temp').attr('class', thermostat.energyUsage());
};

function updatePowerSaving() {
  $('#power-saving').text("Power saving mode is " + thermostat.isPowerSaving());
}
function updateWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=1165259d6e26ca0f8e03387e1f2da5ac';
  var units = '&units=metric';
    $.get(url + token + units, function(response) {
      $('#current-temp').text(Math.round(response.main.temp));
      $('#city').text(response.name);
     });
  }
});
