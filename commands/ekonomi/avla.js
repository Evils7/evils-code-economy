const model = require('../../models/ekonomi.js')
const Discord = require('discord.js')

module.exports = {
  name: "avlan",
  aliases: ['avla'],
  category: "eco",
  cooldown: 30,
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
    return message.channel.send({ content:`Tüfeğin yok!`})
    }
    
    if(user.tufek == false) return message.reply(`Tüfeğin yok!`)
     let somebalı = ["tavşan", "ayı", "güvercin", "2", "1", "tavşan", "ayı", "güvercin", "tavşan", "ayı", "güvercin"]
  let somebalık = somebalı[Math.floor(Math.random() * somebalı.length)]
  let somepara = Math.floor(Math.random() * 350)
  
  if(somebalık === "1") {
    await user.updateOne({ tufek: false})
      message.reply(`Büyük lokmayı ağzına atmayı denedin! av tüfeğin kırıldı ve ölümden döndün.`)
  }
    
  else if(somebalık === "2") {
    await user.updateOne({ tufek: false})
         message.reply(`Bir ejderha seni yakaladı tüfek ve sen kül oldun!`)
  } else {
    message.reply(`Bir ${somebalık} avladın, ve onu ${somepara}TL karşılığında sattın artık ${user.para + somepara} kadar paran var!`)
    let sa = parseInt(user.para)
    await user.updateOne({ para: sa += somepara})
  }
      
  },
};