const lib = require('lib')({token: process.env.STDLIB_TOKEN});
/**
* /links
*
*   Links command.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  callback(null, {
    text: `show links`,
    attachments: [
      {
        "fallback": "Plan a vacation",
        "author_name": "Owner: rdesoto",
        "title": "Plan a vacation",
        "text": "I've been working too hard, it's time for a break.",
        "actions": [
          {
            "name": "action",
            "type": "button",
            "text": "Complete this task",
            "style": "",
            "value": "complete"
          },
          {
            "name": "tags_list",
            "type": "select",
            "text": "Add a tag...",
            "data_source": "static",
            "options": [
              {
                "text": "Launch Blocking",
                "value": "launch-blocking"
              },
              {
                "text": "Enhancement",
                "value": "enhancement"
              },
              {
                "text": "Bug",
                "value": "bug"
              }
            ]
          }
        ]
      }
    ]
  });
};
