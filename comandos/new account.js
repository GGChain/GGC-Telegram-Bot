exports.run = (bot, msg, chatId,args) => {

  var reg = localStorage.getItem('reg');

  if (reg.length > 0) {//Not the first user
    if (checkUser(msg.from.username) === -1) {
       bot.sendMessage(msg.from.id, 'Ok, now you need to send me your email.\n Just do /email (your email)');
    }else {
       bot.sendMessage(msg.from.id, 'You have already an account.');
    }

  }else {//first user
    bot.sendMessage(msg.from.id, 'Ok, now you need to send me your email.\n Just do /email (your email)');
  }

  function checkUser(user) {
        var reg = localStorage.getItem('reg');
        var sol = -1;
        if (reg.length > 0 ) {
          reg = JSON.parse(reg);
          for (var i = 0; i < reg.length; i++) {
            if (reg[i].Username === user) {
              sol = i;
            }
          }
        }
        return sol;
      }//chek if the user is in the BBD
}
