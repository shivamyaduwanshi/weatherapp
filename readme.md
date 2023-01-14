# Node Weather App

This is a Node.js application that allows you to check the current and forecast weather of a specific place.

## Installation

- Clone the repository
  git clone https://github.com/binaryprotagonist/weatherapp.git

- Install the dependencies
  npm install

- Here on the development mode using nodemon to also install the nodemon globally
  npm install -g nodemon

## Running the server

- To run the server, use the following command
- npm run dev
- The application will be running on `http://localhost:8000`

## Usage

- Go to the home page by visiting `http://localhost:8000`
- Choose between current or forecast weather type
- Enter the place name for which you want to check the weather
- And then click the search button
- Got the desireable record

## API usage

- You can also use the following APIs to get the current and forecast weather for a specific place.
  - `http://localhost:8000/api/weather/current?place=indore`
  - `http://localhost:8000/api/weather/forecast?place=indore`
