import { getSubredditGallery } from '../services/media';
import { CALLBACK_TYPE } from '../helpers/constants';
import { getCurrencyMessage } from './currency';

/**
 * Returns the image list
 * @param {Object} bot - Bot instance
 * @param {Object} request - inline_query event
 */
export const getInlineResult = async (bot, request) => {
  const { id, query } = request;

  if (query) {
    try {
      const response = await getSubredditGallery(query);
      const slicedResponse = response.sort(() => 0.5 - Math.random()).slice(0, 20);

      bot.answerInlineQuery(id, slicedResponse);
    } catch (e) {
      console.log('Error', e);
    }
  }
};

/**
 * Returns the response based on data type
 * @param {Object} bot - Bot instance
 * @param {Object} data - callback_query event
 */
export const getCallbackResult = (bot, { id, data }) => {
  const parsedData = JSON.parse(data);

  switch (parsedData.type) {
    case CALLBACK_TYPE.CURRENCY:
      bot.answerCallbackQuery(id, { text: getCurrencyMessage(parsedData) });
      break;
    default:
      bot.answerCallbackQuery(id, 'Comando não identificado, tente novamente.');
      break;
  }
};
