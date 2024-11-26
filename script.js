document.getElementById('search-button').addEventListener('click', getWeather);

const loader = document.getElementById('loader');

function showLoader() {
    loader.classList.remove('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}

async function getWeather() {
    const apiKey = 'your_api_key_here';

    const city = document.getElementById('city').value;

    if (!city.trim()) {
        alert('Please enter a city');
        return;
    }

    showLoader(); // Show loader before API calls

    try {
        const [currentWeather, forecast] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(res => res.json()),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`).then(res => res.json()),
        ]);

        displayCurrentWeather(currentWeather);
        displayHourlyForecast(forecast.list.slice(0, 8)); // Next 24 hours in 3-hour intervals
    } catch (error) {
        console.error(error);
        alert('Something went wrong. Please try again.');
    } finally {
        hideLoader(); // Hide loader after API calls
    }
}


function displayCurrentWeather(data) {
    const weatherIcon = document.getElementById('weather-icon');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    if (data.cod !== 200) {
        alert(data.message);
        return;
    }

    const { name, main, weather } = data;
    const tempCelsius = Math.round(main.temp - 273.15);

    weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    weatherIcon.alt = weather[0].description;
    cityName.textContent = name;
    temperature.textContent = `${tempCelsius}°C`;
    description.textContent = weather[0].description;
}

function displayHourlyForecast(forecast) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = ''; // Clear previous forecast

    forecast.forEach(item => {
        const date = new Date(item.dt * 1000);
        const tempCelsius = Math.round(item.main.temp - 273.15);

        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';

        forecastItem.innerHTML = `
            <p>${date.getHours()}:00</p>
            <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="Weather Icon">
            <p>${tempCelsius}°C</p>
        `;

        forecastContainer.appendChild(forecastItem);
    });
}
