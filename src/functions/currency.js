import { getExchangeRate, getCurrencyOptions } from '../services/currency';
import { formatValue } from '../helpers/currency';
import { setInlineKeyboard } from '../helpers/options';
import { CALLBACK_TYPE } from '../helpers/constants';

export const getCurrencyMessage = data => {
  const { code, codein, bid, amount = '1' } = data;
  const resultAmount = Number(bid) * Number(amount.replace(',', '.'));

  const [from, to] = [
    `${code} ${formatValue(amount)}`,
    `${codein} ${formatValue(resultAmount)}`,
  ];

  return `${from} = ${to}`;
};

export const getCurrencyData = async (bot, chatId, match) => {
  const [currency = 'USD', amount = '1'] = match[1].split(' ');

  try {
    const { data } = await getExchangeRate(currency);

    if (!data.length) {
      bot.sendMessage(id, 'Verifique o código da moeda e tente novamente.');
      return;
    }

    bot.sendMessage(chatId, getCurrencyMessage({ ...data[0], amount }));
  } catch (_) {
    bot.sendMessage(chatId, 'Erro na requisição.');
  }
};

export const getCurrencyList = async (bot, chatId) => {
  try {
    const { data } = await getCurrencyOptions();

    bot.sendMessage(
      chatId,
      'Lista das moedas disponíveis:',
      setInlineKeyboard(
        Object.keys(data).map(key => {
          const { code, codein, name, bid } = data[key];

          return {
            text: `${code} (${name})`,
            callback_data: JSON.stringify({
              bid,
              code,
              codein,
              type: CALLBACK_TYPE.CURRENCY,
            }),
          };
        })
      )
    );
  } catch (_) {
    bot.sendMessage(chatId, 'Erro na requisição.');
  }
};
