let express = require('express')
let app = express()
let Telegram = require('node-telegram-bot-api')
let token = '5837706001:AAF_gXOb78N2Q7vmb5WSnMlldgHGsuZ2eEc';

let bot = new Telegram(token, { polling: true })
let request = require('request')
bot.onText(/\/movie(.+)/, function (one, match) {
    let chatId = one.chat.id;
    let movie = match[1]
    request(`http://www.omdbapi.com/?i=tt3896198&apikey=45562412=${movie}`, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            bot.sendMessage(chatId, 'Looking for' + movie + '...', { parse_mode: 'Markdown' })
            bot.sendMessage(chatId, 'Result :\n' + body)

        }
    })

})
app.listen(5000, () => {
    console.log('5000 ...');
})