export const setInlineKeyboard = options => ({
  reply_markup: JSON.stringify({
    inline_keyboard: options.reduce((prev, next) => [...prev, [next]], []),
  }),
});
