import Axios from 'axios';

export const getGlobalQuote = async symbol =>
  Axios.get(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}.SA&apikey=${
      process.env.ALPHAVANTAGE_API_KEY
    }`
  );
