import Axios from 'axios';

const API_URL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_API_KEY}&units=m`;

export const getCurrentWeather = city =>
  Axios.get(API_URL, { params: { query: encodeURI(city) } });
