const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "514913543666139138"; // ايدي السررفر
var channel = "514913891176677388";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('احبكم فراس جيمر  :heart: , احبكم فراس جيمر  :heart: , احبكم فراس جيمر  :heart: , احبكم فراس جيمر  :heart: , احبكم فراس جيمر  :heart: , احبكم فراس جيمر  :heart: , احبكم فراس جيمر  :heart: , احبكم فراس جيمر  :heart: , احبكم فراس جيمر  :heart: , احبكم فراس جيمر  :heart: , احبكم فراس جيمر  :heart: , احبكم فراس جيمر  :heart: , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:  , احبكم فراس جيمر  :heart:')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|`ADMINISTRATOR`ليس لديك صلاحيات`');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });



client.on('message', message => { 
       var prefix = '-';
    if (message.content.startsWith(prefix + 'allemoji')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ الايموجيات يا\'حلو')
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM')
            .setDescription(List) 
            .setTimestamp() 
            .setFooter(message.guild.name)
        message.channel.send(EmojiList) 

       
         
    }
});



client.login(process.env.BOT_TOKEN);
