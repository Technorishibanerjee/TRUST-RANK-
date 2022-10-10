const { MessageEmbed } = require("discord.js");
const colors = require("colors");
const client = require(".")
const ee = require("./settings/embed.json");


async function logger(cid, embed) {
  try {
     const log = client.channels.cache.get(cid)
    await log.send({embeds: [embed]})
  } catch (error) {
    console.log(colors.red(error))
  }
}

function successEmbed(title, description) {
  try {
    let embed = new MessageEmbed()
    .setAuthor({name: `${title}`, iconURL: "https://cdn.discordapp.com/emojis/982377244439760986.webp?size=128&quality=lossless"})
  .setTitle(`${title}`)
  .setDescription(`${description}`)
  .setColor(ee.embed_color)
  .setFooter({text: "Shibaaaaaa", iconURL: ee.embed_footericon});
    return embed;
  } catch (error) {
    console.log(colors.red(error))
  }
}
function failEmbed(title, description) {
  try {
    let embed = new MessageEmbed()
  .setAuthor({name: `${title}`, iconURL: 'https://cdn.discordapp.com/emojis/982377277801234452.webp?size=128&quality=lossless'})

  .setDescription(`${description}`)
  .setColor(ee.embed_wrongcolor)
  .setFooter({text: "Reco Bot", iconURL: ee.embed_footericon});
    return embed;
  } catch (error) {
    console.log(colors.red(error))
  }
}

function opEmbed(title, description, footer) {
  try {
    let embed = new MessageEmbed()
    .setAuthor({name: "Reco Bot", iconURL: ee.embed_footericon})
    .setTitle(`${title}`)
    .setDescription(`${description}`)
    .setColor("#ffffff")
    .setFooter({text: `${footer}`, iconURL: ee.embed_footericon});

    return embed;
  } catch (error) {
    console.log(colors.red(error))
  }
}
function randNum() { 
  let code = '';
  let dict = '0123456789';
  for(var i = 0; i < 6; i++){
      code = code + dict.charAt(Math.floor(Math.random() * dict.length));
  }
  return code;
}


function randToken() { 
  let code = '';
  let dict = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(var i = 0; i < 40; i++){
      code = code + dict.charAt(Math.floor(Math.random() * dict.length));
  }
  return code;
}


module.exports.randToken = randToken;
module.exports.randNum = randNum;
module.exports.logger = logger;
module.exports.successEmbed = successEmbed;
module.exports.failEmbed = failEmbed;
module.exports.opEmbed = opEmbed;