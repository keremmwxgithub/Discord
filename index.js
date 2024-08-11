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
    .setDetails('`≡;- ꒰ ° ɴɪʟᴏᴜ  ꒱ ❤️') // Details without time
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1097132368441122879/1272130921369178154/de3eb136fe74e4e4b9f80a77115a5a25.png?ex=66b9dbbe&is=66b88a3e&hm=b6964d0965c689d302d64a443b5f009d2bacea4a1653cfa856c2ccaa7a56938d&') // Large image link
    .setAssetsLargeText('･ﾟ✧*:･ﾟ  ᴅᴏ ɴᴏᴛ ᴅɪsᴛᴜʀʙ') // Text when you hover over the large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1097132368441122879/1272131406612660264/9c1ed9619bd2fef8ec83008f45d7d666.png?ex=66b9dc32&is=66b88ab2&hm=85fe208358ada5ce332f9b197a3321bf448a52e648abac38c66b5d619aa394ce&') // Small image link
    .setAssetsSmallText(' ') // Text when you hover over the small image
    .addButton(' ', 'https://www.youtube.com/')
    .addButton(' ', 'https://www.youtube.com/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); // dnd, online, idle, offline
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
