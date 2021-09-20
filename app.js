const { default: axios } = require("axios");
const readlineSync = require("readline-sync");
const cityName = readlineSync.question("Enter the city name: ");

const getCityWeather = (cityName) => {
  //api call
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=8f0bf6354e5c805f8dc8f61828c1ec3d
    `
    )
    .then((response) => {
      console.log("City: " + cityName);
      console.log("Temp: " + response.data.main.temp);
      console.log("Feels Like: " + response.data.main.feels_like);
      console.log("Humidity: " + response.data.main.humidity);
    })
    .catch((err) => {
      console.log(err);
    });
};

getCityWeather(cityName);
