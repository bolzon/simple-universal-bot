
const builder = require('botbuilder');
const connector = new builder.ConsoleConnector().listen();
const bot = new builder.UniversalBot(connector);

// bot memory (state)

bot.dialog('/', [
  (session, args, next) => {
    if (!session.userData.name) {
      session.beginDialog('/ask_name');
    }
    else {
      next();
    }
  },
  session => {
    session.send('Hello %s', session.userData.name);
  }
]);

bot.dialog('/ask_name', [
  session => {
    builder.Prompts.text(session, 'Hi, whats is your name?');
  },
  (session, results) => {
    session.userData.name = results.reponse;
    console.log(session);
    session.endDialog();
  }
]);
