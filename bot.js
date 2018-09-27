
const builder = require('botbuilder');
const connector = new builder.ConsoleConnector().listen();
const bot = new builder.UniversalBot(connector);

/*
bot.dialog('/', session => {
    session.send('hello world');
});
*/

bot.dialog('/', [
    session => {
            builder.Prompts.text(session, 'Hi, what is your name?');
    },
    (session, results) => {
            console.log(results);
            session.send('Hello %s', results.response);
    }
]);
