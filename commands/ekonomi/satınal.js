const model = require('../../models/ekonomi.js')
const Discord = require('discord.js')

module.exports = {
  name: "satınal",
  aliases: ['satın-al'],
  category: "eco",
  cooldown: 5,
  description: "Shows Bot Response delay and Websocket latency",
  execute: async (client, message, args) => {
   
    let user = await model.findOne({ id: message.author.id })
 if(!args[0]) return message.reply('Ne alacağını belirtmelisin.')
    if(!user){
      new model({
        id: message.author.id,
        para: 0,
        bankapara: 0,
        bankaalan: 1000,
        tufek: false,
        kamera: false
      }).save()
          
    return message.channel.send({ content:`Yeterince paran yok!`})
    
    }
    if(args[0] === "tüfek") {
    if(user.para < 800) return message.reply('Yeterince paran yok!')
      if(user.tufek === true) return message.reply('Zaten bir tüfeğin var!')
      await user.updateOne({ tufek: true, para: user.para -= 800})
    return message.channel.send(`Tüfek alımı başarılı, artık ${user.para} kadar paran var!`)
    }
    else if(args[0] === "iyi-kamera") {
          if(user.para < 700) return message.reply('Yeterince paran yok!')
      if(user.kamera === true) return message.reply('Zaten bir kameran var!')
      await user.updateOne({ kamera: true, para: user.para -= 700})
    return message.channel.send(`Kamera alımı başarılı, artık ${user.para} kadar paran var!`)
    }
    else {
      return message.reply('Geçerli bir satın alım belirtilmedi.')
    }
  },
};