exports.run = (bot, msg, chatId,args) => {
  var reg = localStorage.getItem('reg.json');
  if (reg.length > 0) {//add new one

  }else {//fisrt one
    var data = [{Name: msg.from.first_name, Username: msg.from.username, Email: msg.text, Email2: "", RegDate: 0}];
    localStorage.setItem('reg.json',JSON.stringify(data));
  }
}
