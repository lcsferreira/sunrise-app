# SunSync App

![SunSync Logo](./public/favicon.ico)

## Deployed Version

The app is deployed and can be accessed at [SunSync App](https://lcsferreira.github.io/sunsync-app/).

## Overview

SunSync is a React-based web application that provides information about sunrise, sunset, and other relevant details based on the user's selected location and date. The app utilizes the SunriseSunset API to fetch accurate sunrise and sunset data. Users can choose a specific date, country, state, and city to get personalized information about the sun's position and daylight duration.

## Features

- **Location Selection**: Users can choose their location by selecting a country, state, and city from dropdown menus.
- **Date Selection**: Users can pick a specific date to get sunrise and sunset information for that day.
- **Dynamic Backgrounds**: The app dynamically changes the background image based on the time of day (sunrise, midday, sunset).

## Technologies Used

- **React**: The app is built using the React library for a dynamic and responsive user interface.
- **axios**: Axios is used for making HTTP requests to the SunriseSunset API.
- **react-responsive-carousel**: The carousel library is used to display information about different times of the day in a visually appealing manner.

## Project Structure

- **App.js**: The main component that handles the user interface, form submissions, and API requests.
- **ResultCard.js**: A separate component responsible for displaying the results in a carousel format.

## How to Run

1. Clone the repository: `git clone https://github.com/username/SunSync.git`
2. Install dependencies: `npm install`
3. Run the app: `npm start`
4. Open the app in a web browser: `http://localhost:3000`

## Usage

1. Select a date.
2. Choose your country, state, and city.
3. Click the "Submit" button to retrieve sunrise and sunset information.
4. View the results in a visually appealing carousel format.

## Author

- **Lucas Ferreira**
  - LinkedIn: [Lucas Ferreira LinkedIn](https://www.linkedin.com/in/ls-oferreira/)
  - GitHub: [Lucas Ferreira GitHub](https://github.com/ls-oferreira)

## Credits

- **API:** [SunriseSunset](https://sunrisesunset.io/api/)
- **ICONS:** [SVGRepo](https://www.svgrepo.com/collection/weather-forecast-3/)

## Acknowledgments

Special thanks to the SunriseSunset API for providing accurate and reliable sunrise and sunset data.
