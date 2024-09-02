const setupWeather = async () => {
  const location = document.querySelector('#location');
  const date = document.querySelector('#date');
  const time = document.querySelector('#time');
  const temperature = document.querySelector('#temperature');
  const feel = document.querySelector('#feel');
  const weatherIcon = document.querySelector('#weather-icon');
  const weatherLabel = document.querySelector('#weather-label');

  const humidity = document.querySelector('#humidity');
  const pressure = document.querySelector('#pressure');
  const pressureLabel = document.querySelector('#pressure-label');
  const visibility = document.querySelector('#visibility');
  const visibilityLabel = document.querySelector('#visibility-label');
  const sunrise = document.querySelector('#sunrise');
  const sunriseDelta = document.querySelector('#sunrise-delta');
  const sunset = document.querySelector('#sunset');
  const sunsetDelta = document.querySelector('#sunset-delta');
  const wind = document.querySelector('#wind');
  const windDirection = document.querySelector('#wind-direction');

  const data = await fetch('src/scripts/api/data.json').then((res) => res.json());

  location.textContent = data.location;
  date.textContent = `${data.date_current.day_of_the_week}, ${data.date_current.date}`;
  time.textContent = `${data.date_current.hours}:${data.date_current.minutes}`;
  temperature.textContent = `${data.temperature.real}°`;
  feel.textContent = `Ощущается как ${data.temperature.feel}°`;
  weatherIcon.src = data.weather.link;
  weatherLabel.textContent = data.weather.label;

  humidity.textContent = `${data.humidity} %`;
  pressure.textContent = data.pressure.value;
  pressureLabel.textContent = data.pressure.label;
  visibility.textContent = `${data.visibility.value} КМ`;
  visibilityLabel.textContent = data.visibility.label;
  wind.textContent = `${data.wind.value} м/с`;
  windDirection.textContent = data.wind.direction;

  sunrise.textContent = `${data.sunrise.hours}:${data.sunrise.minutes}`;
  sunriseDelta.textContent = `${data.sunrise.delta.direction}: ${data.sunrise.delta.hours}:${data.sunrise.delta.minutes}`;
  sunset.textContent = `${data.sunset.hours}:${data.sunset.minutes}`;
  sunsetDelta.textContent = `${data.sunset.delta.direction}: ${data.sunset.delta.hours}:${data.sunset.delta.minutes}`;
};

export default setupWeather;
