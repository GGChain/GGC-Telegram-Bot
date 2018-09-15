exports.run = (bot, msg, chatId,args) => {

  var reg = localStorage.getItem('reg');
  var email = msg.text.split(' ')[1];
  if (email.includes('@')) {//If its like an email
    if (reg.length > 0) {//if its not the first one
      if (checkUser(msg.from.username) === -1) {//if the user is not in our BBD
        var today = new Date();
        let day = today.getDate();
        let month = today.getMonth()+1;
        let year = today.getFullYear();
        var data = {
          "Name": msg.from.first_name,
          "Username": msg.from.username,
          "Email": email,
          "Discord": "",
          "Day": day,
          "Month": month,
          "Year": year,
          "Balance": 0
        };
        addUser(data);
        bot.sendMessage(msg.from.id,'Email has been registered.\nNow please, put your Discord username.\nUse /discord (username).');

      }
    }else {//the fisrt user in the BBD
      var today = new Date();
      let day = today.getDate();
      let month = today.getMonth()+1;
      let year = today.getFullYear();
      var data = [{
          "Name": msg.from.first_name,
          "Username": msg.from.username,
          "Email": email,
          "Discord": "",
          "Day": day,
          "Month": month,
          "Year": year,
          "Balance": 0
        }
      ];
      localStorage.setItem('reg',JSON.stringify(data));
      bot.sendMessage(msg.from.id,'Email has been registered.\nNow please, put your Discord username.\nUse /discord (username).');
    }
  }else {//msg is not like an email
      bot.sendMessage('Please, use a normal email');
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
  function addUser(data) {
    var reg = localStorage.getItem('reg');
    // for (var i = 0; i < (reg.length)-3; i++) {
    //   newReg+=reg.charAt(i);
    // }
    reg = reg.split(']')[0];
    reg+=',';
    data = JSON.stringify(data);
    reg+=data+']';
    localStorage.setItem('reg',reg);
  }//Add a user to the BBD

}
