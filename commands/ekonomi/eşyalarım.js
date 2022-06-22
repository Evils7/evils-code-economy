const model = require('../../models/ekonomi.js')
const Discord = require('discord.js')

module.exports = {
  name: "eşyalarım",
  aliases: ['inventory', 'envanter'],
  category: "eco",
  cooldown: 5,
  description: "Shows Bot Response delay and Websocket latency",
  execute: async (client, message, args) => {
   let user = await model.findOne({ id: message.author.id })
   if(!user) {
       new model({
        id: message.author.id,
        para: 0,
        bankapara: 0,
        bankaalan: 1000,
        tufek: false,
        kamera: false
      }).save()
     let embed = new Discord.MessageEmbed()
     .setColor('BLURPLE')
     .setDescription(`Eşyaların:\nTüfek: :x:\nİyi Kamera: :x:`)
     .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL()})
     return message.channel.send({ embeds:[embed]})
   }
    
         let embed = new Discord.MessageEmbed()
     .setColor('BLURPLE')
     .setDescription(`Eşyaların:\nTüfek: ${user.tufek === true ? ':white_check_mark:' : ':x:'}\nİyi Kamera ${user.kamera === true ? ':white_check_mark:' : ':x:'}`)
     .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL()})
     return message.channel.send({ embeds:[embed]})
  },
};