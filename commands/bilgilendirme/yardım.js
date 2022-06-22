const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "yardım",
  category: "info",
  cooldown: 5,
  description: "Shows Bot Response delay and Websocket latency",
  execute: async (client, message, args) => {
    let e = new MessageEmbed()
    .setColor('BLURPLE')
    .addField('Bilgilendirme', `${client.commands.filter(a => a.category === "info").map(a => `\`${a.name}\``).join(', ')}`)
    .addField('Ekonomi', `${client.commands.filter(a => a.category === "eco").map(a => `\`${a.name}\``).join(', ')}`)
    .setAuthor({ name: message.author.username, iconURL:message.author.avatarURL({ dynamic: true})})
    .setFooter({ text:`Evils Code Ekonomi`, iconURL: client.user.avatarURL()})
    message.channel.send({ embeds:[e]})
  },
};