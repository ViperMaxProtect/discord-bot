const Discord = require("discord.js");
const Client = new Discord.Client();
const ytdl = require('discord-ytdl-core')
const pagination = require('discord.js-pagination');
const prefix = "$";
const EventEmitter = require('events');
 /*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* Voici un bot anti RAID ! Celui ci est le premier que je fais ! pour savoir comment le modifier , rendez-vous dans Lisez-MOI !  */


 /* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬HELP▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
 Client.on('message', message => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'help')){
      const Bot = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle("Commandes  !")
      .addField("**__🌹COMMANDE🌹  : __**", "\u200B")
      .addField("**・__$help__**", "- Vous donne la liste des commandes")
      .addField("**・__$clear__**", "- Clear un certain nombre de message")
      .addField("**・__$ban__**", "- Banni un membres")
      .addField("**・__$lock__**", "- Permet de lock un salon")
      .addField("**・__$unlock__**", "- Permet d'unlock un salon")
      .addField("**· __$perm__**", "- Vous dit combien de membres ont la perm ADMIN")
      .setTimestamp()

      const InfoBot = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle("Info Bot")
      .addField("**__Create By ToKu__**", "\u200B")
      .addField("**·__Son discord | __** ", "- https://discord.gg/xgYassnzPt ")
      .addField("**·__Version | __**", "- 1.0 ( PREMIERE VERSION DU BOT ANTI RAID (Sinon c'est le bot V3))")
      .addField("**·__Status | __**", "- Fini ")
      .setTimestamp()

    

      const pages = [
          Bot,
          InfoBot
  ]
  
const emojiList = ["◀️", "▶️"];
 
const timeout = '120000';

pagination(message, pages, emojiList, timeout)
  }
}) 

                            /* TOUTS LES ANTI RAID  */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ANTILINK▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬*/
