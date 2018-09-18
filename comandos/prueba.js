exports.run = (bot, msg, chatId) => {
  console.log(msg.from.id);

  try {
    bot.getChatMember(chatId, 624193583)
    console.log('Bien');
  } catch (e) {
    console.log('Mal');
  }


}
