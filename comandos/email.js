exports.run = (bot, msg, chatId, args,mysql) => {
    var email = msg.text.split(' ')[1];

     var con = mysql.createConnection({
       host: "",
       user: "",
       password: "",
       database: ""
     });
console.log('Start');
  var data = '';

  con.query("SELECT * FROM telegram_users", function (err, result, fields) {
     if (err) throw err;
     if (result.length > 0) {
       data = result;
     }
     con.end();
   });

  console.log('Empezamos');
  if (email.includes('@')) {//If its like an email
    if (data.length > 0) {//if its not the first one
      if (checkUser(msg.from.username,data,con,mysql) === -1) {//if the user is not in our BBD
        var today = new Date();
        let day = today.getDate();
        let month = today.getMonth()+1;
        let year = today.getFullYear();
        var info = {
          "Name": msg.from.first_name,
          "Username": msg.from.username,
          "Email": email,
          "Discord": "",
          "Day": day,
          "Month": month,
          "Year": year,
          "Balance": 0
        };

        addUser(info,data,mysql);

        bot.sendMessage(msg.from.id,'Email has been registered.\nNow please, put your Discord username.\nUse /discord (username).');
      }else {
        bot.sendMessage(msg.from.id,'You have already an account');
      }
    }
  }else {//msg is not like an email
    bot.sendMessage('Please, use a normal email');
  }

  function checkUser(user, data,mysql) {
    var con = mysql.createConnection({
      host: "",
      user: "",
      password: "",
      database: ""
    });
        var sol = -1;
        for (var i = 0; i < data.length; i++) {
          if (data[i].Usuario === user) {
             sol = i;
          }
        }
        return sol;
      }//chek if the user is in the BBD
  function addUser(info,data,mysql) {
    var con = mysql.createConnection({
      host: "",
      user: "",
      password: "",
      database: ""
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = `INSERT INTO telegram_users VALUES ('${info.Name}','${info.Username}','${info.Email}','${info.Discord}','${info.Year}-${info.Month}-${info.Day}','${info.Balance}' )`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        con.end();
    });
  }//Add a user to the BBD

}
