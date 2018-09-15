exports.run = (bot, msg, chatId) => {
      bot.sendMessage(msg.from.id, "Hello  " + msg.from.first_name);
      bot.sendPhoto(chatId,'./logo.png');  
}
