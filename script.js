alert("Hello, world!");
function tempValue(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature-value");
  let description = response.data.condition.description;
  let descriptionElement = document.querySelector("#weather-description");

  temperatureElement.innerHTML = temperature;
  descriptionElement.innerHTML = description;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let city = searchInput.value;

  cityElement.innerHTML = city;

  let apiKey = "33806ab29f4d2d0o37af2959efdta349";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;

  axios.get(apiUrl).then(tempValue);
}

function formattedDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let weekDay = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${days[date.getDay()]} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

let dayAndTime = document.querySelector("#day-time");
let currentDate = new Date();

dayAndTime.innerHTML = formattedDate(currentDate);
