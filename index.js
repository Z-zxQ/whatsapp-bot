const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')

require('./Franky404.js')
nocache('./Franky404.js', module => console.log(`${module} is now updated!`))

const starts = async (frnky = new WAConnection()) => {
    frnky.logger.level = 'warn'
    frnky.version = [2, 2123, 8]
    frnky.browserDescription = [ 'Franky404', 'Chrome', '3.0' ]
    console.log(banner.string)
    frnky.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./franky.json') && frnky.loadAuthInfo('./franky.json')
    frnky.on('connecting', () => {
        start('2', 'Connecting...')
    })
    frnky.on('open', () => {
        success('2', 'Connected')
    })
    await frnky.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./franky.json', JSON.stringify(frnky.base64EncodedAuthInfo(), null, '\t'))

    frnky.on('chat-update', async (message) => {
        require('./Franky404.js')(frnky, message)
    })
}

function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
