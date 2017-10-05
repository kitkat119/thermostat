# Thermostat

A single page thermostat app where you can set the temperature and see whether it is using low, medium or high power. You can switch power saving mode on and off and even check the current temperature in any city in the world!

- Default temperature is 20 degrees.
- Minimum temperature is 10 degrees.
- Max temperature in power saving mode is 25 degrees, otherwise it is 32 degrees.
- The reset button returns the temperature to 20 degrees.
- < 18 is low-usage, <25 is medium and anything else is high.

### Tech
- Javascript
- Jasmine
- jQuery
- OpenWeatherMap API

#### To run:

``` sh
git clone https://github.com/kitkat119/thermostat
cd thermostat
open index.html
```

#### To run the tests:
``` sh
open SpecRunner.html
```

#### You should see:

![alt tag](https://user-images.githubusercontent.com/26767598/31226307-8b67a4f8-a9cd-11e7-8415-e4eedbbd37c0.png)
