async function getWeather() {
  const city = document.getElementById("city-input").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const apiKey = "f4a409f83e45288c637db2df108e744a"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temp").textContent = data.main.temp;
    document.getElementById("desc").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("wind").textContent = data.wind.speed;
  } catch (error) {
    alert(error.message);
  }
}
