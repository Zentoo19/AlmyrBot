const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = "*";
 
bot.login('NTcwMjkyODY2MDk0NDY1MDI1.XL9J_w.jFxh77Zx9fyespZjpTmj7ytmn04');
bot.on("ready", function() {

    bot.user.setActivity(bot.users.size + " personnes. 👀", {type: "WATCHING"});
});

bot.on('message', message =>{
    if(message.content === "Almyr"){
        message.channel.sendMessage('AlmyR est le nom de notre faction qui date de minecraft :heart:');
        console.log('Almyr');
    
    }
    if(message.content === "Korato"){
        message.channel.send('Trop moche ce korato')
    }
    if(message.content === prefix + 'help'){
        var embed = new Discord.RichEmbed()
            .setTitle("AIDE")
            .setDescription("Voici la page d'aide.")
            .addField('*clear <k>', true)
            .addField('Permet de clear le chat, k € R+*')
            .setFooter('Invitez vos amis ! https://discord.gg/8PusmvB')
            .setColor('0xFF0000')
            message.channel.sendMessage(embed);
    }
    
});
    
    




// MESSAGE DE BIENVENUE ET SYSTEME D'AUTO-ROLE

bot.on('guildMemberAdd', member =>{

    member.guild.channels.get('520286655077154827').sendMessage(':tada: Bienvenue à ' + member.user + ' sur le discord de la **AlmyR** ! Oublie pas de regarder le <#570624324416045091>.' + 'Nous sommes maintenant ' + member.guild.memberCount + '.');
    console.log('+1');
    member.addRole('360088694436265984');
});

// Message de départ
bot.on('guildMemberRemove', member =>{

    member.guild.channels.get('520286655077154827').sendMessage(member.user + ' a décidé de partir ! :cry: Nous sommes maintenant ' + member.guild.memberCount);
    console.log('-1')
});

// Clear le tchat

bot.on('message', message =>{
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLowerCase() === prefix + 'clear'){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission de clear le chat !")
        let count = args[1]
        if(!count) return message.channel.send("Veuillez indiquer un nombre de message à supprimer")
        if(isNaN(count)) return message.channel.send("Ce n'est pas un nombre !")
        if (count < 1 || count > 101) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1)
        message.channel.send("Vous avez supprimé " + count +" messages")
        message.channel.bulkDelete(1)
    
}
});
