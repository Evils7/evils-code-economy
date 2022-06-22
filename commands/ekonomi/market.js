const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "market",
  category: "eco",
  cooldown: 5,
  description: "Shows Bot Response delay and Websocket latency",
  execute: async (client, message, args) => {
    let e = new MessageEmbed()
    .setColor('BLURPLE')
    .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL({ dynamic: true})})
    .setFooter({ text: 'Evils Code Ekonomi', iconURL: client.user.avatarURL()})
    .setDescription('Satın almak için `ev!satınal <item>`')
    .addFields([
      {
        name: '🗡 Tüfek',
        value: '800TL\n`ev!satınal tüfek`'
      }, {
        name: '📸 Kamera',
        value: 'İyi Kamera: 700TL\n`ev!satınal iyi-kamera`'
      }
    ])
    message.channel.send({ embeds:[e]})
  },
};