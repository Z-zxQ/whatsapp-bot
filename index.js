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
frnky.on('group-update', async (anu) => {
  metdata = await frnky.groupMetadata(anu.jid)
  console.log(anu)
  if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `Deskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n•Deskripsi Baru : ${anu.desc}`
    frnky.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}})
    console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
  })

frnky.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let keynye = m.key
let c = frnky.chats.get(keynye.remoteJid)
let a = c.messages.dict[`${keynye.id}|${keynye.fromMe ? 1: 0}`]
let contennye = frnky.generateForwardMessageContent(a, false)
///frnky.sendMessage(m.key.remoteJid, `p @${m.participant.split("@")[0]}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
})
frnky.on('group-participants-update', async (anu) => {
		try{
			const mdata = await frnky.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'promote') {
				num = anu.participants[0]
				teks = `@${num.split('@')[0]} Sekarang Admin!`
				frnky.sendMessage(mdata.id,teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				teks = `@${num.split('@')[0]} Sekarang Tidak Admin!`
				frnky.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	frnky.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
// ANTI CALL
frnky.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        ban.push(callerId)
        frnky.sendMessage(callerId, "Telpon = Block \nAnda di block Karna Telpon Bot \nSilahkan Chat ownerku untuk membuka block!\nwa.me/+6283183586629", MessageType.text)
        await sleep(5000)
        blocked.push(callerId)
        await frnky.blockUser(callerId, "add") // Block user
})
frnky.on("CB:action,,battery", json => {
	  const battery = json[2][0][1].value
	  const persenbat = parseInt(battery)
	  baterai.battery = `${persenbat}%`
	  baterai.isCharge = json[2][0][1].live
})

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
