exports.run = (bot, msg, chatId,args,con) => {

  var reg = localStorage.getItem('reg');
  var data ='';
  con.query("SELECT * FROM telegram_users", function (err, result, fields) {
     if (err) throw err;     
     if (result.length > 0) {
       data = result;
     }
     con.end();
   });

   if (data.length > 0) {//Not the first user
     if (checkUser(msg.from.username, data) === -1) {
        bot.sendMessage(msg.from.id, 'Ok, now you need to send me your email.\n Just do /email (your email)');
     }else {
        bot.sendMessage(msg.from.id, 'You have already an account.');
     }

   }else {//first user
     bot.sendMessage(msg.from.id, 'Ok, now you need to send me your email.\n Just do /email (your email)');
   }
   function checkUser(user, data) {
         var sol = -1;
         for (var i = 0; i < data.length; i++) {
           if (data[i].Username === user) {
              sol = i;
           }
         }
         return sol;
       }//chek if the user is in the BBD




}
