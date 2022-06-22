const model = require('../../models/ekonomi.js')
const Discord = require('discord.js')

module.exports = {
  name: "bakiye",
  category: "eco",
  cooldown: 5,
  description: "Shows Bot Response delay and Websocket latency",
  execute: async (client, message, args) => {
   
    let user = await model.findOne({ id: message.author.id })
    if(!user){
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
    .addField('Cebindeki Para', `0`)
    .addField('Bankadaki Paran', `0/1000`)
    .addField('Toplam', `0`)
    
    return message.channel.send({ embeds:[embed]})
    }
      
    let embed = new Discord.MessageEmbed()
    .setColor('BLURPLE')
    .addField('Cebindeki Para', `${user.para}`)
    .addField('Bankadaki Paran', `${user.bankapara}/${user.bankaalan}`)
    .addField('Toplam', `${user.para + user.bankapara}`)
    
    return message.channel.send({ embeds:[embed]})
  },
};