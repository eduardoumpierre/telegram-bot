import Axios from 'axios';

const API_URL = `http://api-cdn.apixu.com/v1/forecast.json?key=${process.env.APIXU_API_KEY}`;

export const getCurrentWeather = (city, days = 1) =>
  Axios.get(`${API_URL}&q=${encodeURI(city)}&days=${days}`);
