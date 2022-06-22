const model = require('../../models/ekonomi.js')
const Discord = require('discord.js')

module.exports = {
  name: "çalış",
  aliases: ['calis'],
  category: "eco",
  cooldown: 60,
  description: "Shows Bot Response delay and Websocket latency",
  execute: async (client, message, args) => {
   let embedcalis = new Discord.MessageEmbed()
    .setColor('BLURPLE')
    .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL({ dynamic: true})})
    .setFooter({ text: 'Evils Code Ekonomi', iconURL: client.user.avatarURL()})
   .addFields([
     {
       name: '❤ Youtuber',
       value: 'Kameran kötüyse kırıcı yorumlar alabilirsin\n`ev!çalış youtuber`'
     }, {
       name: '👨‍🍳 Burger King',
       value: 'Çalıştıkça daha fazla kazanırsın!\n`ev!çalış burgerking`'
     }, {
       name: '🍟 Getir Kuryesi',
       value: 'Kazanmak için güzel bir iş kuryeler adına zor olmalı!\n`ev!çalış kurye`'
     }, {
       name: '🎶 Müzikçi',
       value: 'Müzik yapmayı biliyorsan çok zevkli bir iş!\n`ev!çalış müzikçi`'
     }, {
       name: '📷 Fotoğrafçı',
       value: 'Düğün fotoğrafları çekerek iyi para kazandırabilir\n`ev!çalış fotoğrafçı`'
     },
     {
       name: '🖼 Çizer',
       value: 'Çizer olarak işe başla çizimin iyiyse belki kanazamazsın şans\n`ev!çalış çizer`'
     }
   ])
  
    let user = await model.findOne({ id: message.author.id })
    if(!args[0]) return message.channel.send({ embeds:[embedcalis]})
   
    if(args[0] === "youtuber") {
        let somebalık = ["Cemre", "Enes", "İsmail", "Levent"]
  let somerandom = Math.floor(Math.random() * somebalık.length)
  let somepara = Math.floor(Math.random() * 60)
      if(!user){
      new model({
        id: message.author.id,
        para: somepara,
        bankapara: 0,
        bankaalan: 1000,
        tufek: false,
        kamera: false
      }).save()
        return message.reply(`Youtuber olarak çalıştın ve ${somepara} kazandın.\n**Yorumlar**\n${somerandom}: Videonun kalitesi çok kötü!`)
      }
      if(user.kamera === true) {
          let somelets = Math.floor(Math.random() * 300)
          let sa = parseInt(user.para)
          await user.updateOne({ para: sa += somelets})
         return message.reply(`Youtuber olarak çalıştın ve ${somepara} kazandın.\n**Yorumlar**\n${somerandom}: Videonun kalitesi baya iyi!`)
      }
      else {
                  let sa = parseInt(user.para)
          await user.updateOne({ para: sa += somepara})
         return message.reply(`Youtuber olarak çalıştın ve ${somepara} kazandın.\n**Yorumlar**\n${somerandom}: Videonun kalitesi çok kötü!`)
      }
  
    }
     if(args[0] === "burgerking") {
        let somepara = Math.floor(Math.random() * 250)
      if(!user){
      new model({
        id: message.author.id,
        para: somepara,
        bankapara: 0,
        bankaalan: 1000,
        tufek: false,
        kamera: false
      }).save()
        return message.reply(`Burger kingde çalıştın ve müşteriler çok memmun! ${somepara} kazandın!`)
      } else {
        let sa = parseInt(user.para)
        await user.updateOne({ para: sa += somepara})
         return message.reply(`Burger kingde çalıştın ve müşteriler çok memmun! ${somepara} kazandın!`)
      }
    }
     if(args[0] === "kurye") {
              let somepara = Math.floor(Math.random() * 250)
      if(!user){
      new model({
        id: message.author.id,
        para: somepara,
        bankapara: 0,
        bankaalan: 1000,
        tufek: false,
        kamera: false
      }).save()
        return message.reply(`Kurye olarak çalıştın ve müşteriler çok memmun! ${somepara} kazandın!`)
      } else {
        let sa = parseInt(user.para)
        await user.updateOne({ para: sa += somepara})
         return message.reply(`Kurye olarak çalıştın ve müşteriler çok memmun! ${somepara} kazandın!`)
      }
    }
     if(args[0] === "müzikçi") {
              let somepara = Math.floor(Math.random() * 250)
      if(!user){
      new model({
        id: message.author.id,
        para: somepara,
        bankapara: 0,
        bankaalan: 1000,
        tufek: false,
        kamera: false
      }).save()
        return message.reply(`Müzikçi çalıştın ve herkes müziğine bayıldı! ${somepara} kazandın!`)
      } else {
        let sa = parseInt(user.para)
        await user.updateOne({ para: sa += somepara})
        return message.reply(`Müzikçi çalıştın ve herkes müziğine bayıldı! ${somepara} kazandın!`)
      }
      
    }
     if(args[0] === "fotoğrafçı") {
                    let somepara = Math.floor(Math.random() * 250)
      if(!user){
      new model({
        id: message.author.id,
        para: somepara,
        bankapara: 0,
        bankaalan: 1000,
        tufek: false,
        kamera: false
      }).save()
        return message.reply(`Fotoğrafçı çalıştın ve düğün fotoğrafı çektiren kişiler buna bayıldı! ${somepara} kazandın!`)
      } else {
        let sa = parseInt(user.para)
        await user.updateOne({ para: sa += somepara})
       return message.reply(`Fotoğrafçı çalıştın ve düğün fotoğrafı çektiren kişiler buna bayıldı! ${somepara} kazandın!`)
      }
    }
     if(args[0] === "çizer") {
                          let somepara = Math.floor(Math.random() * 250)
      if(!user){
      new model({
        id: message.author.id,
        para: somepara,
        bankapara: 0,
        bankaalan: 1000,
        tufek: false,
        kamera: false
      }).save()
        return message.reply(`Çizer çalıştın ve resimler instagramda populer oldu! ${somepara} kazandın!`)
      } else {
        let sa = parseInt(user.para)
        await user.updateOne({ para: sa += somepara})
       return message.reply(`Çizer çalıştın ve resimler instagramda populer oldu! ${somepara} kazandın!`)
      }
    } 
    
    if(!args[0]){
     return message.channel.send({ embeds:[embedcalis]})
    }
      
  },
};