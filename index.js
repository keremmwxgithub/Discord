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
    .setURL('https://www.twitch.tv/sushisue') // Must be a YouTube video link
    .setState('✧˚ · . ᴀᴄᴛɪᴠᴇ 𝟸𝟺/𝟽')
    .setName('🌈')
    .setDetails('`≡;- ꒰ ° ʀᴀɪᴅᴇɴ sʜᴏɢᴜɴ ꒱ 💜') // Details without time
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1097132368441122879/1270727308776443955/6b663216955e50134bba3c796a4fc747.gif?ex=66b4c087&is=66b36f07&hm=b79e9ae3e465a371ff1b40b6fc5f6099859f1f0153ea4248941c2adfc1969e7a&') // Large image link
    .setAssetsLargeText('･ﾟ✧*:･ﾟ  ᴅᴏ ɴᴏᴛ ᴅɪsᴛᴜʀʙ') // Text when you hover over the large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1097132368441122879/1270727689581629557/6a7522cf61116b1885ce66722b15e4d4.png?ex=66b4c0e2&is=66b36f62&hm=585d11b16f6338176dcc2df0ecb8fd49f20b0c29be7d2d1d66d1ddd9042fe200&') // Small image link
    .setAssetsSmallText(' ') // Text when you hover over the small image
    .addButton(' ', 'https://www.youtube.com/')
    .addButton(' ', 'https://www.youtube.com/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); // dnd, online, idle, offline
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
