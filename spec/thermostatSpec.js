describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
    DEFAULT_TEMP = 20;
    MIN_TEMP = 10;
    MAX_PSM_TEMP = 25;
    MAX_PSM_OFF_TEMP = 32;
  });

  it('has a default temp of 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(DEFAULT_TEMP);
  });

  it('can increase the temperature by 1 degree', function() {
    thermostat.increaseTemp();
    expect(thermostat.temperature()).toEqual(DEFAULT_TEMP + 1);
  });

  it('can decrease the temperature by 1 degree', function() {
    thermostat.decreaseTemp();
    expect(thermostat.temperature()).toEqual(DEFAULT_TEMP - 1);
  });

  it('has a minimum temp of 10 degrees', function() {
    while(thermostat.temperature() > MIN_TEMP) {
      thermostat.decreaseTemp();
    }
    thermostat.decreaseTemp();
    expect(thermostat.temperature()).toEqual(MIN_TEMP);
  });

  it('can be reset to 20', function() {
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(DEFAULT_TEMP);
  });

  describe('power saving mode', function() {
    it('starts with power saving mode switched on', function() {
      expect(thermostat._powerSaving).toBeTruthy();
    });
    it('can be switched off', function() {
      thermostat.switchPowerSaving();
      expect(thermostat._powerSaving).toBeFalsy();
    });
    it('restricts the temp to a max of 25', function() {
      while(thermostat.temperature() < MAX_PSM_TEMP) {
        thermostat.increaseTemp();
      }
      thermostat.increaseTemp()
      expect(thermostat.temperature()).toEqual(MAX_PSM_TEMP);
    });
  });

  describe('power saving mode off', function() {
    it('restricts the temp to a max of 32', function() {
      thermostat.switchPowerSaving();
      while(thermostat.temperature() < MAX_PSM_OFF_TEMP) {
        thermostat.increaseTemp();
      }
      thermostat.increaseTemp();
      expect(thermostat.temperature()).toEqual(MAX_PSM_OFF_TEMP);
    });
    it('resets to 25 if switched on at a higher temp', function() {
      thermostat.switchPowerSaving();
      while(thermostat.temperature() < MAX_PSM_OFF_TEMP) {
        thermostat.increaseTemp();
      }
      thermostat.switchPowerSaving();
      expect(thermostat.temperature()).toEqual(MAX_PSM_TEMP);
    });
  });

  describe('energy usage level', function() {
    it('outputs low-usage when temp < 18', function() {
      while(thermostat.temperature() > 17) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });
    it('outputs medium-usage when temp < 25', function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });
    it('outputs high-usage when temp is at 25 or higher', function() {
      spyOn(thermostat, 'temperature').and.returnValue(25);
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});
