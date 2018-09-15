exports.run = (bot, msg, chatId,args) => {
  var reg = localStorage.getItem('reg');
  var discord = msg.text.split(' ')[1];


    if (checkUser(msg.from.username) === -1) {//if the user is not in our BBD
      bot.sendMessage(msg.from.id,'You need to create an account first.');
    }else {
      var pos = checkUser(msg.from.username);
      reg = JSON.parse(reg);
      if (reg[pos].Discord === '') {
        reg[pos].Discord = discord;
        localStorage.setItem('reg',JSON.stringify(reg));
        bot.sendMessage(msg.from.id,'You have created your account successfully.')
      }else {
          bot.sendMessage(msg.from.id,'You have already a Discord username.')
      }
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
