
const builder = require('botbuilder');
const connector = new builder.ConsoleConnector().listen();
const bot = new builder.UniversalBot(connector);

// simple dialogs

bot.dialog('/', session => {
  session.send('Hello');
  session.beginDialog('/howare');
});

bot.dialog('/howare', (session, args, next) => {
  session.send('How are you?');
  session.beginDialog('/howare');
});

bot.dialog('/letstalk', (session, args, next) => {
  session.send(`Let's talk`);
  session.endConversation();
});

