
const submit = document.getElementById('submit');
submit.addEventListener('click', function(e) {
  // e.preventDefault();
  
  const city = document.getElementById('city').value;
  const apiKey = 'ac071e8a18b7a0be2d937752b84ed33c';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const condition = data.weather[0].description;
      const weatherData = document.getElementById('weather-data');
      weatherData.innerHTML = `Temperature: ${temperature}°C<br>Humidity: ${humidity}%<br>Condition: ${condition}`;
    })
    .catch(error => console.error(error));
});

const cityInput = document.getElementById('city');
cityInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    submit.click();
  }
});

window.onload = function() {
  document.getElementById("city").focus();
};


