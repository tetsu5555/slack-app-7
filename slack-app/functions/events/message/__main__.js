const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* message event
*
*   All events use this template, simply create additional files with different
*   names to add event responses
*
*   See https://api.slack.com/events-api for more details.
*
* @param {string} user The user id of the user that invoked this event (name is usable as well)
* @param {string} channel The channel id the event was executed in (name is usable as well)
* @param {string} text The text contents of the event
* @param {object} event The full Slack event object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', event = {}, botToken = null, callback) => {

  // Only send a response to certain messages
  if (text.match(/kenshi/i)) {
    callback(null, {
      text: `けんしはバカ`,
      attachments: [
        // You can customize your messages with attachments.
        // See https://api.slack.com/docs/message-attachments for more info.
      ]
    });
  } else if (text.match(/つかれた|疲れた/i)) {
    callback(null, {
      text: `<@${user}>くん、今日も1日お疲れ様 :heart:`,
      attachments: [
        // You can customize your messages with attachments.
        // See https://api.slack.com/docs/message-attachments for more info.
      ]
    });
  } else if (text.match(/勉強する|勉強しよ/i)) {
    callback(null, {
      text: `<@${user}>くん、勉強頑張って！！:hugging_face:`,
      attachments: [
        // You can customize your messages with attachments.
        // See https://api.slack.com/docs/message-attachments for more info.
      ]
    });
  } else if (text.match(/寝る/i)) {
    callback(null, {
      text: `<@${user}>くん、おやすみ！また明日ね！`,
      attachments: [
        // You can customize your messages with attachments.
        // See https://api.slack.com/docs/message-attachments for more info.
      ]
    });
  } else if (text.match(/test/i)) {
    callback(null, {
      text: `テストテスト`,
      attachments: [
        // You can customize your messages with attachments.
        // See https://api.slack.com/docs/message-attachments for more info.
      ]
    });
  } else {
    callback(null, {});
  }

};
