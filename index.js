const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('123')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=NJptMSsS4kU') // Must be a YouTube video link
    .setState('✧˚ · . ᴀᴄᴛɪᴠᴇ 𝟸𝟺/𝟽')
    .setName('🌈')
    .setDetails('≡;- ꒰ ° ᴡᴀɴᴅᴇʀᴇʀ ꒱ 💙') // Details without time
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1097132368441122879/1269248018444582965/1373f30c92eec998997e8ab302bdb67b.png?ex=66af5ed5&is=66ae0d55&hm=857b39fc4cfba8b9aef05b40aedd07c40259e4d4d3be6e969b11731887cfdc33&') // Large image link
    .setAssetsLargeText('･ﾟ✧*:･ﾟ  ᴅᴏ ɴᴏᴛ ᴅɪsᴛᴜʀʙ') // Text when you hover over the large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1097132368441122879/1269248303137030197/20.png?ex=66af5f18&is=66ae0d98&hm=ced5d50d087e1c27d5f976cbf45c794722f93e3048798ae8c237317746c9895a&') // Small image link
    .setAssetsSmallText(' ') // Text when you hover over the small image
    .addButton(' ', 'https://www.youtube.com/')
    .addButton(' ', 'https://www.youtube.com/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); // dnd, online, idle, offline
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
