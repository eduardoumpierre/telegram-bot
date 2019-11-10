import { getCurrentWeather } from '../services/Weather';
import { setInlineKeyboard } from '../helpers/options';

export const getWeatherForecast = async (bot, msg, match) => {
  const {
    chat: { id },
  } = msg;

  const city = match[1] || 'Porto Alegre';

  try {
    const { data } = await getCurrentWeather(city);

    const {
      location: { name },
      current: {
        precip,
        feelslike,
        temperature,
      }
    } = data;

    const response = [
      name,
      `🌡️ ${temperature}ºC (ST ${feelslike}ºC)`,
      `☂️ ${precip}mm`
    ];

    const options = setInlineKeyboard([
      {
        text: 'Ver mais',
        url: `https://www.google.com/search?q=temperatura%20${encodeURI(city)}`,
      },
    ]);

    bot.sendMessage(id, response.join('\r\n'), options);
  } catch (e) {
    bot.sendMessage(id, 'Aconteceu um erro, tente novamente.');
  }
};
