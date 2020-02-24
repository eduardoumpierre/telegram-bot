import axios from 'axios';

const API_URL = 'http://economia.awesomeapi.com.br';

export const getExchangeRate = async (currency = 'USD') => axios.get(`${API_URL}/${currency}-BRL`);
export const getCurrencyOptions = async () => axios.get(`${API_URL}/all`);
