process.env["NTBA_FIX_319"] = 1;
console.log('Starting Bot...');
var TelegramBot = require('node-telegram-bot-api');

var token = 'key';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
 bot.on('message', (msg) => {
   var LocalStorage = require('node-localstorage').LocalStorage;
   localStorage = new LocalStorage('./register');
  let chatId = msg.chat.id;
  var command = msg.text.toString().toLowerCase();
  var args ='';
  try {
    if (command === '/register') { // because its imposible to create a file starting with '/'
      command = 'register';
      args = 'x';
    }
    if (command.includes('/email')) {
      let commandFile = require(`./comandos/email.js`);
      commandFile.run(bot, msg ,chatId,args);
    }else if (command.includes('/discord')){
      let commandFile = require(`./comandos/addDiscord.js`);
      commandFile.run(bot, msg ,chatId,args);
    }else {
      let commandFile = require(`./comandos/${command}.js`);
      commandFile.run(bot, msg ,chatId,args);
    }

  }catch (err) {}
 });


bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
        "keyboard": [["Website", "Twitter"],   ["News", "Bitcointalk"], ["Register"]]
        }
    });

});
