import TelegramBot from 'node-telegram-bot-api';
import { sendBotResponse, sendMessageToAdmins } from './src/functions/message';
import { getInlineResult, getCallbackResult } from './src/functions/callback';
import { getStockData } from './src/functions/stock';
import { getWeatherForecast } from './src/functions/weather';
import { getCurrencyData, getCurrencyList } from './src/functions/currency';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// Currency
bot.onText(/^\/c$/i, msg => getCurrencyList(bot, msg.chat.id));
bot.onText(/^\/c (.*)/i, (msg, match) => getCurrencyData(bot, msg.chat.id, match));

// Question
bot.onText(/^\/q (.*)/i, (msg, match) => sendBotResponse(bot, msg, match));

// Stock
bot.onText(/^\/s (.*)/i, (msg, match) => getStockData(bot, msg, match));

// Weather
bot.onText(/^\/w( (.*))?/i, (msg, match) => getWeatherForecast(bot, msg, match));

// All
bot.onText(/^\/all (.*)/i, (msg, match) => sendMessageToAdmins(bot, msg, match));

// Callback query
bot.on('inline_query', data => getInlineResult(bot, data));
bot.on('callback_query', data => getCallbackResult(bot, data));

// Error debug
bot.on('polling_error', err => console.log(err));
