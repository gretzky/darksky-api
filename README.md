# darksky-api

Wrapper around the [Dark Sky API](https://darksky.net/dev/docs).

## Usage

```bash
yarn add @gretzky/darksky-api
// or
npm install --save @gretzky/darksky-api
```

### Methods

This is a single method wrapper around the API where you pass in the appropriate params. The only required keys are `key` (your Dark Sky API key), `latitude`, and `longitude`, and Dark Sky will return the current forecast for the location provided. You can pass a UNIX epoch time string to the `time` param to get the forecast for a specific time at a given location.

See the [API docs](https://darksky.net/dev/docs) for request params.

```ts
import darkskyApi from "darksky-api";

const key = "yoursecretkey";

// get the latest forecast for a given latitude/longitude
const currentForecast = darkskyApi.getForecast({
  key,
  latitude: 43.65806,
  longitude: -70.24417,
  params: {
    exclude: ["minutely", "daily", "hourly"], // returns 'currently', 'alerts', 'flags'
    units: "ca",
  },
});

// or, get the forecast for a given time at a given latitude/longitude
const tomorrowAfternoonForecast = darkskyApi.getForecast({
  key,
  latitude,
  longitude,
  time: 1599053400, // UNIX epoch timestamp. Date object may work
});
```
