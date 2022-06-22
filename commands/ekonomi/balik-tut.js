const model = require('../../models/ekonomi.js')
const Discord = require('discord.js')

module.exports = {
  name: "balik",
  aliases: ['balık', 'balıktut', 'balık-tut', 'balik-tut', 'baliktut'],
  category: "eco",
  cooldown: 20,
  description: "Shows Bot Response delay and Websocket latency",
  execute: async (client, message, args) => {
   
    let user = await model.findOne({ id: message.author.id })
      let somepara = Math.floor(Math.random() * 150)
    if(!user){
      new model({
        id: message.author.id,
        para: somepara,
        bankapara: 0,
        bankaalan: 1000,
        tufek: false,
        kamera: false
      }).save()
  let somebalık = ["Uskumru", "Lüfer", "Levrek", "Hamsi", "Çipura"]
  let somerandom = Math.floor(Math.random() * somebalık.length)

    
    return message.channel.send(`Balık tuttun ve ${somebalık[somerandom]} geldi, bunu ${somepara}'ya sattın, artık ${somepara} paran var!`)
    }
    
   let somebalık = ["Uskumru", "Lüfer", "Levrek", "Hamsi", "Çipura"]
  let somerandom = Math.floor(Math.random() * somebalık.length)
       let letsgo = parseInt(user.para)
    await user.updateOne({ para: letsgo += somepara})
    return message.channel.send(`Balık tuttun ve ${somebalık[somerandom]} geldi, bunu ${somepara}'ya sattın, artık ${somepara + user.para} paran var!`)
  },
};