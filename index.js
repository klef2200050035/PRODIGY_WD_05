var inputValue = document.querySelector('#cityinput');
var btn = document.querySelector('#submit');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

var apiKey = "885ac2e70b8cb48f0b833146667ba1b3";

function converttion(val) {
  return (val - 273).toFixed(3);
}

btn.addEventListener('click', async function() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=' + apiKey);
    const data = await response.json();

    const cityName = data['name'];
    const descriptionVal = data['weather'][0]['description'];
    const temperature = data['main']['temp'];
    const windspeed = data['wind']['speed'];

    city.innerHTML = `Weather of <span>${cityName}</span>`;
    temp.innerHTML = `Temperature: <span>${converttion(temperature)} °C</span>`;
    description.innerHTML = `Sky Condition: <span>${descriptionVal}</span>`;
    wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
  } catch (err) {
    alert('You entered the wrong city name');
  }
});
