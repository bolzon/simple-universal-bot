
const builder = require('botbuilder');
const connector = new builder.ConsoleConnector().listen();
const bot = new builder.UniversalBot(connector);

// simple prompt

bot.dialog('/', [
  session => {
    builder.Prompts.text(session, 'Hi, what is your name?');
  },
  (session, results) => {
    session.endConversation(`Hello ${results.response}`);
  }
]);
