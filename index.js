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
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1097132368441122879/1269248018444582965/1373f30c92eec998997e8ab302bdb67b.png?ex=66b15915&is=66b00795&hm=c43296fbf55a41180090c14c84b97ccba9b57a2603b8e81db31e6677fe730f5c&') // Large image link
    .setAssetsLargeText('･ﾟ✧*:･ﾟ  ᴅᴏ ɴᴏᴛ ᴅɪsᴛᴜʀʙ') // Text when you hover over the large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1097132368441122879/1269248303137030197/20.png?ex=66b15958&is=66b007d8&hm=6e528f5c0d781260896bc5c7a218e042f9a066eb95f56f508ef881f41220bbfa&') // Small image link
    .setAssetsSmallText(' ') // Text when you hover over the small image
    .addButton(' ', 'https://www.youtube.com/')
    .addButton(' ', 'https://www.youtube.com/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); // dnd, online, idle, offline
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
