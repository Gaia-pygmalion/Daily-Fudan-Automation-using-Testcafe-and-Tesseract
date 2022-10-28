NOT FULLY TESTED, JUST FYI

A draft, only for the purpose of TA study.

You can manually set the current geolocation by editing Line 4, main.js

eg. `latitude: 31.230416, longitude: 121.473701` (Shanghai, Huangpu District)

`latitude: 31.301044, longitude: 121.500455` (Shanghai, Yangpu District) (The university)

[Address to Coordinates Tool](https://www.gps-coordinates.net/)

*It has to be in Shanghai (or the city you are supposed to be in yesterday)*

Account info is replaced with placeholders.

Run (Node.js environment, chrome/edge/firefox are required):
```
npm i testcafe
npm i tesseract.js
testcafe chrome:headless main.js --skip-js-errors
```

Reference:

[Tesseract Doc](https://github.com/naptha/tesseract.js/blob/master/docs/api.md)

[Testcafe Doc](https://testcafe.io/documentation/402632/api)

10/28/2022
