
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

## **Deployment Instructions**

### **Server Requirements**
To deploy this application, you need three Linux-based servers:
1. **Server 1**: Web Server 1 - Hosts the application.
2. **Server 2**: Web Server 2 - Hosts the application for redundancy.
3. **Server 3**: Load Balancer - Distributes traffic between the two web servers.

### **Deployment Steps**

#### **1. Access the Servers**
Use SSH to connect to each server:
```bash
ssh ubuntu@<IP_ADDRESS>
```

#### **2. Update and Install Dependencies**
On all servers:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nginx -y
```

#### **3. Deploy the Application**
1. On both web servers:
   - Create a directory for the app:
     ```bash
     sudo mkdir -p /var/www/weather-app
     ```
   - Transfer the project files (`index.html`, `style.css`, `script.js`) to the directory.
   - Set up NGINX to serve the app:
     ```bash
     sudo vi /etc/nginx/sites-available/weather-app
     ```
     Add:
     ```nginx
     server {
         listen 80;
         root /var/www/weather-app;
         index index.html;

         location / {
             try_files $uri $uri/ =404;
         }
     }
     ```
   - Enable the site and restart NGINX:
     ```bash
     sudo ln -s /etc/nginx/sites-available/weather-app /etc/nginx/sites-enabled/
     sudo nginx -t
     sudo service nginx restart
     ```

2. Verify deployment by accessing the web server IPs in a browser.

#### **4. Set Up the Load Balancer**
1. On the load balancer server:
   - Configure NGINX for load balancing:
     ```bash
     sudo vi /etc/nginx/sites-available/load-balancer
     ```
     Add:
     ```nginx
     upstream weather_app {
         server <web-01-ip>;
         server <web-02-ip>;
     }

     server {
         listen 80;

         location / {
             proxy_pass http://weather_app;
             proxy_set_header Host $host;
             proxy_set_header X-Real-IP $remote_addr;
             proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         }
     }
     ```
   - Enable the configuration:
     ```bash
     sudo ln -s /etc/nginx/sites-available/load-balancer /etc/nginx/sites-enabled/
     sudo nginx -t
      sudo service nginx restart
     ```

2. Verify load balancing by accessing the load balancer IP in a browser.

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
[View Live Application](http://23.22.70.36)

### **Preview**
![Weather App Screenshot](https://github.com/user-attachments/assets/63b918fd-48bb-462c-b374-4d30dffca292)

---

## **Challenge**

I encountered no challenge as this was not my first time working on something like this.

---

## **API Information**

- **API Provider**: [OpenWeatherMap](https://openweathermap.org/)
- **Endpoints Used**:
  - Current Weather: `https://api.openweathermap.org/data/2.5/weather`
  - Hourly Forecast: `https://api.openweathermap.org/data/2.5/forecast`

---

## **Acknowledgments**

- [OpenWeatherMap API](https://openweathermap.org/) for providing reliable weather data.
- Design inspiration from modern UI practices.
