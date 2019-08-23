import { getGlobalQuote } from '../services/Alphavantage';
import { setInlineKeyboard } from '../helpers/options';

const getChangeValue = (value, showIcon = false) => {
  const isNegative = value.includes('-');
  const response = isNegative ? value : `+${value}`;

  if (!showIcon) {
    return response;
  }

  const icon = isNegative ? '\u2B07\uFE0F' : '\u2B06\uFE0F';

  return `${icon} ${response}`;
};

const formatResponse = stock => {
  const name = stock['01. symbol'].split('.')[0];
  const price = stock['05. price'];
  const change = getChangeValue(parseFloat(stock['09. change']).toFixed(2).replace('.',','), true);
  const changePercent = getChangeValue(stock['10. change percent']);

  const formatedPrice = parseFloat(price).toFixed(2).replace('.',',');
  const formatedChangePercent = parseFloat(changePercent).toFixed(2).replace('.',',');

  return {
    response: `${name}\r\n${formatedPrice} BRL\r\n${change} (${formatedChangePercent}%)`,
    options: setInlineKeyboard([
      {
        text: 'Ver mais informações',
        url: `https://app.tororadar.com.br/acoes/${name}/`,
      },
    ]),
  };
};

export const getStockData = async (bot, msg, match) => {
  const {
    chat: { id },
  } = msg;

  try {
    const { data } = await getGlobalQuote(match[1]);

    if (data.hasOwnProperty('Error Message')) {
      bot.sendMessage(
        id,
        'Erro na requisição. Verifique o nome da ação e tente novamente.'
      );
      return;
    }

    if (data.hasOwnProperty('Note')) {
      bot.sendMessage(
        id,
        'Limite de requisições atingido. Tente novamente em 1 minuto.'
      );
      return;
    }

    const stock = data['Global Quote'];
    const { response, options } = formatResponse(stock);

    bot.sendMessage(id, response, options);
  } catch (e) {
    bot.sendMessage(id, 'Erro na requisição.');
  }
};
