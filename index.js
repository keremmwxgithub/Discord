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
    .setName(' Since 1945 😉 ')
    .setDetails('`≡;- ꒰ ° ᴋᴇʀᴇᴍᴍ  ꒱ 🖤') // Details without time
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1097132368441122879/1276841017676664843/64a4bb8cd0e2bbc28bf6ffa779083795.gif?ex=66cafe5d&is=66c9acdd&hm=c79404bb2f45ac618d0439793237e21fc7f64b73e1e8f5adb35a4e9003627e8e&') // Large image link
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
