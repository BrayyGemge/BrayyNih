let handler = function (m) {
  // this.sendContact(m.chat, '6283144570377', 'Raku Gans', m)
  conn.sendContact(m.chat, '62895618626337' , 'Masih Brayy', m)
  conn.reply(m.chat, `Tuhh!! Tapi Itu No Owner Ku:v Kenapa Gw Kasih No Owner Ku?, Karna Owner Ku Jomblo EA:)`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
