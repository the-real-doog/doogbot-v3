const Discord = require('discord.js');
const bot = new  Discord.Client

const token = process.env.TOKEN;

require('dotenv/config');

const http = require('http');
const port = process.env.PORT || 3000;
http.createServer().listen(port);

bot.on('ready', () =>{
    console.log('online');

    bot.user.setActivity('your mom', { type: 'WATCHING'}).catch(console.error);
})

bot.on('message', message=>{

if (message.content.includes('karkat')) {
    const Attatchment = ('<:peepee:611334383013462016>');
    message.channel.send(Attatchment);
}

if (message.content.includes('angry')) {
    const Attatchment = ('<:peepee:611334383013462016>');
    message.channel.send(Attatchment);
}

if (message.content.includes('bruh moment')) {
    message.channel.send('gamer');
}

if (message.content === '^nipple') {
    message.channel.send('not quite');
}

if (message.content === '^help') {
    message.channel.send('*shoosh paps you*');
}

if (message.content === '^commands') {

    const embed = new Discord.RichEmbed()
                         .setTitle('commands')
                         .setColor(0x45de12)
                         .setThumbnail('https://cdn.discordapp.com/attachments/609754251467685910/609829799644626944/unknown.png')
                         .addField("^help",
                         "get some help")
                         .addField("^nipple",
                         "gamer time")
                         .addField("^pfp",
                         "gives you the pfp of you")
                         message.channel.send({embed});
                         

}

if (message.content === '^pfp') {
    message.channel.send(message.author.avatarURL);
}

if (message.content.includes('honk')) {
    message.channel.sendFile('./hOnK.ogg');
}

});

bot.on('error', err => {
    console.log(err);
});

bot.login(token);