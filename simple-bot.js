
const builder = require('botbuilder');
const connector = new builder.ConsoleConnector().listen();
const bot = new builder.UniversalBot(connector);

// simple message

bot.dialog('/', session => {
  session.send('hello world');
});
