let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *TRI:* 62895618627337
• *DANA:* 62895618626337

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalo Gak Mau Subscribe Aja Channel Zero 
https://youtube.com/channel/UC7SydwUESoyOQ3qZZuoaNHw

Kontak Owner Saya⬇️⬇️
`, m)
this.sendContact(m.chat, '62895618626337', 'BrayyLomli', idnya)
  }
  return true
}

module.exports = handler