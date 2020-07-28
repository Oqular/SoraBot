const { Client, RichEmbed } = require('discord.js');
const { red, green, blue, yellow, cyan } = require('chalk');
const bot = new Client();
const settings = require('./settings.json');

console.log(yellow('============================================================================'));
console.log(cyan(`[COMMAND LIST] :: ${settings.prefix}rr :: Restarts bot.`));
console.log(cyan(`[COMMAND LIST] :: ${settings.prefix}ff :: sends the exact message to yourself.`));
console.log(cyan(`[COMMAND LIST] :: ${settings.prefix}ori :: fetches mastery data from OriannaBot.`));
console.log(cyan(`[COMMAND LIST] :: ${settings.prefix}music :: crashes the bot, does nothing`));

bot.on('ready', ()=>{
    console.log(green(`[SELF BOT] :: ${bot.user.tag} is online and ready`));
    console.log(green(`[SELF BOT] :: my prefix is: ${settings.prefix}`));
    console.log(yellow('============================================================================'));
});

bot.on('message', async(msg)=>{
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(settings.prefix.length);
    let args = msg.content.split(" ").slice(1);
	let ch = msg.channel.id;
    if(msg.content.startsWith(settings.prefix) && msg.author.id === settings.ID){
        console.log(cyan(`[COMMAND RAN] :: ${msg.content}`));
    }
	if(msg.author.id === '244234418007441408'){
		let name = [];
		name.push('```');
		for(let e of msg.embeds){
			name.push(e.title);
			for(let f of e.fields){
				let mContent = f.name.split("  ")[1];
				let mContent1 = f.value.split(">")[1];
				name.push(mContent + ' - ' + mContent1);
			}
		}
		name.push('```');
		msg.channel.id = '602934992418373642';
		msg.channel.send(name);
		msg.channel.id = ch;
	}
	if(cmd === 'ff'){
		let mContent = args.slice(0).join(" ");
		bot.fetchUser(msg.author,false).then(user => {
        user.send(mContent)
	})}	
	if(cmd === 'ori'){
		let mContent = args.slice(0).join(" ");
		bot.fetchUser('244234418007441408',false).then(user => {
		user.send(mContent)
		})		
	}
	if(cmd === 'music'){
		msg.channel.join();
	}
    if(cmd === 'rr'){
        process.exit();
    }
});
bot.login(settings.token);