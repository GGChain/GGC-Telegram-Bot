exports.run = (bot, msg, chatId,args) => {
  if(args === 'x'){
    bot.sendMessage(chatId, '@'+msg.from.username+' Lets talk in private so no one can see us 👀');
    bot.sendMessage(msg.from.id, "Hey "+msg.from.first_name+", I hear you want to register", {
    "reply_markup": {
        "keyboard": [["New Account", "Account Info"],   ["Go Back"]]
        }
    });
  }else{
    bot.sendMessage(msg.from.id, "Hey "+msg.from.first_name+", I hear you want to register", {
    "reply_markup": {
        "keyboard": [["New Account", "Account Info"],   ["Go Back"]]
        }
    });
  }

}
