
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Strix™️ Yardım Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(` Strix™️ botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Uyar__`,` \`${prefix}genel\``,true)
.addField(`__Uyarı Sil__`,` \`${prefix}uyar\` Belirtilen Kişiyi Uyarır`,true)
.addField(`__Guard Komutları__`,` \`${prefix}uyarı-sil\` Belirtilen Kişinin Uyarılarını Siler `,true)
.addField(`__Sunucu Komutları__`,` \`${prefix}uyarılar\` Belirtilen Kişinin Uyarılarını Gösterir`,true)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | Strix™️'yi Sunucunuza Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://images-ext-1.discordapp.net/external/lcFjuhH3D4Bu8GGzSImtxAK4QOTA96y6lcOozcvD-qI/%3Fwidth%3D1080%26height%3D433/https/media.discordapp.net/attachments/750860556226920559/797924587026382878/original.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardımuyar","helpuyar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardımuyarı'
  }; 
  