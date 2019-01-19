// AMZ styles & resources
// Text Forward List Sample & Image Right Detail Sample
// https://developer.amazon.com/alexa/console/ask/displays

// Custom Layouts
const pagerLayout = require('./layout').layout
const pagerStyle = require('./styles').styles
const pagerResources = require('./resources').resources

const strings = require('../helpers/strings')

const pagerDocument = {
  "type": "APL",
  "version": "1.0",
  "theme": "dark",
  "import": [
      {
          "name": "alexa-layouts",
          "version": "1.0.0"
      }
  ],
  "resources": pagerResources,
  "styles": pagerStyle,
  "layouts": pagerLayout,
  "mainTemplate": {
    "parameters": [
        "payload"
    ],
    "items": [
        {
            "type": "Pager",
            "id": "pagerComponentId",
            "width": "100vw",
            "height": "100vh",
            "data": "${payload.postData.data}",
            "items": [
                {
                    "type": "PagerItem",
                    "outputType": "${data.outputType}",
                    "bookmarked": "${data.strings.bookedmarked}",
                    "hint": "${payload.hint.string}",
                    "title": "${data.strings.title}",
                    "image": "${data.strings.image}",
                    "postid": "${data.strings.postid}",
                    "score": "${data.strings.score}",
                    "subreddit": "${data.strings.subreddit}",
                    "subreddit_logo": "${data.strings.subreddit_logo}"
                }
            ]
        }
    ]
  }
}

module.exports = {
    pagerDocument
}