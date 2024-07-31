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
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1097132368441122879/1267874880049643560/7b98b0c22e972190b262d8713e97e9f4.png?ex=66aa5fff&is=66a90e7f&hm=d2b382db62a293510d17668ea1a8501ca3da4eeb72c6f0a12648067d9b7e3e43&') // Large image link
    .setAssetsLargeText('･ﾟ✧*:･ﾟ  ᴅᴏ ɴᴏᴛ ᴅɪsᴛᴜʀʙ') // Text when you hover over the large image
    .setAssetsSmallImage(' ') // Small image link
    .setAssetsSmallText(' ') // Text when you hover over the small image
    .addButton(' ', 'https://www.youtube.com/')
    .addButton(' ', 'https://www.youtube.com/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); // dnd, online, idle, offline
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
