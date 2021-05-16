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
              image_url: page.imageUrl,
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
      if (error) {
        console.log(`[CallSendAPI] Error: ${error}`);
      }
    }
  );
}

function MessagePlayer(key, obj, tsm, days) {
  var prms = key.split(':');
  var game_index = prms[0] | 0;
  var player_id = prms[1];
  const page = pages.GetPage(game_index);

  console.log(
    `[${page.name}] Sent message to ${player_id}! (TSM: ${tsm}, Offline Days: ${days})`
  );

  BuildAndSendMessage(obj.pid, obj.cid, page);
}

function MessagePlayerFirstTime(game, sender_id) {
  var button = {
    type: 'web_url',
    title: 'Play Now',
    url: game.url,
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
              image_url: game.imageUrl,
              buttons: [button],
            },
          ],
        },
      },
    },
  };

  CallSendAPI(messageData, game.pat);

  console.log(`[${game.name}] Sent message first time to ${player_id}!`);
}

module.exports = {
  MessagePlayer,
  MessagePlayerFirstTime,
};
