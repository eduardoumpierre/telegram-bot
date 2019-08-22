import TelegramBot from 'node-telegram-bot-api';
import { getBotResponse } from './src/functions/Message';
import { getInlineResult } from './src/functions/Inline';
import { getStockData } from './src/functions/Stock';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/^\/q (.*)/i, (msg, match) => getBotResponse(bot, msg, match));
bot.onText(/^\/s (.*)/i, (msg, match) => getStockData(bot, msg, match));

bot.on('inline_query', data => getInlineResult(bot, data));
