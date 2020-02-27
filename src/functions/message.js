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
      .reduce((prev, { user }) => `${prev} [${user.first_name}](tg://user?id=${user.id})`, '');

    const message = `${mentions} ${match[1]}`;

    bot.sendMessage(id, message, {
      parse_mode: 'MarkdownV2',
    });
  } catch (e) {
    bot.sendMessage(id, 'O comando só funciona em grupos.');
  }
};
