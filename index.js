const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=4yFiBhNIWYo') //Must be a youtube video link 
    .setState('✧˚ · . ᴀᴄᴛɪᴠᴇ 𝟸𝟺/𝟽')
    .setName('🌈')
    .setDetails(`≡;- ꒰ ° ᴋᴇʀᴇᴍᴍ ꒱ 💙 [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1100708631311286342/1260208426097704960/51d72b557abeff0637ed03bca82e1549.png?ex=668fcd8e&is=668e7c0e&hm=6c136b2c3e169b80cf48fce8c6404e385d46764c69746d370e1c16c01633c50c&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('･ﾟ✧*:･ﾟ  ᴅᴏ ɴᴏᴛ ᴅɪsᴛᴜʀʙ') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1100708631311286342/1259894561719849064/806acdf729a8ec7cc8117ae2abb2c048.png?ex=668d57bf&is=668c063f&hm=7a20a1cba56169d912ae2fc58d59358a874a84117ceaf29121a51f2e1cc8b2b4&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText(' ') //Text when you hover the Small image


  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
