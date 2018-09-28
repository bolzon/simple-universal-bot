
const builder = require('botbuilder');
const connector = new builder.ConsoleConnector().listen();

/*
bot.set('storage', new builder.MemoryBotStorage());
bot.set('persistUserData', true);
bot.set('persistConversationData', false);
*/

const bot = new builder.UniversalBot(connector, session => {
  session.beginDialog('greetings');
});

bot.dialog('greetings', [
  (session, args, next) => {
    session.send(`Hi, I'm Vladimir!`);
    session.beginDialog('askname');
  },
  (session, results) => {
    const name = results.response || session.userData.name;
    session.userData.name = name;
    session.endConversation(`Welcome, ${name}!`);
  }
]);

bot.dialog('askname', [
  (session, args, next) => {
    if (!session.userData.name)
      builder.Prompts.text(session, `Tell me your name`);
    else
      next();
  },
  (session, results) => {
    session.endDialogWithResult(results);
  }
]);

bot.dialog('help', [
  (session, results, next) => {
    builder.Prompts.text(session, `Sure, what can I do for you?`);
  },
  (session, results) => {
    session.endConversation(`You need help with ${results.response}, got it...`);
  }
]).triggerAction({
  matches: /help/i,
  onSelectAction: (session, args) => {
    session.beginDialog(args.action, args);
  }
});
