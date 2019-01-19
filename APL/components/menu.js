const bookmarkContainer = {
  "type": "Container",
  "direction": "row",
  "height": 64,
  "width": "100%",
  "justifyContent": "end",
  "items": [
    {
      "type": "TouchWrapper",
      "when": "${data.strings.bookedmarked == false}",
      "onPress": {
        "type": "SendEvent",
        "arguments": [
            "BookmarkSelected",
            "${data.strings.postid}"
        ]
      },
      "spacing": 40,
      "item": [{
        "type": "Image",
        "when": "${data.strings.bookedmarked == false}",
        "source": "https://s3-eu-west-1.amazonaws.com/reddit-alexa-assets/bookmark-o.png",
        "height": 64,
        "width": 64,
        "align": "top-right",
        "spacing": 40,
        "scale": "best-fit"
      }]
    },
    {
      "type": "TouchWrapper",
      "when": "${data.strings.bookedmarked == true}",
      "onPress": {
        "type": "SendEvent",
        "arguments": [
            "UnBookmarkSelected",
            "${data.strings.postid}"
        ]
      },
      "spacing": 40,
      "item": [{
        "type": "Image",
        "when": "${data.strings.bookedmarked == true}",
        "source": "https://s3-eu-west-1.amazonaws.com/reddit-alexa-assets/bookmark.png",
        "height": 64,
        "width": 64,
        "align": "top-right",
        "spacing": 40,
        "scale": "best-fit"
      }]
    },
    {
      "type": "Image",
      "source": "",
      "height": 10,
      "width": 10,
      "align": "top-right",
      "spacing": 40,
      "scale": "best-fit"
    }
  ]
}

const voteContainer = {
  "type": "Container",
  "direction": "row",
  "height": 64,
  "width": "100%",
  "justifyContent": "end",
  "items": [
    {
      "type": "TouchWrapper",
      "when": "${data.strings.upvoted == true}",
      "onPress": {
        "type": "SendEvent",
        "arguments": [
            "UnUpvoteSelected",
            "${data.strings.postid}"
        ]
      },
      "item": [{
        "type": "Image",
        "when": "${data.strings.upvoted == true}",
        "source": "https://s3-eu-west-1.amazonaws.com/reddit-alexa-assets/arrow-circle-up-red.png",
        "scale": "best-fit",
        "width": "64",
        "height": "64"
      }]
    },
    {  
      "type": "TouchWrapper",
      "when": "${data.strings.upvoted == null}",
      "onPress": {
        "type": "SendEvent",
        "arguments": [
            "UpvoteSelected",
            "${data.strings.postid}"
        ]
      },
      "item": [{
          "type": "Image",
          "when": "${data.strings.upvoted == null}",
          "source": "https://s3-eu-west-1.amazonaws.com/reddit-alexa-assets/arrow-circle-up-gray.png",
          "scale": "best-fit",
          "width": "64",
          "height": "64"
      }]
    },
    {
      "type": "Image",
      "source": "",
      "height": 10,
      "width": 10,
      "align": "top-right",
      "spacing": 40,
      "scale": "best-fit"
    }
  ]
}


//   {
//     "type": "Text",
//     "text": "${score}",
//     "style": "textStyleBody",
//     "fontWeight": "300",
//     "grow": 1,
//     "shrink": 1,
//     "maxLines": 1
// }

module.exports = {
  bookmarkContainer,
  voteContainer
}