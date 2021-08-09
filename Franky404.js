// WAConnection
const {
  WAConnection: _WAConnection,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  GroupSettingChange,
  ChatModification,
  MessageType
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
// Module
const { msgFilter } = require('./lib/antispam')
const { color, bgcolor } = require('./lib/color')
const {dafontDown,dafontSearch } = require('./lib/dafont')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins,getRandom,start, info, success, close } = require('./lib/functions')
const {  fetchJson,  getBase64 } = require('./lib/fetcher')
const { yta, ytv,upload } = require('./lib/ytdl')
const { mediafireDl } = require('./lib/mediafire')
const { Otakudesu } = require('./lib/otakudesu')
const { pinterest } = require('./lib/pinterest')
const { recognize } = require('./lib/ocr')
const { webp2mp4File} = require('./lib/webp2mp4')
const { uploadimg } = require('./lib/uploadimg')
const { exif } = require('./lib/exif')
const setGelud = require('./lib/gameGelud.js')
const { tiktokDown } = require("./lib/tiktok.js")
const util = require('util');
const imageToBase64 = require('image-to-base64')
const axios = require("axios")
const fs = require('fs')
const qrcode = require('qrcode')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const twitterGetUrl = require("twitter-url-direct")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const yts = require( 'yt-search')
const request = require('request');
const cheerio = require('cheerio') 
const ffmpeg = require('fluent-ffmpeg')
const F = require('./lib/lomte')
// File Database
const voting = JSON.parse(fs.readFileSync('./database/voting.json'))
const { addVote, delVote } = require('./database/vote.js')
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const a = '```'
// Tictactoe By https://github.com/zobin33
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
prefix = ''
ban = []
join_ky = []
blocked = []
hit_today = []
baterai = {
	battery: "" || "Tidak terdeteksi",
	isCharge: "" || false
}
function addMetadata(packname, author) {
	if (!packname) packname = `${config.packname}`; if (!author) author = ` ${config.author}`;
	author = author.replace(/[^a-zA-Z0-9]/g, '');
	let name = `${author}_${packname}`

	if (fs.existsSync(`./src/sticker/${name}.exif`)) {
		return `./src/sticker/${name}.exif`
	}
	const json = {
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}

	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

	let len = JSON.stringify(json).length
	let last

	if (len > 256) {
		len = len - 256
		bytes.unshift(0x01)
	} else {
		bytes.unshift(0x00)
	}

	if (len < 16) {
		last = len.toString(16)
		last = "0" + len
	} else {
		last = len.toString(16)
	}

	const buf2 = Buffer.from(last, "hex")
	const buf3 = Buffer.from(bytes)
	const buf4 = Buffer.from(JSON.stringify(json))

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

	fs.writeFile(`./src/sticker/${name}.exif`, buffer, (err) => {
		return `./src/sticker/${name}.exif`
	}
	)
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}        
 function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }

function convertBalanceToString(angka) {
	var balancenyeini = '';
	var angkarev = angka.toString().split('').reverse().join('');
	for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) balancenyeini += angkarev.substr(i, 3) + '.';
	return '' + balancenyeini.split('', balancenyeini.length - 1).reverse().join('');
}
function randomString(length){
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyzsadw'
    let str = '';
	lengt = length || 9
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * 65)];
    }
	return str
}
///return(randomString(6))

