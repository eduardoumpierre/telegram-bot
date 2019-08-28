import { getCurrentWeather } from '../services/Weather';
import { setInlineKeyboard } from '../helpers/options';
import { getCondition } from '../services/Weather/conditions';

export const getWeatherForecast = async (bot, msg, match) => {
  const {
    chat: { id },
  } = msg;

  const city = match[1] || 'Porto Alegre';

  try {
    const result = await getCurrentWeather(city);

    const {
      data: {
        location: { name },
        current: {
          temp_c,
          feelslike_c,
          is_day,
          condition: { code },
        },
        forecast: { forecastday },
      },
    } = result;

    const {
      day: { maxtemp_c, mintemp_c, totalprecip_mm },
    } = forecastday[0];

    const condition = `${name} - ${getCondition(code, is_day)}`;
    const temperature = `🌡️ ${temp_c}ºC (ST ${feelslike_c}ºC)`;
    const variation = `🔻 ${mintemp_c}ºC 🔺 ${maxtemp_c}ºC`;
    const rain = `☂️ ${totalprecip_mm}mm`;

    const response = `${condition}\r\n${temperature}\r\n${variation}\r\n${rain}`;

    const options = setInlineKeyboard([
      {
        text: 'Ver mais',
        url: `https://www.google.com/search?q=temperatura%20${encodeURI(city)}`,
      },
    ]);

    bot.sendMessage(id, response, options);
  } catch (e) {
    bot.sendMessage(id, 'Aconteceu um erro, tente novamente.');
  }
};
