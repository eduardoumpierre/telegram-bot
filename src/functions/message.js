import { getResponse } from './dialogflow';

export const getBotResponse = async (bot, msg, match) => {
  const {
    chat: { id },
  } = msg;

  const response = await getResponse(match[1]);

  bot.sendMessage(id, response);
};
