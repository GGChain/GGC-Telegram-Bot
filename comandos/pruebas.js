exports.run = (bot, msg, chatId,args) => {
  bot.getChatMember(chatId,'624193581').then(() => {
     console.log("Exist"); }).catch((e) => {
       if(e.response.body.error_code == 400){
         console.log("Not exist");
       }
   });
}
