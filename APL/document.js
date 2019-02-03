const pagerDocument = {
  "type": "APL",
  "version": "1.0",
  "theme": "dark",
  "import": [
      {
        "name": "alexa-layouts",
        "version": "1.0.0"
      },
      {
        "name": "styles",
        "version": "1.0.0",
        "source": "https://s3-eu-west-1.amazonaws.com/reddit-alexa-assets/styles.json"
      },
      {
        "name": "layouts",
        "version": "1.0.0",
        "source": "https://s3-eu-west-1.amazonaws.com/reddit-alexa-assets/layouts.json"
      },
      {
        "name": "resources",
        "version": "1.0.0",
        "source": "https://s3-eu-west-1.amazonaws.com/reddit-alexa-assets/resources.json"
      }
  ],
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
            "navigation": "wrap",
            "items": [
                {
                    "type": "PagerItem",
                    "outputType": "${data.outputType}",
                    "bookmarked": "${data.strings.bookmarked}",
                    "upvoted": "${data.strings.upvoted}",
                    "hint": "${payload.hint.string}",
                    "title": "${data.outputType}",
                    "body": "${data.strings.text}",
                    "image": "${data.strings.image}",
                    "postid": "${data.strings.postid}",
                    "video": "${data.strings.video}",
                    "score": "${data.strings.score}",
                    "subreddit": "${data.strings.subreddit}",
                    "subreddit_logo": "${data.strings.subreddit_logo}",
                    "redditLink": "${data.original}"
                }
            ]
        }
    ]
  }
}

module.exports = {
    pagerDocument
}