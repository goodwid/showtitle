const irc = require('irc-framework');
const getTitle = require('./lib/extract-title');
const isUrl = require('is-http-url');
const dotenv = require('dotenv');

dotenv.config();

const { HOST, NICK, USERNAME, GECOS, CHANNEL } = process.env;

const bot = new irc.Client()
const connectOptions = {
  host: HOST,
  port: 6667,
  nick: NICK,
  username: USERNAME,
  encoding: 'utf-8',
  gecos: GECOS,
};

bot.connect(connectOptions);

const channels = [];
bot.on('registered', () => {
  const channel = bot.channel(CHANNEL);
  channels.push(channel);
  channel.join();
  channel.updateUsers(() => console.log(channel.users));
});

bot.on('message', e => {
  console.log(`<${e.nick}> ${e.message}`);
  parse(e);
});

const parse = async (input) => {
  const { type, nick, ident, hostname, target, group, message, tags, time, account, reply } = input;
  if(message.includes('http')) {
    console.log('http detected, parsing. . .');
    const msgBits = message.split(' ');
    const links = msgBits.filter(isUrl);
    console.log(links);
    if(links.length > 0) {
      const title = await getTitle(links[0])
      bot.action(target, `<Title> ${title}`);
    }
  }
};

const toChannel = (text, name) => {
  const channel = channels.find(c => c.name === name);
  console.log(channel);
  channel.say(text);
};