// WAConnection 
async function starts() {
	const frnky = new WAConnection()
	frnky.logger.level = 'warn'
        frnky.version = [2, 2119, 6]
	console.log('>', '[',color('INFO','blue'),']','Starting Bot...')
  console.log('>', '[',color('INFO','blue'),']','Configure Connection...')
  console.log('>', '[',color('INFO','blue'),']','Configure Success, Connecting...')
	frnky.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
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
module.exports = frnky = async (frnky, Kyz) => {
		try {
			if (!Kyz.hasNewMessage) return
            Kyz = Kyz.messages.all()[0]
			if (!Kyz.message) return
			if (Kyz.key && Kyz.key.remoteJid == 'status@broadcast') return
			if (Kyz.key.fromMe) return
            m = simple.smsg(frnky, Kyz)
            global.ky_ttt
            global.join_ky
            global.prefix
			global.blocked
            Kyz.message = (Object.keys(Kyz.message)[0] === 'ephemeralMessage') ? Kyz.message.ephemeralMessage.message : Kyz.message
            const content = JSON.stringify(Kyz.message)
			const from = Kyz.key.remoteJid
			const type = Object.keys(Kyz.message)[0]
			const basreng = from.endsWith('@g.us')
			const botKyz = basreng ? Kyz.participant : Kyz.key.remoteJid
			userky = frnky.contacts[botKyz] != undefined ? frnky.contacts[botKyz].vname || frnky.contacts[botKyz].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const speed = require('performance-now')
			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
            const cmod = (type === 'conversation' && Kyz.message.conversation) ? Kyz.message.conversation : (type == 'imageMessage') && Kyz.message.imageMessage.caption ? Kyz.message.imageMessage.caption : (type == 'videoMessage') && Kyz.message.videoMessage.caption ? Kyz.message.videoMessage.caption : (type == 'extendedTextMessage') && Kyz.message.extendedTextMessage.text ? Kyz.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		    const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmod) ? cmod.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
			body = (type === 'conversation' && Kyz.message.conversation.startsWith(prefix)) ? Kyz.message.conversation : (type == 'imageMessage') && Kyz.message.imageMessage.caption.startsWith(prefix) ? Kyz.message.imageMessage.caption : (type == 'videoMessage') && Kyz.message.videoMessage.caption.startsWith(prefix) ? Kyz.message.videoMessage.caption : (type == 'extendedTextMessage') && Kyz.message.extendedTextMessage.text.startsWith(prefix) ? Kyz.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? Kyz.message.conversation : (type === 'extendedTextMessage') ? Kyz.message.extendedTextMessage.text : ''
            ///button = (type == 'buttonsResponseMessage') ? Kyz.message.buttonsResponseMessage.selectedDisplayText : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
            hit_today.push(command)
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			mess = {
				wait: '*Sedang Di Proses Tunggu Sebentar*',
				error: {
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					Iv: ' Link yang anda kirim tidak valid!'
				},
				only: {
					group: 'Command ini hanya bisa di gunakan dalam group!',
					benned: '*Maaf Anda Di Ban Oleh Owner*',
					owner: '*Command Ini Hanya Bisa Di Gunakan Oleh Owner!*',
					admin: 'Perintah ini hanya bisa di gunakan oleh admin group!',
					Badmin: 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ',
				}
			}
		    const botNumber = frnky.user.jid
			const ownerNumber = ["6283183586629@s.whatsapp.net"] // Nomor Owner🗿
			const ownerContact = ["6283183586629","0"] // Nomor Owner🗿
			const isGroup = from.endsWith('@g.us')
			const totalchat = await frnky.chats.all()
			const sender = isGroup ? Kyz.participant : Kyz.key.remoteJid
			const groupMetadata = isGroup ? await frnky.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isVote = isGroup ? voting.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            idttt = []
	        players1 = []
	        players2 = []
	        gilir = []
	        for (let t of ky_ttt){
	        idttt.push(t.id)
	        players1.push(t.player1)
	        players2.push(t.player2)
	        gilir.push(t.gilir)
	        }
	        const isTTT = isGroup ? idttt.includes(from) : false
	        isPlayer1 = isGroup ? players1.includes(sender) : false
            isPlayer2 = isGroup ? players2.includes(sender) : false
			const q = args.join(' ')
            const nomersu = `${sender.split("@")[0]}`
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
            const IsCodeinvite = join_ky.includes(q)
			const errorurl2 = 'https://i.ibb.co/bJ9GkwL/20201127-075249.png'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				frnky.sendMessage(from, teks, text, {quoted:Kyz})
			}
			const sendMess = (hehe, teks) => {
				frnky.sendMessage(hehe, teks, text)
			}
			   const costum = (pesan, tipe, target, target2) => {
			frnky.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? frnky.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : frnky.sendMessage(from, teks.trim(), extendedText, {quoted: Kyz, contextInfo: {"mentionedJid": memberr}})
			}
	    // Voting By Hexagonz
        // https://github.com/hexagonz/
        if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./database/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./database/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6283183586629@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./database/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./database/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./database/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6283183586629@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./database/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	

const downloadM = async(save) => {
obj = Object.keys(Kyz.message)[0]
encmedia = content.includes("quotedMessage") ? JSON.parse(JSON.stringify(Kyz).replace('quotedM','m')).message[obj].contextInfo : Kyz
if (save) return await frnky.downloadAndSaveMediaMessage(encmedia)
return await frnky.downloadMediaMessage(encmedia)
  }

const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './tmp/stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './tmp/stik' + names + '.png'
                    let asw = './tmp/stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        frnky.sendMessage(to, media, MessageType.sticker,{quoted:Kyz})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    frnky.sendMessage(to, media, type, { quoted: Kyz, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link).catch(e => {
	fetch(link).then((hasil) => {
	return frnky.sendMessage(from, hasil, type, options)
	}).catch(e => {
	frnky.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	}) 
  }) 
  })
	frnky.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	frnky.sendMessage(from, hasil, type, options).catch(e => {
	frnky.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
   const getWin = (userId) => {
            let position = false
            Object.keys(_win).forEach((i) => {
                if (_win[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _win[position].win
            }
        }
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
         reply('Bug Troli Detected!\n\n' + require('util').format(m.key))
        await frnky.modifyChat(m.chat, 'delete', {
        includeStarred: false
        })
        }
			colors = ['red','white','black','blue','yellow','green']
			//convert
            const isQuoted = type == 'extendedTextMessage'
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
             
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ GROUP ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            
			switch(command) {
// Case By Franky🗿
case 'join':
if (isBanned) return reply(mess.only.benned) 
if(!IsCodeinvite) return reply(`Maaf Code Yang Anda Tulis Salah!\nKetik : ${prefix}serial\nUntuk Mendapatkan Code!`)
if(!comde) return reply('Masukkan Link Grup Kamu!')
let comde = body.slice(26)
frnky.acceptInvite(comde)
sendMess(m.sender,'Berhasil Masuk Ke Grup mu!')
reply('Silahkan Lihat Chat Dari Bot!')  
break
case 'serial':
if (isBanned) return reply(mess.only.benned)
reply('Silahkan Lihat Chat Dari Bot!')  
seri_ky = randomString(6)
join_ky.push(seri_ky)
serinya = `*CODE SERIAL JOIN*

Nama : ${userky}
Nomor : wa.me/${sender.split("@s.whatsapp.net")[0]}
Code Join Kamu : ${seri_ky}

Note : Jangan Sebar Codemu Kalau Ketahuan\nOwner Akan Ban Kamu!`
sendMess(m.sender,serinya)
break
	case 'swm':
            if ( args.length < 1) return reply(`reply stiker ${prefix}swm author|packname`)
            encmedia = JSON.parse(JSON.stringify(Kyz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await frnky.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `${args[0]}`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `${args[0]}`
            require('./lib/fetcher.js').createExif(satu, dua)
	        require('./lib/fetcher.js').modStick(media, frnky, Kyz, from)
			break
case 'sider': 
                if (!isGroup) return reply(mess.only.group)
                if (!isQuoted) return reply(`Reply pesan dari bot`)
                    frnky.messageInfo(from, Kyz.message.extendedTextMessage.contextInfo.stanzaId)
                    .then((res) => {
                        let anu = []
                        let txt = `• *Iist Sider*\n\n`
                        for (let i = 0; i < res.reads.length; i++){
                            anu.push(res.reads[i].jid)
                            txt += `• @${res.reads[i].jid.split("@")[0]}\n`
                            txt += `• Waktu : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss')}\n\n`
                        }         
                        mentions(txt, anu, true)
                    })
                    .catch((err) => reply('reply pesan bot!'))
                break

case 'ban':
if (!isOwner) return
const kys = Kyz.message.extendedTextMessage.contextInfo.mentionedJid[0]
ban.push(kys)
reply(`Berhasil Banned ${kys}`)
break
case 'unban':
if (!isOwner) return
ban = []
break
case 'del':
case 'delete':
case 'd':
if (isBanned) return reply(mess.only.benned)    

frnky.deleteMessage(from, { id: Kyz.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'invite':
if (!isOwner) return reply(mess.only.owner)
frnky.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('_*SUDAH SELESAI~*_')
                    break
            break

case 'term':
case 'exec':
					if (!isOwner) return reply(mess.only.owner)
					if (!q) return reply(`masukin code!`)
					exec(`${q}`, (err, stdout) => {
						if (err) return reply(`root@Franky:~ ${err}`)
						if (stdout) {
							reply(stdout)
						}
					})
					break

				case 'help':
				case 'menu':
				if (isBanned) return reply(mess.only.benned)    
men = 
`╭─「 *INFORMATION* 」
│
│ • *Total Hit : ${hit_today.length} Hit*
│ • *Name : ${userky}*
│ • *Tag : @${sender.split("@")[0]}*
├「 *DOWNLOAD MENU* 」
│
├ *${prefix}play*
├ *${prefix}video*
├ *${prefix}ytmp4*
├ *${prefix}ytmp3*
├ *${prefix}tiktok*
├ *${prefix}tomp3*
├ *${prefix}tomp4*
├ *${prefix}pinterest*
├ *${prefix}ig*
├ *${prefix}mediafire*
├ *${prefix}fontdown*
├ *${prefix}lirik*
├ *${prefix}yts*
├ *${prefix}swm*
├ *${prefix}get*
├ *${prefix}emoji*
├ *${prefix}toimg*
├ *${prefix}sticker*
├「 *GAME MENU* 」
│
├ *${prefix}tictactoe*
├ *${prefix}deltt*
├ *${prefix}suit*
├ *${prefix}gelud*
├ *${prefix}delgelud*
├「 *JADI-BOT* 」
│ • Owner only!
├ *${prefix}jadibot*
├ *${prefix}stopjadibot*
├ *${prefix}listjadibot*
├「 *VOTING* 」
│
├ *${prefix}voting*
├ *${prefix}delvote*
├「 *INFO MENU* 」
│
├ *${prefix}kirim*
├ *${prefix}ping*
├ *${prefix}wame*
├ *${prefix}q*
├ *${prefix}infostick*
├ *${prefix}bug*
├ *${prefix}owner*
├ *${prefix}grouplist*
├ *${prefix}sider*
├ *${prefix}grup* open/close
├ *${prefix}cekgrup*
├ *${prefix}linkgc*
│
├「 *About Me* 」
│
├ *Owner : Franky*
├ *Github : https://github.com/Franky404*
├ *Website : https://Franky404.github.io/about*
╰──「 *Bot-Downloader* 」`
     frnky.sendMessage(from, men, MessageType.text, { quoted: Kyz ,contextInfo: {"mentionedJid": [sender], forwardingScore: 0, isForwarded: true }})
                    break

// Case By Franky🗿
case 'kirim':
if(!Kyz.quoted) return reply('reply chatnya!')
if(!q) return reply('apa yg mau di kirim?') 
reply('sukses mengirim pesan!')
sendMess(Kyz.quoted.sender , q)
break

// Fork By Nino Chan / Marz Tod🗿
case 'jadibot':
             if (!isOwner) return 
              jadibot(reply,frnky,from)
              break
       case 'stopjadibot':
             stopjadibot(reply)
             break
      case 'listbot':
      case 'listjadibot':
             let jamdi = '「 *LIST JADIBOT* 」\n\n'
             for(let i of listjadibot) {
             jamdi += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
}
            reply(jamdi)
            break
case 'delvote':
            if(!Kyz.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            ////if(!isGroupAdmins) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)\nContoh : /voting @tag | alasan | waktu vote')
            if (Kyz.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || Kyz.message.extendedTextMessage.contextInfo == null) {
            let id = Kyz.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break

case 'tod':
case 'dare':
case 'truth':
frnky.send3Button(from,'TRUTH OF DARE','Silahkan Di Pilih!','TRUTH','TRUTH','DARE','DARE','NEXT','NEXT')
break
case 'suit':
                    if (!q) return reply(`Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`)
                        if (!q.match(/batu|gunting|kertas/)) return reply(`Format salah!`)
                        if (q.match(/batu|gunting|kertas/)) {
                            await sleep(2000)
                            var computer = Math.random();
                            if (computer < 0.34) {
                                computer = 'batu';
                            } else if (computer >= 0.34 && computer < 0.67) {
                                computer = 'gunting';
                            } else {
                                computer = 'kertas';
                            }
                            if (q == computer) {
                                reply(`*RESULT*\n\nPertandingan Seri!`)
                            } else if (q == 'batu') {
                                if (computer == 'gunting') {
                                    reply(`*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`)
                                }
                            } else if (q == 'gunting') {
                                if (computer == 'batu') {
                                    reply(`*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!`)
                                }
                            } else if (q == 'kertas') {
                                if (computer == 'batu') {
                                    reply(`*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`)
                                }
                            }
                        }
                    break
case 'gelud':
if (!isGroup) return reply(mess.only.group)
if (isBanned) return reply(mess.only.benned)    

					if (Kyz.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
					if (!Kyz.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
                     if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
					if (fs.existsSync(`./tmp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delgelud*, untuk menghapus sesi`)
					
					gelutSkuy = setGelud(`${from}`)
					gelutSkuy.status = false
					gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
					gelutSkuy.Y = args[0].replace("@", "");
					fs.writeFileSync(`./tmp/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
					starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

					frnky.sendMessage(from, starGame, MessageType.text, {quoted: Kyz, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
					break
					
					case 'delgelud':
if (isBanned) return reply(mess.only.benned)    

if (!isGroup) return reply(mess.only.group)
					if (fs.existsSync('./tmp/' + from + '.json')) {
						fs.unlinkSync('./tmp/' + from + '.json')
						reply('Berhasil Menghapus Sesi Gelud')
					} else {
						reply('Tidak ada sesi yang berlangsung')
					}
					break


case 'deltt':
if (isBanned) return reply(mess.only.benned)    

if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses Mereset Game')
break

case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (isBanned) return reply(mess.only.benned)    

if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (Kyz.message.extendedTextMessage === undefined || Kyz.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = Kyz.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
frnky.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /deltt , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break

case 'infostick':
case 'infos':
let webp = require('node-webpmux')
    if (!m.quoted) return frnky.reply(m.chat, 'Tag stikernya!', m)
    let qusu = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.loadBuffer(await m.quoted.download())
       anu = util.format(JSON.parse(img.exif.slice(22).toString()))
     m.reply(anu)
    }
break
case 'grouplist':
case 'listgroup':
if (isBanned) return reply(mess.only.benned)    

 txt = frnky.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${frnky.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  frnky.reply(m.chat, 'List Groups:\n' + txt, m)
break
case 'q':
if (isBanned) return reply(mess.only.benned)    
    if (!m.quoted) return reply( 'reply pesan!')
    let qu = frnky.serializeM(await m.getQuotedObj())
    if (!qu.quoted) return reply( 'pesan yang anda reply tidak mengandung reply!')
    await qu.quoted.copyNForward(m.chat, true)
break
case 'cekgrup':
case 'cekgroup':
case 'infogc':
if (isBanned) return reply(mess.only.benned)    

 cos = args.join( " ")
var net = cos.split('https://chat.whatsapp.com/')[1]
 jids = []
let { owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await frnky.query({ 
json: ["query", "invite",net],expect200:true })
let oi = 
`</ *CEKGROUP* >

• *Owner Group* : @${owner.split('@')[0]}
• *Nama Group* : ${subject}
• *Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
• *Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
• *Id desc* : ${descId}
• *Desc di ganti oleh* : @${descOwner.split('@')[0]}
• *Tanggal* : ${formatDate(descTime * 1000)}`
jids.push(`${owner.replace(/@c.us/g,'@s.whatsapp.net')}`)
jids.push(`${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}`)
mentions(oi,jids,true)
function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
break
case 'get':

        case 'fetch': //ambil dari nuru

               if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')

               res = await fetch(q)

               if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {

               delete res

               throw `Content-Length: ${res.headers.get('content-length')}`

}

               if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)

               txtx = await res.buffer()

               try {

               txtx = util.format(JSON.parse(txtx+''))

               } catch (e) {

               txtx = txtx + ''

               } finally {

               reply(txtx.slice(0, 65536) + '')

}

               break

case 'ping':
let totalchat = await frnky.chats.all()
				let i = []
				let giid = []
				for (let mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = frnky.user.phone
pinghaha =
 `「 *STATUS CHAT* 」
            
• Group Chats: ${giid.length}
• Personal Chats: ${totalchat.length - giid.length}
• Total Chats: ${totalchat.length}
• Charger: ${baterai.isCharge}
• Penggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

「 *STATUS HP BOT* 」

• Battery: ${baterai.battery}  ${baterai.isCharge === 'true' ? '_Sedang Di Cas_' : '_Tidak Di Cas_'}
• wa_version: ${wa_version}
• mcc: ${mcc}
• mnc: ${mnc}
• os_version: ${os_version}
• device_manufacturer: ${device_manufacturer}
• device_model: ${device_model}

*Speed* > ${latensii.toFixed(4)} Second!`
reply(pinghaha)
break
case 'owner':
if (isBanned) return reply(mess.only.benned)    

let ini_list = []
  for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {

  ini_list.push({
            "displayName": frnky.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${frnky.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
  hehe = await frnky.sendMessage(from, {
        "displayName": `${ini_list.length} kontak`,
        "contacts": ini_list 
        }, 'contactsArrayMessage', { quoted: m })
        frnky.sendMessage(from,'Nih Kak Owner Ku ><',text,{quoted: hehe})
            break

case 'bug':
if (isBanned) return reply(mess.only.benned)    

                if (args.length < 1) return reply(`Yang mau direport apaan? `)
                     const pesan = body.slice(4)
                      if (pesan.length > 300) return frnky.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: Kyz})
                        var nomor = Kyz.participant
                       const tekst1 = 
`*◪* *Bug Report*
*│◪* *Nomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}*
*└◪* *Pesan : ${pesan}*`
                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    frnky.sendMessage('6283183586629@s.whatsapp.net', options, text, {quoted: Kyz})
                    reply('Terima Kasih, Masalah Anda Sudah Di Laporkan Ke Owner Ky_Botz')
                    break

case 'tomp3':
					encmedia = JSON.parse(JSON.stringify(Kyz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await frnky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=1:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(`Error`)
						hah = fs.readFileSync(ran)
						frnky.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: false, quoted: Kyz})
						fs.unlinkSync(ran)
					})
					break

case 'wame':
if (isBanned) return reply(mess.only.benned)    

             frnky.updatePresence(from, Presence.composing)
             options = {
             text: `Link WhatsApp-Mu : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
              contextInfo: {
              mentionedJid: [sender]
              }
              }
              frnky.sendMessage(from, options, MessageType.text, {quoted: Kyz})
              break
case 'linkgroup':
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await frnky.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
         case 'resetlinkgc':
         case 'resetlinkgroup':
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
           json = ['action', 'inviteReset', from]
         frnky.query({json, expect200: true})
         await sleep(3000)
         reply('Sukses Mereset Link Group!')
         break
case 'tagall':

					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				members_id = []
				teks = (args.length > 1) ? args.join(' ').trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
					teks += `• @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
case 'group':
case 'grup':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isGroupAdmins) return reply(mess.only.admin)
					if (args[0] === 'open') {
						frnky.groupSettingChange(from, GroupSettingChange.messageSend, false)
						await sleep(2000)
						reply(`*SUCCES OPEN GRUP*`)
					} else if (args[0] === 'close') {
						await frnky.groupSettingChange(from, GroupSettingChange.messageSend, true)
						await sleep(2000)
						reply(`*SUCCES CLOSE GRUP*`)
					}
					break


                               case 'listadmin':
				case 'adminlist':
					if (!isGroup) return reply(mess.only.group)
					teks = `List Admin ${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `${no.toString()} @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break



case 'pinterest':
if (isBanned) return reply(mess.only.benned)
if (!q) return reply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${q}`)
 
})
break
//


case 'toimg':
case 'img':
				  if (isBanned) return reply(mess.only.benned)
					
						if (!isQuotedSticker) return reply(`Reply stickernya kaka`)
						reply(mess.wait)
						encmedia = JSON.parse(JSON.stringify(Kyz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
						media = await frnky.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.png')
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(`Err: ${err}`)
							bufferi9nn = fs.readFileSync(ran)
							frnky.sendMessage(from, bufferi9nn, image, { caption: 'Done bruhh' })
							fs.unlinkSync(ran)
						})
					
					
					break
case 'tomp4':

            if ((isMedia && !Kyz.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(Kyz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Kyz
            owgi = await frnky.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker!')
            }
            fs.unlinkSync(owgi)
            
            break

      
case 'emoji':
					
            if (isBanned) return reply(mess.only.benned)    
			
			if (!q) return reply('emojinya bruh?')
			qes = args.join(' ')
                       reply(mess.wait)
			emoji.get(`${qes}`).then(emoji => {
				teks = `${emoji.images[0].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
    			
                    break
                     case 's':
                    case 'sticker':
					case 'stiker':
					if (isBanned) return reply(mess.only.benned)    
			
					
if ((isMedia && !Kyz.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Kyz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Kyz
media = await frnky.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('Eror!')
})
.on('end', function () {
console.log('Finish')
frnky.sendMessage(from, fs.readFileSync(ran), sticker, { quoted : Kyz}) 
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && Kyz.message.videoMessage.seconds < 11 || isQuotedVideo && Kyz.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Kyz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Kyz
media = await frnky.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Eror!`)
})
.on('end', function () {
console.log('Finish')
frnky.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: Kyz})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply('Reply Gambar/video minimal 6 detik')
}
break
					
                    
                    case 'tts':
					
				if (isBanned) return reply(mess.only.benned)    
				
					if (args.length < 1) return frnky.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: Kyz})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return frnky.sendMessage(from, 'Textnya mana om', text, {quoted: Kyz})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							bufferg = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							frnky.sendMessage(from, bufferg, audio, {quoted: Kyz, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					
                    break


case 'otakudesu':
                                if (isBanned) return reply(mess.only.benned)
                                
if (!q) return reply('apa yg mau di cari?')
res = await Otakudesu(`${q}`).catch(e => {
reply('_[ ! ] Error_')
})
amsu = `*OTAKUDESU SEARCH*

Judul : ${res.result.judul}
Japan : ${res.result.japan}
Rating : ${res.result.rating}
Produser : ${res.result.produser}
Type : ${res.result.type}
Status : ${res.result.status}
Episode : ${res.result.episode}
Durasi : ${res.result.durasi}
Rilis : ${res.result.rilis}
Studio : ${res.result.studio}
Genre : ${res.result.genre}
Sinopsis : ${res.result.sinopsis}
Link : ${res.result.link}`
sendMediaURL(from,`${res.result.thumb}`,`${amsu}`)
 
break
    
case 'lirik':
     
                                if (isBanned) return reply(mess.only.benned)
                                
if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
teks = body.slice(7)
anu = await fetchJson(`https://franky404.herokuapp.com/api/music/liriklagu?query=${teks}&apikey=Franky`)
console.log(res)
let lirik = `*Lirik Lagu :*

${anu.result}
`
reply(lirik)

break

case 'video':
            
				if (isBanned) return reply(mess.only.benned)    
				
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, 
`*PLAY VIDEO*

*Judul* : ${title}
*Tipe* : MP4
*Filesize* : ${filesizeF}
*Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = 
`*PLAY VIDEO*

*Judul* : ${title}
*Tipe* : MP4
*Size* : ${filesizeF}
*Link* : ${a.data}

_media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link, `nih kak`).catch(() => reply('error'))
                        })
                        })
                        } catch (err) {
                        reply('eror')
                        }
                        
                   break
case 'play':
            
                    if (isBanned) return reply(mess.only.benned)    
				    
			if (args.length === 0) return reply(`Nama lagu nya?`)
            var srch = args.join('')
    		masak = await yts(`${srch}`).catch(e => {
reply('_[ ! ] Error Nama Lagu Yang Anda Masukan Tidak Ada_')
})
    		goreng =masak.all 
   			var enaksu = goreng[0].url
              console.log(goreng)							
                    res = await yta(`${enaksu}`).catch(e => {
reply('_[ ! ] Error Saat Mengirim Lagu_')
})
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return reply(
`*judul* : ${title}
*Filesize* : ${filesizeF}
*Link* : ${a.data}
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = 
`*PLAY MUSIC*

*Judul* : ${title}
*Tipe* : MP3
*Size* : ${filesizeF}
*Link* : ${a.data}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        
                   break
case 'ytmp4':

                    if (isBanned) return reply(mess.only.benned)    
				    
			if (args.length === 0) return reply(`Kirim perintah *ytmp4 _linkYt_*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, 
`*YOUTUBE MP4*

*Judul* : ${title}
*Kualitas* : 360p
*Filesize* : ${filesizeF}
*Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captionsYtmp4 = 
`*YOUTUBE MP4*

*Judul* : ${title}
*Kualitas* : 360p
*Size* : ${filesizeF}

_media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(`eror`)
				}
				
				break
case 'ytmp4hd':
case 'ythd':
			if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
			let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinkks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ythd(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`*YOUTUBE MPR HD*

*Judul* : ${title}
*Kualitas* : 720p
*Filesize* : ${filesizeF}
*Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)
				const captionsYtmp4 = 
`*YOUTUBE MP4 HD*

*Judul* : ${title}
*Kualitas* : 720p
*Size* : ${filesizeF}

_media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(`eror`)
				}
				break
	case 'ytmp3':
	
                    if (isBanned) return reply(mess.only.benned)    
				    
			if (args.length === 0) return reply(`Kirim perintah *ytmp3 _linkyt_*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, 
`*YOUTUBE MP3*

*Judul* : ${title}
*Ext* : MP3
*Filesize* : ${filesizeF}
*Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = 
`*YOUTUBE MP3*

*Judul* : ${title}
*Ext* : MP3
*Size* : ${filesizeF}

_media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(`eror`)
				}
				
				break
case 'tiktok':

if (isBanned) return reply(mess.only.benned)    

if (!q) return reply('link tiktokny?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply('_[ ! ] Server Sedang Error_')
})
console.log(res)
sendMediaURL (from, `${res.result.nowatermark}`,'nih kak')
break


case 'fbdl':
case 'fb':

                    if (isBanned) return reply(mess.only.benned)    
				    
if (!q) return reply('Linknya?')
const fbdl = require("fbdl-core")
fbdl.getInfo(`${q}`).then( res => {
console.log(res)
sendMediaURL (from,`${res.rawVideo}`,`Judul : ${res.title}\nDurasi: ${res.duration}\nUploadedAt : ${res.uploadedAt}\nPublishedAt : ${res.publishedAt}`)
})

break
case 'ig':
case 'igdl':
		
                    if (isBanned) return reply(mess.only.benned)    
				    
				if (!q) return reply('link Instagramny?')
	var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${q}`).catch(e => {
reply('Server sedang Error')
})
console.log(res)
sendMediaURL (from,`${res.result.link}`,`${res.result.desc}`)
       
                    break

case 'twitter':

                    if (isBanned) return reply(mess.only.benned)    
				    
            if (!q) return reply('link Twitternya?')
             reply(mess.wait)
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'nih kak')
            })
            
            break
case 'fontdown':

                    if (isBanned) return reply(mess.only.benned)    
				    
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('dafont')) return reply('link Invalid!')
teks = args.join(' ')
res = await dafontDown(teks) 
result = `*Dafont Downloader*

*Judul :* ${res[0].judul}
*Style :* ${res[0].style}
*Nama File :* ${res[0].output}
*Isi File :* ${res[0].isi}`
reply(result)
sendFileFromUrl(res[0].down, document, {mimetype: 'font/ttf', filename: res[0].output, quoted: Kyz})

break
case 'yts':
    case 'ytsearch' :
    
  if (!q) return reply('Cari apa?')
  let results = await yts(q)
  let wktod = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
      *YOUTUBE SEARCH*
      
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
    *TIPE CHANNEL YOUTUBE*
    
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  reply(wktod)
  break
case 'fontsearch':
case 'dafonts':

                    if (isBanned) return reply(mess.only.benned)    
				    
if (args.length < 1) return reply('Font Apa Yg Mau Di Cari? ')
teks = args.join(' ')
reply(mess.wait)
await dafontSearch(`${teks}`).then( res => {
let ada= res[0]
result = `*Dafont Search*

*Judul :* ${ada.judul}
*Style :* ${ada.style}
*Link :* ${ada.link}`
reply(result)
})

break

case 'mediafire':

                    if (isBanned) return reply(mess.only.benned)    
				    
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `Media Fire Downloader

*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_*Tunggu Proses Mengirim Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: Kyz})

break
case 'tourl':

                    if (isBanned) return reply(mess.only.benned)    
				    
            if ((isMedia && !Kyz.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(Kyz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Kyz
            owgi = await frnky.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            
            break

///**** 🗿🗿🗿🗿🗿🗿 ****//
default:
if (fs.existsSync(`./tmp/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@]s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./tmp/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 


Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   frnky.sendMessage(from, starGame, MessageType.text, {quoted: Kyz, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./tmp/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		frnky.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, MessageType.text, {quoted: Kyz, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./tmp/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  frnky.sendMessage(from, ucapan, text, {quoted: Kyz, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
frnky.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:Kyz,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
frnky.sendMessage(from, ucapan1, text, {quoted:Kyz, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
 frnky.sendMessage(from, ucapan, text, {quoted: Kyz, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
frnky.sendMessage(from, ucapan1, text, {quoted:Kyz, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 frnky.sendMessage(from, ucapan, text, {quoted: Kyz, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
	}
if (budy.startsWith('=>')){
if (!isOwner) return
try {
return frnky.sendMessage(from, 
`${a}📥 Input: ${budy.slice(3)}

📤 OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
${a}`
,text, {quoted:Kyz })
} catch(err) {
e = String(err)
reply(`${a} "err" :  "${e}"${a}`)
}
}
if (budy.startsWith('>')){
                if (!isOwner) return
                var konsol = budy.slice(2)
                Return = (sul) => {
                var sat = JSON.stringify(sul, null, 2)
                bang = util.format(sat)
                if (sat == undefined){
                bang = util.format(sul)
                }
                return reply(bang)
                }
                try {
                reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
                } catch(e){
                 reply(String(e))
                }
                }
if (budy.startsWith('Ky')) return reply('yooo')
if (budy.startsWith('Franky')) return reply('Afah?')
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'Franky404', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}
// BASE : MhankBarBar
// Recode : @Franky

/*
*           
*     Repo : github.com/MrG3P5
*    
                case 'casino':
                    
                    if (!q) return await frnky.reply(from, `Format salah!\n\nKirim perintah ${prefix}casino jumlah\nContoh: ${prefix}casino 5000`,m)
                    var digits_only = string => [...string].every(c => '0123456789'.includes(c));
                    if (digits_only(q) == false) return await frnky.reply(from, `Only Number!`, m)
                    if (digits_only(q) == true) {
                        const betcasino = Math.floor(q)
                        const maximalcsn = 100001
                        if (betcasino >= maximalcsn) return frnky.reply(from, `Maximal 100k`)
                        if (checkATMuser(serial) <= betcasino) return frnky.reply(from, `*IND*\n• Sepertinya saldomu tidak cukup untuk taruhan Rp. ${convertBalanceToString(q)}, Silahkan cek dengan cara ${prefix}cekatm\n\n*ENG*\n• It looks like your balance is not enough for the bet Rp. ${convertBalanceToString(q)}, Please check your balance type ${prefix}cekatm`)
                        if (checkATMuser(serial) >= betcasino) {
                            await limitAddCoin(serial)
                            confirmATM(serial, betcasino)
                            const hadiahcsn = betcasino * 2
                            const maxcasino = 30
                            const thisyou = Math.floor(Math.random() * maxcasino) + 1;
                            const thiscomputer = Math.floor(Math.random() * maxcasino) + 1;
                            if (thisyou >= thiscomputer) {
                                frnky.reply(from, `*RESULT*\n\n• You: ${thisyou}\n• Computer: ${thiscomputer}\n\nCongrats! You win and get Rp. ${convertBalanceToString(hadiahcsn)}`)
                                addSaldo(serial, hadiahcsn)
                            } else if (thisyou <= thiscomputer) {
                                frnky.reply(from, `*RESULT*\n\n• You: ${thisyou}\n• Computer: ${thiscomputer}\n\nSorry! You lose:(`)
                            } else if (thisyou === thiscomputer) {
                                frnky.reply(from, `*RESULT*\n\n• You: ${thisyou}\n• Computer: ${thiscomputer}\n\nDraw!`)
                            }
                        }
                    }
                    break
*
*/
