A draft, only for the purpose of TA study.

You can manually set the current geolocation by editing Line 4, geoMock.js

eg.: `latitude: 31.230416, longitude: 121.473701` (Shanghai, Huangpu District)

*It has to be in Shanghai (or the city you are supposed to be in yesterday)*

Run (Node.js environment is required):
```
npm i testcafe
npm i tesseract.js
testcafe chrome:headless geoMock.js --skip-js-errors
```
