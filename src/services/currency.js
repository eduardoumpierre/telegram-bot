import axios from 'axios';

const CURRENCY_URL = 'http://economia.awesomeapi.com.br';

export const getExchangeRate = async (currency = 'USD') =>
  axios.get(`${CURRENCY_URL}/${currency}-BRL`);

export const getCurrencyOptions = async () => axios.get(`${CURRENCY_URL}/all`);
