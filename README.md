NOT FULLY TESTED, JUST FYI

🚧 🚧 🚧

A draft, only for the purpose of TA study.

You can manually set the current geolocation by editing Line 4, main.js

eg. `latitude: 31.230416, longitude: 121.473701` (Shanghai, Huangpu District)

`latitude: 31.301044, longitude: 121.500455` (Shanghai, Yangpu District) (The university)

[Address to Coordinates Tool](https://www.gps-coordinates.net/)

*It has to be in Shanghai (or the city you are supposed to be in yesterday)*

Set up your Account info by `$env:studentNo='...'; $env:studentPw='...' ` or editing config.js (but keep it local)

Run (Node.js environment, chrome is required):
```
npm i
npm run test
```

Reference:

[Tesseract Doc](https://github.com/naptha/tesseract.js/blob/master/docs/api.md)

[Testcafe Doc](https://testcafe.io/documentation/402632/api)

10/28/2022
