import axios from 'axios';

const API_URL = 'http://api.weatherstack.com';

export const getCurrentWeather = city =>
  axios.get(`${API_URL}/current`, {
    params: {
      units: 'm',
      query: encodeURI(city),
      access_key: process.env.WEATHERSTACK_API_KEY,
    },
  });
