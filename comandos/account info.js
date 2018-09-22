exports.run = (bot, msg, chatId,args) => {

  var reg = localStorage.getItem('reg');
  if (reg.length > 0) {
    reg = JSON.parse(reg);
    if(checkUser(msg.from.username) !=-1) {
      let pos = checkUser(msg.from.username);
      let day = reg[pos].Day;
      let month = reg[pos].Month;
      let year = reg[pos].Year;

      bot.sendMessage(msg.from.id,'Name:  '+reg[pos].Name + '\nUsername: '+reg[pos].Username + '\nEmail: '+reg[pos].Email + '\nDiscord: '+reg[pos].Discord +'\nDate of register: '+`${day}/${month}/${year}`+'\nBalance: '+ (reg[pos].Balance.toString()) +` GGC`);
    }else {
      bot.sendMessage(msg.from.id,'You are not in our Data Base, please, go and create an account.')
    }
  }else {
      bot.sendMessage(msg.from.id,'You are not in our Data Base, please, go and create an account.')
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
