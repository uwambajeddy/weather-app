
# **Weather App**

Weather App is a simple and user-friendly weather application that allows users to check current weather conditions and view an hourly forecast for their chosen city. The app fetches real-time weather data from the OpenWeatherMap API.

---

## **Features**

- **Current Weather**: Displays the current temperature, weather condition, and an icon representing the weather.
- **Hourly Forecast**: Provides an hourly forecast for the next 24 hours (in 3-hour intervals).
- **Intuitive Interface**: Clean and modern design with responsive styling for a seamless user experience.

---

## **Technologies Used**

- **HTML**: For structuring the application layout.
- **CSS**: For styling and enhancing the user interface.
- **JavaScript**: For implementing application logic and API integration.
- **OpenWeatherMap API**: For fetching weather data.

---

## **Installation and Usage**

### **1. Clone the Repository**
```bash
git clone https://github.com/uwambajeddy/weather-app.git
cd weather-app
```

### **2. Get an API Key**
Sign up at [OpenWeatherMap](https://openweathermap.org/) and get your free API key.

### **3. Add Your API Key**
- Open `script.js` in a text editor.
- Replace the placeholder `apiKey` in the JavaScript code with your actual API key.

```javascript
const apiKey = 'your_api_key_here';
```

### **4. Run Locally**
Simply open the `index.html` file in any modern web browser.

---

## **Project Structure**

```
weather-app/
├── index.html       # HTML structure of the application
├── style.css        # Styling of the app
├── script.js        # JavaScript logic and API integration
└── README.md        # Documentation
```

---

## **How It Works**

1. **Enter City**: Type a city name in the input field.
2. **Get Weather**: Click the "Get Weather" button to fetch the current weather and hourly forecast.
3. **View Results**:
   - The current weather is displayed with temperature, weather conditions, and an icon.
   - Hourly forecasts are displayed below, including time, temperature, and weather icons.

---

## **Demo**

### **Live Demo**
[View Live Application](https://www.leftie.tech)

### **Preview**
![Weather App Screenshot](#) (Replace `#` with a screenshot link)

---

## **API Information**

- **API Provider**: [OpenWeatherMap](https://openweathermap.org/)
- **Endpoints Used**:
  - Current Weather: `https://api.openweathermap.org/data/2.5/weather`
  - Hourly Forecast: `https://api.openweathermap.org/data/2.5/forecast`

---

## **Future Enhancements**

- Add user location detection to fetch weather automatically.
- Implement additional features like daily forecasts, weather alerts, and air quality indices.
- Introduce localization for different languages.
- Optimize performance with caching mechanisms.

---

## **Contributing**

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- [OpenWeatherMap API](https://openweathermap.org/) for providing reliable weather data.
- Design inspiration from modern UI practices.
