import { getResponse } from './dialogflow';

/**
 * Sends the dialogflow message according to user input
 * @param {Object} bot - Bot instance
 * @param {Object} msg - Message object
 * @param {Array} match - Message string match
 */
export const sendBotResponse = async (bot, msg, match) => {
  const {
    chat: { id },
  } = msg;

  const response = await getResponse(match[1]);

  bot.sendMessage(id, response);
};

/**
 * Sends a message mentioning all the administrators
 * @param {Object} bot - Bot instance
 * @param {Object} msg - Message object
 * @param {Array} match - Message string match
 */
export const sendMessageToAdmins = async (bot, msg, match) => {
  const { id } = msg.chat;

  try {
    const admins = await bot.getChatAdministrators(id);

    const mentions = admins
      .filter(({ user }) => !user.is_bot)
      .reduce((prev, { user }) => `${prev} <a href="tg://user?id=${user.id}">${user.first_name}</a>`, '');
  
    const message = `${mentions} ${match[1]}`;    

    bot.sendMessage(id, message, {
      parse_mode: 'HTML',
    });
  } catch (e) {
    bot.sendMessage(id, 'O comando só funciona em grupos.');
  }
};
