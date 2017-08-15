'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_PSM_TEMP = 25;
  this.MAX_PSM_OFF_TEMP = 32;
  this.LOW_ENERGY_TEMP = 17;
  this._temperature = 20;
  this._powerSaving = true;
  this._maxTemp = function() {
    if(this._powerSaving) { return this.MAX_PSM_TEMP; }
    return this.MAX_PSM_OFF_TEMP;
  };
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemp = function() {
  if(this._temperature < this._maxTemp()) { this._temperature += 1; }
};

Thermostat.prototype.decreaseTemp = function() {
  if(this._temperature > this.MIN_TEMP) {  this._temperature -= 1; }
};

Thermostat.prototype.isPowerSaving = function() {
  return this._powerSaving ? "on" : "off";
};

Thermostat.prototype.switchPowerSaving = function() {
  this._powerSaving = !this._powerSaving;
  if(this._temperature > this._maxTemp()) { this.resetPowerSavingTemp(); }
};

Thermostat.prototype.resetPowerSavingTemp = function() {
  this._temperature = this.MAX_PSM_TEMP;
};

Thermostat.prototype.reset = function() {
  this._temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if(this.temperature() <= this.LOW_ENERGY_TEMP) { return "low-usage"; }
  else if(this.temperature() < this.MAX_PSM_TEMP) { return "medium-usage"; }
  return "high-usage";
};
