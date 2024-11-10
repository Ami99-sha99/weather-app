async function getWeather() {
  const apiKey = '870c228b5emshb5f5ba0fc9f92fep110804jsn12edc3fca19a'; // Replace with your RapidAPI key
  const host = 'weatherapi-com.p.rapidapi.com';
  const location = document.getElementById("location-input").value;

  if (!location) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://${host}/current.json?q=${encodeURIComponent(location)}`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': host
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // Update UI with weather data
    document.getElementById("city").textContent = data.location.name;
    document.getElementById("temp").textContent = `${data.current.temp_c}°C`;
    document.getElementById("humidity").textContent = `${data.current.humidity}%`;
    document.getElementById("wind").textContent = `${data.current.wind_kph} km/h`;

  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Could not retrieve weather data. Please try again.");
  }
}
