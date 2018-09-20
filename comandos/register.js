exports.run = (bot, msg, chatId,args) => {

  if(args === 'x'){
    bot.sendMessage(chatId, '@'+msg.from.username+' Lets talk in private so no one can see us 👀');
    if (localStorage.getItem('launch') === 0 || localStorage.getItem('launch') === '0'  ) {
      bot.sendMessage(msg.from.id, '🚀Launch Telegram Open registrations:\nFriday 21 September 2018 | 17:00 CMT+1\n\n📝1 Resgister = 1 GGCoin ($GGC)\n🎉First 100 Resgistrations 5 $GGC\n🛄 Max: 5000 $GGC')
    }else {
      bot.sendMessage(msg.from.id, "Hey "+msg.from.first_name+", I hear you want to register", {
      "reply_markup": {
          "keyboard": [["New Account", "Account Info"],   ["Go Back"]]
          }
      });
    }

  }else{
    if (localStorage.getItem('launch') === 0 || localStorage.getItem('launch') === '0' ) {
      bot.sendMessage(msg.from.id, '🚀Launch Telegram Open registrations:\nFriday 21 September 2018 | 17:00 CMT+1\n\n📝1 Resgister = 1 GGCoin ($GGC)\n🎉First 100 Resgistrations 5 $GGC\n🛄 Max: 5000 $GGC')
    }else {
      bot.sendMessage(msg.from.id, "Hey "+msg.from.first_name+", I hear you want to register", {
      "reply_markup": {
          "keyboard": [["New Account", "Account Info"],   ["Go Back"]]
          }
      });
    }
  }

}
