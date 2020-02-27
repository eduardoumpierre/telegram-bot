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
  const { id, type } = msg.chat;

  if (type !== 'group') {
    bot.sendMessage(id, 'O comando só funciona em grupos.');
  }

  const admins = await bot.getChatAdministrators(id);
  const mentions = admins.reduce(
    (prev, { user }) => `${prev} [${user.first_name}](tg://user?id=${user.id})`,
    ''
  );

  const message = `${mentions} ${match[1]}`;

  bot.sendMessage(id, message, {
    parse_mode: 'MarkdownV2',
  });
};
