var http= require('http');
const TelegramBot = require('node-telegram-bot-api');

const token = '342985669:AAHcvnlyu0xfvpC3ZZ-M0nsg9sHJ8XUoVKw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
	// bot.onText(/\/echo (.+)/, (msg, match) => {
	  // // 'msg' is the received Message from Telegram
	  // // 'match' is the result of executing the regexp above on the text content
	  // // of the message

	  // const chatId = msg.chat.id;
	  // const resp = match[1]; // the captured "whatever"

	  // // send back the matched "whatever" to the chat
	  // bot.sendMessage(chatId, resp);
	// });

// Listen for any kind of message. There are different kinds of
// messages.
		// bot.on('message', (msg) => {
		  // const chatId = msg.chat.id;

		  // // send a message to the chat acknowledging receipt of their message
		  // bot.sendMessage(chatId, 'Received your message');
		// });

bot.onText(/\/help/, (msg, match) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Hello there!. This a personal bot for Mehul Harji Bhadricha. Hope you have a great time! Here are some of his interests /movies /music /xamarin /artificialintelligence');
});

bot.onText(/\/movies/, (msg, match) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Below listed are some of my favorite movies..');
  
  var photo1 = __dirname + "/movies/therecruit.jpg";  
  bot.sendPhoto(msg.chat.id, photo1, { caption: "The Recruit"});
  
  var photo2 = __dirname + "/movies/RockyBalboa.jpg";
  bot.sendPhoto(msg.chat.id, photo2, { caption: "Rocky Balboa"});
});

bot.onText(/\/music/, (msg, match) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Here are the types of music which i enjoy listening more. #Rock #HipHop Below listed are some of my fav artists:');
  
    var photo1 = __dirname + "/music/twentyonepilots1.jpg";  
	bot.sendPhoto(msg.chat.id, photo1, { caption: "Twenty One Pilots"});
	
	var photo2 = __dirname + "/music/LP1.jpg";  
	bot.sendPhoto(msg.chat.id, photo2, { caption: "Linkin Park"});
});


bot.onText(/\/xamarin/, (msg, match) => {
  const chatId = msg.chat.id;

	// send a message to the chat acknowledging receipt of their message
	bot.sendMessage(chatId, 'A brief info about Xamarin: ');
	bot.sendMessage(chatId, 'Xamarin is a Microsoft-owned San Francisco, California-based software company founded in May 2011 by the engineers that created Mono, Mono for Android and MonoTouch, which are cross-platform implementations of the Common Language Infrastructure (CLI) and Common Language Specifications often called Microsoft .NET. With a C#-shared codebase, developers can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces and share code across multiple platforms, including Windows and macOS. Over 1 million developers were using Xamarins products in more than 120 countries around the world as of May 2015.');

	var photo1 = __dirname + "/xamarin/Xamarin1.png";  
	bot.sendPhoto(msg.chat.id, photo1, { caption: "Xamarin logo"});

	
});

http.createServer(function(request, response)
{
	response.writeHead(200, {"Content-Type":"text/html"});
	response.end("Server started...");
}).listen(2020);

console.log("Bot Service has been started...");