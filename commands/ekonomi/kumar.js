const { MessageEmbed } = require('discord.js');
const model = require('../../models/ekonomi.js')

module.exports = {
  name: "kumar",
  category: "eco",
  cooldown: 15,
  description: "Shows Bot Response delay and Websocket latency",
  execute: async (client, message, args) => {
    if(isNaN(args[0])) return message.reply('Geçerli bir sayı giriniz')
    if(!args[0]) return message.reply('Oynayacağınız miktarı girin')
    let user = await model.findOne({ id: message.author.id })
    if(!user) return message.reply('Yeterince paran yok! balık tutmayı dene.')
    if(user.para < args[0]) return message.reply('Paranızdan büyük kumarlar oynamazsınız')
    if(args[0].startsWith("-")) return message.reply('Negatif sayı oynayamazsınız!')
    
     let somebalı = ["1", "2"]
     
  let somebalık = somebalı[Math.floor(Math.random() * somebalı.length)]
  
  if(somebalık === "1") {
    let verilecek = parseInt(user.para) + args[0] * 2
    let e = new MessageEmbed()
            .setColor('BLURPLE')
    .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL({ dynamic: true})})
    .setFooter({ text: 'Evils Code Ekonomi', iconURL: client.user.avatarURL()})
    .setDescription(`Kazandın!\nKazandıgın para: **${args[0]}**\nToplam: **${verilecek}**`)
    await user.updateOne({ para: verilecek})
    return message.reply({ embeds:[e]})
  }
  if(somebalık === "2") {
    let geriverilcek = parseInt(user.para) - args[0]
    let e = new MessageEmbed()
            .setColor('BLURPLE')
    .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL({ dynamic: true})})
    .setFooter({ text: 'Evils Code Ekonomi', iconURL: client.user.avatarURL()})
        .setDescription(`Kaybettin!\nKaybettiğin para: **${args[0]}**\nToplam: **${geriverilcek}**`)
     await user.updateOne({ para: geriverilcek})
   return message.reply({ embeds:[e]}) 
  }
  },
};