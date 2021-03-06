exports.run = (bot, msg, chatId,args) => {

  var reg = localStorage.getItem('reg');
  var email = msg.text.split(' ')[1];
  var balance = 1;
  if(localStorage.getItem('control') > 0){
    balance = 5;
  }
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
          "Balance": balance
        };
        addUser(data);
        localStorage.setItem('control',localStorage.getItem('control')-1);//First 100 users
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
          "Balance": balance
        }
      ];
      localStorage.setItem('reg',JSON.stringify(data));
      localStorage.setItem('control',localStorage.getItem('control')-1);
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
    reg = reg.split(']')[0];
    reg+=',';
    data = JSON.stringify(data);
    reg+=data+']';
    localStorage.setItem('reg',reg);
  }//Add a user to the BBD

}
