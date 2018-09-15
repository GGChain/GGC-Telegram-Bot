exports.run = (bot, msg, chatId) => {
    bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
        "keyboard": [["Website", "Twitter"],   ["News", "Bitcointalk"], ["Register"]]
        }
    });
}