Client.on("message", message => {

  if (message.content.includes("discord.gg/") || message.content.includes("discordapp/invite") || message.content.includes("discord.io") || message.content.includes("https://discord.gg/"))
  if (message.member.roles.cache.has("926069961082933261") || message.member.roles.cache.has("926069961082933261")){
      return
  }else{
      message.delete()
      message.reply("**Tu n'a pas le droit de __poster des liens discord __ ! **")
      message.member.guild.channels.cache.find(channel => channel.id == "957570492242460682").send({embed: {title: 'LIEN DISCORD',color: '#2f3136', description: `**Un membre [ ${ message.author.tag} ] vient de poster un lien ( LIEN SUPPRIME ) ! aller dans le salon [ ${ message.channel} ] en question pour voir qui a posté le lien **`}});
  }
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ANTISCAM▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
Client.on("message", message => {

  if (message.content.includes("discord.gift") || message.content.includes("https://discord.gift/nitro") || message.content.includes("discord.gift/nitro") || message.content.includes("https://discord.gift"))
  if (message.member.roles.cache.has("926069961082933261") || message.member.roles.cache.has("926069961082933261")){
      return
  }else{
      message.delete()
      message.reply("**Tu n'a pas le droit de __poster des liens discord __ ! **")
      message.member.guild.channels.cache.find(channel => channel.id == "957570764528308274").send({embed: {title: 'SCAM ',color: '#2f3136', description: `**Un membre [ ${ message.author.tag} ] vient de poster un lien ( LIEN SUPPRIME ) ! aller dans le salon [ ${ message.channel} ] en question pour voir qui a posté le lien **`}});
  }
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ANTIGROSMOTS▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
Client.on("message", message => {

  if (message.content.includes("discord.gift") || message.content.includes("ntm") || message.content.includes("baisse ta mère") || message.content.includes("fdp"))
  if (message.member.roles.cache.has("931853044348514304") || message.member.roles.cache.has("931853044348514304")){
      return
  }else{
      message.delete()
      message.reply("**Tu n'a pas le droit de __poster des liens discord __ ! **")
      message.member.guild.channels.cache.find(channel => channel.id == "957570966664400976").send({embed: {title: 'INSULTE',color: '#2f3136', description: `**Un membre [ ${ message.author.tag} ] vient de poster un lien ( LIEN SUPPRIME ) ! aller dans le salon [ ${ message.channel} ] en question pour voir qui a posté le lien **`}});
  }
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ANTI MASS BAN▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
const numberBanMap = new Map();
Client.on("guildBanAdd", async (guild, user) => {
  const audit = (await guild.fetchAuditLogs()).entries.first();
  if (audit.action === 'MEMBER_BAN_ADD') {
if(numberBanMap.has(audit.executor.id)) {
  const userData = numberBanMap.get(audit.executor.id);
  let {nBan} = userData;
  nBan+=1;
  userData.nBan = nBan;
  numberBanMap.set(audit.executor.id, userData);
  if (nBan === 2) {
      const rolesStaff = [''];
      guild.member(audit.executor.id).ban({reason: 'Anti mass ban'})
  }
}
else {
  numberBanMap.set(audit.executor.id, {
      nBan: 1
  });
  setTimeout(() => {
      numberBanMap.delete(audit.executor.id);
  }, 10000)
}
  }
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ANTI MASS KICK▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
const numberKickMap = new Map();
Client.on("guildMemberRemove", async member => {
  const audit = (await member.guild.fetchAuditLogs()).entries.first();
  if (audit.action === 'MEMBER_KICK') {
if(numberKickMap.has(audit.executor.id)) {
  const userData = numberKickMap.get(audit.executor.id);
  let {nKick} = userData;
  nKick+=1;
  userData.nBan = nKick;
  numberKickMap.set(audit.executor.id, userData);
  if (nBan === 2) {
      const rolesStaff = [''];
      member.guild.member(audit.executor.id).ban({reason: 'Anti mass kick'})
  }
}
else {
  numberKickMap.set(audit.executor.id, {
      nKick: 1
  });
  setTimeout(() => {
      numberKickMap.delete(audit.executor.id);
  }, 10000)
}
  }
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ANTI MASS WEBHOOK▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
Client.on("webhookUpdate", async channel => {
  const audit = (await channel.guild.fetchAuditLogs()).entries.first();
  if (audit.action === 'WEBHOOK_CREATE') {
      if (audit.executor.id === '') return;
      (await channel.fetchWebhooks(audit.id)).first().delete();
      member.guild.member(audit.executor.id).ban({reason: 'Anti weebHook'})

  } 
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ANTI SPAM▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
const usersSpamMap = new Map();

Client.on("message", async message => {
  if (usersSpamMap.has(message.author.id)) {
    const userData = usersSpamMap.get(message.author.id);
    let {msgCount} = userData;
    msgCount += 1
    userData.msgCount = msgCount;
    usersSpamMap.set(message.author.id, userData)
    if (msgCount >= 6) message.delete();
    if (msgCount >= 9) message.guild.member(message.author.id).ban({reason: 'Spam'})
  }
  else {
    usersSpamMap.set(message.author.id, {
      msgCount: 1
    })
    setTimeout(() => {
      usersSpamMap.delete(message.author.id);
    }, 10000);
  }
}) 
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ANTI MASS EVERYONE▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
const usersEveryoneMap = new Map();

Client.on("message", message => {
  if(message.mentions.everyone) {
    if(usersEveryoneMap.has(message.author.id)) {
      const userData = usersEveryoneMap.get(message.author.id);
      let {numberEveryoneSent} = userData
      numberEveryoneSent += 1;
      userData.numberEveryoneSent = numberEveryoneSent
      usersEveryoneMap.set(message.author.id, userData)
      if (numberEveryoneSent >= 2) {
         message.delete();
      }
      if (numberEveryoneSent === 3) {
        message.guild.member(message.author.id).ban({reason: 'Abu de mention everyone'})
      }
    }
    else {
      usersEveryoneMap.set(message.author.id, {
        numberEveryoneSent: 1
      });
      setTimeout(() => {
        usersEveryoneMap.delete(message.author.id);
      }, 20000);
    }
  }
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬DETECTION DOUBLE COMPTE▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
Client.on("guildMemberAdd", async member => {
    

  const user = Client.users.cache.get(member.user.id);

  if((Date.now() - user.createdAt) <= 864000000) {
      return member.ban({reason: "Déctection de double compte"})
      }
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */




                            /*   TOUTES LES COMMANDES */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬PERM ADMIN▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
Client.on("message", message => {
  if(message.content.startsWith(prefix + "perm")) {
  if(!message.member.hasPermission("ADMINISTRATOR")) return;

  var str_filtrer = message.guild.members.cache.filter(member => member.hasPermission("ADMINISTRATOR"))
  var str_map = str_filtrer.map(m => `${m.user.id}: ${m.user.username},`).join("\n")
  message.channel.send(`Liste des membres ayant les permissions \`ADMINISTRATOR\` (**${str_filtrer.size}**)`)
  for(let i = 0; i < str_map.length; i += 1995) {
      const str_content = str_map.substring(i, Math.min(str_map.length, i + 1995));
      message.channel.send(`\`\`\`json\n${str_content}\`\`\``);
  }
}
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬CLEAR▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
Client.on("message", message => {
  if (!message.member) return false
  if(message.member.permissions.has("MANAGE_MESSAGES")){
      if(message.content.startsWith(prefix + "clear")){
          let args = message.content.split(" ");
          
          if(args[1] == undefined){
              message.reply(" Nombre de __message non ou mal __ défini . ")
          }
          else {
              let number = parseInt(args[1]);

              if(isNaN(number)){
                  message.reply("Nombre de __ message non ou mal __ défini ")
              }
              else {
                  message.channel.bulkDelete(number).then(messages => {
                      message.author.send(" Supression de " + messages.size + " message réussi !");
                  }).catch(err => {
                      console.log("Erreur de clear :" + err)
                  })
              }
          }
      }
  }
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬LOCK + UNLOCK + LOGS▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
//Lock:
Client.on('message', async message => {
  if (message.content.startsWith(prefix + 'lock')){
         if (!message.member.hasPermission('MANAGE_CHANNELS')) {
 return message.channel.send("Vous n'avez pas les permissions")
 }
 const channel = message.mentions.channels.first()
 if(!channel) return message.channel.send('Veuillez fournir un channel !')
 channel.overwritePermissions([
   {
      id: message.guild.id,
      deny : ['SEND_MESSAGES'],
   },
  ],);
 const embed = new Discord.MessageEmbed()
 .setTitle("Channel Updates")
 .setDescription(`${channel} a été verouillé`)
 .setColor("#2f3136");
 await message.channel.send(embed);
 message.delete();
 message.guild.channels.cache.find(channel => channel.id === "957571651690696814").send({embed: {title: 'LOCK', color: '#2f3136', description: `${channel} vien d'être verouillé`}})
 
  }

  //Unlock
if (message.content.startsWith(prefix + 'unlock')){
 if (!message.member.hasPermission('MANAGE_CHANNELS')) {
 return message.channel.send("Vous n'avez pas les permissions")
 }
 const channels = message.mentions.channels.first()
 if(!channels) return message.channel.send('Veuillez fournir un channel !')
 channels.overwritePermissions([
   {
      id: message.guild.id,
      allow : ['SEND_MESSAGES'],
   },
  ],);
 const embed = new Discord.MessageEmbed()
 .setTitle("Channel Updates")
 .setDescription(`${channels} a été deverouillé`)
 .setColor("#2f3136");
 await message.channel.send(embed);
 message.guild.channels.cache.find(channel => channel.id === "957571746435850280").send({embed: {title: 'UNLOCK', color: '#2f3136', description: `${channel} vien d'être deverouillé`}})
 message.delete();      
}
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬BAN▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
Client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;

  if (message.member.hasPermission("ADMINISTRATOR")) {
    if (message.content.startsWith(prefix +"ban")) {
      let mention = message.mentions.members.first();

      if (mention == undefined) {
        message.reply("**Membre __non ou mal__ mentionné**");
      }
      else {
        if (mention.bannable) {
          mention.ban();
          message.channel.send(mention.displayName + "a été __banni avec succès__");
        }
        else {
          message.reply("__Imposible__ de bannir ce membre !")
        }
      }
    }
  }
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */



                            /* TOUTES LES LOGS */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬LOGS  BANS▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
Client.on("guildBanAdd", function (guild, user) {
  const logChannel = Client.channels.cache.get('957571857387749407')
  
  const logs = new Discord.MessageEmbed()
      .setColor('#2f3136')
      .setDescription(`**${user.username} vien d'etre ban du serveur**`)
      .setTimestamp()
 logChannel.send(logs);
}) 
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬LOGS DELETE D'UNE INVITE▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
Client.on("inviteDelete", async invite => {
  const LogsInviteDelete = new Discord.MessageEmbed()
  .setColor('#2f3136')
  .setAuthor('Suppresion d\'une invitation', invite.guild.iconURL({dynamic: true}))
  .addField('Lien d\'invitation suprimé',`discord.gg/${invite.code}`)

  Client.guilds.cache.get('926069960697081919').channels.cache.get('957572027911385088').send(LogsInviteDelete)
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬LOGS CREATION D'UNE INVITE▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
Client.on("inviteCreate", async invite => {
  const LogsInviteCreate = new Discord.MessageEmbed()
  .setColor('#2f3136')
  .setAuthor(invite.inviter.username, invite.inviter.displayAvatarURL({dynamic: true}))
  .addField('Lien d\'invitation crée',`discord.gg/${invite.code}`)

  Client.guilds.cache.get('926069960697081919').channels.cache.get('957572140754939965').send(LogsInviteCreate)
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */


/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬LOGS DELETE D'UN ROLE▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
Client.on("roleDelete", async role => {
  const LogsRolesDelete = new Discord.MessageEmbed()
  .setColor('#2f3136')
  .setAuthor("Une modification à été faites !")
  .addField('Rôle suprimé', role.name)

  Client.guilds.cache.get('926069960697081919').channels.cache.get('957572277799637032').send(LogsRolesDelete)
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */


/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬LOGS CREATION D'UN ROLE▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
Client.on("roleCreate", async role => {
  const LogsRolesCreate = new Discord.MessageEmbed()
  .setColor('#2f3136')
  .setAuthor("Une modification à été faites !")
  .addField('Rôle crée', role.name)

  Client.guilds.cache.get('926069960697081919').channels.cache.get('957572418182996088').send(LogsRolesCreate)
})
/*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... *

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬START BOT▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
  Client.login(process.env.TOKEN);
  console.log("ON");
 /*  SINIX LEAKS OFFICIEL 2021 - 2022 ® DISCORD |         https://discord.gg/xgYassnzPt .... */
