import axios from 'axios';

const API_URL = 'https://www.alphavantage.co';

export const getGlobalQuote = async symbol =>
  axios.get(
    `${API_URL}/query?function=GLOBAL_QUOTE&symbol=${symbol}.SA&apikey=${process.env.ALPHAVANTAGE_API_KEY}`
  );
