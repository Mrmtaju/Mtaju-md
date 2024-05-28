
const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: lazack28" //ur yt chanel name
global.socialm = "GitHub: Lazack28" //ur github or insta name
global.location = "Tanzania, Dodoma, st.johns" //ur location

//new
global.botname = 'MTAJU-MD' //ur bot name
global.ownernumber = '255734980103' //ur owner number
global.ownername = 'LAZACK' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://chat.whatsapp.com/BXhYkUaP0RNBf6L6QdyRHo"
global.themeemoji = '🪀'
global.wm = "lazack bot Inc."
global.botscript = 'https://github.com/Lazack28/Mtaju-md' //script link
global.packname = "Sticker By"
global.author = "Lazack\n\n+255734980103"
global.creator = "255734980103@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["255734980103"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
