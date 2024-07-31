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
    .setDetails('≡;- ꒰ ° ɴᴀᴠɪᴀ ꒱ 💛') // Details without time
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1097132368441122879/1267874880049643560/7b98b0c22e972190b262d8713e97e9f4.png?ex=66ab08bf&is=66a9b73f&hm=fc993bc98dc9e2381e1446e7e6e8e0cf947e9dbeb8cac353f2b3b1ba18b47c56&') // Large image link
    .setAssetsLargeText('･ﾟ✧*:･ﾟ  ᴅᴏ ɴᴏᴛ ᴅɪsᴛᴜʀʙ') // Text when you hover over the large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1097132368441122879/1268147215839264809/60.png?ex=66ab5da1&is=66aa0c21&hm=cdb43bec5ae54a39d4b3bd422ce48e0d2f5a87ef7c60a8672f923e2c4be5ef78&') // Small image link
    .setAssetsSmallText(' ') // Text when you hover over the small image
    .addButton(' ', 'https://www.youtube.com/')
    .addButton(' ', 'https://www.youtube.com/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); // dnd, online, idle, offline
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
