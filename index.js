import TelegramBot from 'node-telegram-bot-api';
import { getBotResponse } from './src/functions/Message';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/^\/q (.*)/i, (msg, match) => getBotResponse(bot, msg, match));
