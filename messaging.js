var pages = require('./pages.js');
var request = require('request');

//
// Send bot message
//
// sender_id (string) : Page-scoped ID of the message recipient
// context_id (string): FBInstant context ID. Opens the bot message in a specific context
// page (object): Page that the player belongs to
//
function BuildAndSendMessage(sender_id, context_id, page) {
  var button = {
    type: 'web_url',
    title: page.cta,
    url: page.url,
    webview_height_ratio: 'full',
  };

  if (context_id) button.game_metadata = { context_id: context_id };

  if (page.payload) button.payload = JSON.stringify(page.payload);

  var messageData = {
    recipient: {
      id: sender_id,
    },
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [
            {
              title: page.title,
              subtitle: page.subtitle,
              image_url: page.imageurl,
              buttons: [button],
            },
          ],
        },
      },
    },
  };

  CallSendAPI(messageData, page.pat);
}

function CallSendAPI(messageData, pat) {
  var graphApiUrl =
    'https://graph.facebook.com/me/messages?access_token=' + pat;
  request(
    {
      url: graphApiUrl,
      method: 'POST',
      json: true,
      body: messageData,
    },
    function (error, response, body) {
      console.log(
        '===> CallSendAPI: ',
        'error',
        error,
        'status code',
        response.statusCode,
        'body',
        body
      );
    }
  );
}

function MessagePlayer(key, obj, tsm, days) {
  var prms = key.split(':');
  var game_index = prms[0] | 0;
  var player_id = prms[1];

  console.log(
    '=> Sending message to ' +
      game_index +
      ' - ' +
      player_id +
      ', tsm = ' +
      tsm +
      ', days = ' +
      days
  );

  BuildAndSendMessage(obj.pid, obj.cid, pages.GetPage(game_index));
}

function MessagePlayerFirstTime(sender_id) {
  var button = {
    type: 'web_url',
    title: 'Play Now',
    url: 'https://fb.gg/play/kingoftiles',
    webview_height_ratio: 'full',
  };

  var messageData = {
    recipient: {
      id: sender_id,
    },
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [
            {
              title: 'Thanks for playing! Hope to see you again!',
              subtitle: 'Invite your friends to challenge them',
              image_url: 'https://i.ibb.co/5YKW8h4/Banner-1200-627.png',
              buttons: [button],
            },
          ],
        },
      },
    },
  };

  CallSendAPI(
    messageData,
    'EAAlbC6xI39oBAKgEVhgsQyBdcLjxrpyssJ60VWyPheILEFdJas8XNzSY1YvBOkfOZAX5dx3bwo7B3X0DcGBb4V3dkodX3hrQM6XeciSHVgbf6oQ4QzHFEdmZCrKdZCYCNqa1ElDxjKEaXQmOAgaeEZAnZCVI0SBUbHZAQZCIi1fjb1kZCnBN6XXP0eoqOlKnhI8ZD'
  );
}

module.exports = {
  MessagePlayer,
  MessagePlayerFirstTime,
};
