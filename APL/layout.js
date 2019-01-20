const buttons = require('./components/menu')

const layout = {
    "TitleImage": {
        "when": "${outputType == 'TitleImage'}",
        "parameters": [
            {
                "name": "hint",
                "type": "string"
            },
            {
                "name": "title",
                "type": "string"
            },
            {
                "name": "image",
                "type": "string"
            },
            {
                "name": "video",
                "type": "string"
            },
            {
                "name": "score",
                "type": "string"
            },
            {
                "name": "subreddit",
                "type": "string"
            },
            {
                "name": "subreddit_logo",
                "type": "string"
            },
            {
                "name": "outputType",
                "type": "string"
            },
            {
                "name": "text",
                "type": "string"
            }
        ],
        "items": [
            {
                "when": "${viewport.shape == 'round'}",
                "type": "Container",
                "direction": "column",
                "width": "100vw",
                "height": "100vh",
                "items": [
                    {
                        "type": "Image",
                        "source": "${image == '' ? '@pagesBackground' : image}",
                        "scale": "best-fill",
                        "width": "100vw",
                        "height": "100vh",
                        "position": "absolute",
                        "scrim": true
                    },
                    {
                        "type": "AlexaHeader",
                        "headerTitle": "${subreddit}",
                        "headerAttributionImage": "${subreddit_logo == '' ? '@pagesLogo' : subreddit_logo}"
                    },
                    //buttons.bookmarkContainer,
                    {
                        "type": "ScrollView",
                        "height": "100%",
                        "justifyContent": "${viewport.shape == 'round' ? 'center' : 'end'}",
                        "item": [
                            {
                                "paddingLeft": "@marginLeft",
                                "paddingRight": "@marginRight",
                                "type": "Text",
                                "text": "${title}",
                                "style": "textStyleTitle",
                                "align": "${viewport.shape == 'round' ? 'center' : 'left'}"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Container",
                "width": "100vw",
                "height": "100vh",
                "items": [
                    {
                        "type": "Image",
                        "when": "${video == ''}",
                        "source": "${image == '' ? '@pagesBackground' : image}",
                        "scale": "best-fit",
                        "width": "100vw",
                        "height": "100vh",
                        "position": "absolute"
                    },
                    {
                        "type": "Video",
                        "when": "${image == ''}",
                        "source": "${video}",
                        "scale": "best-fit",
                        "width": "100vw",
                        "height": "100vh",
                        "repeatCount": -1,
                        "autoplay": true,
                        "position": "absolute"
                    },
                    {
                        "type": "AlexaHeader",
                        "headerTitle": "${subreddit}",
                        "headerAttributionImage": "${subreddit_logo == '' ? '@pagesLogo' : subreddit_logo}"
                    },
                    buttons.bookmarkContainer,
                    buttons.voteContainer,
                    {
                        "type": "Container",
                        "grow": 1,
                        "justifyContent": "${viewport.shape == 'round' ? 'center' : 'end'}",
                        "items": [
                            
                            {
                                "type": "Frame",
                                "backgroundColor": "rgba(0,0,0,0.2)",
                                "item": [{
                                    "paddingLeft": "@marginLeft",
                                    "paddingRight": "@marginRight",
                                    "type": "Text",
                                    "text": "${title}",
                                    "style": "textStyleTitle",
                                    "align": "${viewport.shape == 'round' ? 'center' : 'left'}"
                                },
                                {
                                    "type": "AlexaFooter",
                                    "footerHint": "${hint}"
                                }]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "TitleBody": {
        "when": "${outputType == 'TitleBody'}",
        "parameters": [
            {
                "name": "hint",
                "type": "string"
            },
            {
                "name": "title",
                "type": "string"
            },
            {
                "name": "image",
                "type": "string"
            },
            {
                "name": "video",
                "type": "string"
            },
            {
                "name": "score",
                "type": "string"
            },
            {
                "name": "subreddit",
                "type": "string"
            },
            {
                "name": "subreddit_logo",
                "type": "string"
            },
            {
                "name": "outputType",
                "type": "string"
            },
            {
                "name": "text",
                "type": "string"
            }
        ],
        "items": [
            {
                "when": "${viewport.shape == 'round'}",
                "type": "Container",
                "direction": "column",
                "width": "100vw",
                "height": "100vh",
                "items": [
                    {
                        "type": "Image",
                        "source": "@pagesBackground",
                        "scale": "best-fill",
                        "width": "100vw",
                        "height": "100vh",
                        "position": "absolute",
                        "scrim": true
                    },
                    {
                        "type": "AlexaHeader",
                        "headerTitle": "${subreddit}",
                        "headerAttributionImage": "${subreddit_logo}"
                    },
                    {
                        "type": "ScrollView",
                        "height": "100%",
                        "item": [
                            {
                                "type": "Container",
                                "paddingLeft": "@marginLeft",
                                "paddingRight": "@marginRight",
                                "items": [
                                    {
                                        "type": "Text",
                                        "height": "100%",
                                        "text": "${title}",
                                        "size": "@textSizeBody",
                                        "spacing": "@spacingSmall",
                                        "style": "textStyleTitle"
                                    },
                                    {
                                        "type": "Text",
                                        "height": "100%",
                                        "text": "${text}",
                                        "size": "@textSizeBody",
                                        "spacing": "@spacingSmall",
                                        "style": "textStyleBody"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Container",
                "width": "100vw",
                "height": "100vh",
                "items": [
                    {
                        "type": "Image",
                        "source": "@pagesBackground",
                        "scale": "best-fit",
                        "width": "100vw",
                        "height": "100vh",
                        "position": "absolute"
                    },
                    {
                        "type": "AlexaHeader",
                        "headerTitle": "${subreddit}",
                        "headerAttributionImage": "${@subreddit_logo == '' ? '@pagesLogo' : '@subreddit_logo'}"
                    },
                    buttons.bookmarkContainer,
                    buttons.voteContainer,
                    {
                        "type": "Container",
                        "height": "60vh",
                        "width": "100vw",
                        "paddingLeft": "@marginLeft",
                        "paddingRight": "@marginRight",
                        "paddingBottom": "@marginBottom",
                        "items": [
                            {
                                "type": "Text",
                                "text": "${title}",
                                "style": "textStyleTitle",
                                "align": "${viewport.shape == 'round' ? 'center' : 'left'}"
                            },
                            {
                                "type": "ScrollView",
                                "height": "100%",
                                "item": [
                                    {
                                        "type": "Text",
                                        "height": "100%",
                                        "text": "${text}",
                                        "size": "@textSizeBody",
                                        "spacing": "@spacingSmall",
                                        "style": "textStyleBody"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "AlexaFooter",
                        "footerHint": "${hint}"
                    }
                ]
            }
        ]
    },
    "TitleOnly": {
        "when": "${outputType == 'TitleOnly'}",
        "parameters": [
            {
                "name": "hint",
                "type": "string"
            },
            {
                "name": "title",
                "type": "string"
            },
            {
                "name": "image",
                "type": "string"
            },
            {
                "name": "video",
                "type": "string"
            },
            {
                "name": "score",
                "type": "string"
            },
            {
                "name": "subreddit",
                "type": "string"
            },
            {
                "name": "subreddit_logo",
                "type": "string"
            },
            {
                "name": "outputType",
                "type": "string"
            },
            {
                "name": "text",
                "type": "string"
            }
        ],
        "items": [
            {
                "when": "${viewport.shape == 'round'}",
                "type": "Container",
                "direction": "column",
                "width": "100vw",
                "height": "100vh",
                "items": [
                    {
                        "type": "Image",
                        "source": "@pagesBackground",
                        "scale": "best-fill",
                        "width": "100vw",
                        "height": "100vh",
                        "position": "absolute",
                        "scrim": true
                    },
                    {
                        "type": "AlexaHeader",
                        "headerTitle": "${subreddit}",
                        "headerAttributionImage": "${subreddit_logo == '' ? '@pagesLogo' : subreddit_logo}"
                    },
                    {
                        "type": "Container",
                        "grow": 1,
                        "justifyContent": "${viewport.shape == 'round' ? 'center' : 'end'}",
                        "items": [
                            {
                                "type": "ScrollView",
                                "height": "100%",
                                "item": [
                                    {
                                        "paddingLeft": "@marginLeft",
                                        "paddingRight": "@marginRight",
                                        "type": "Text",
                                        "text": "${title}",
                                        "style": "textStyleTitle",
                                        "align": "${viewport.shape == 'round' ? 'center' : 'left'}"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "AlexaFooter",
                        "footerHint": "${hint}"
                    }
                ]
            },
            {
                "type": "Container",
                "width": "100vw",
                "height": "100vh",
                "items": [
                    {
                        "type": "Image",
                        "source": "@pagesBackground",
                        "scale": "best-fit",
                        "width": "100%",
                        "height": "100%",
                        "position": "absolute"
                    },
                    {
                        "type": "AlexaHeader",
                        "headerTitle": "${subreddit}",
                        "headerAttributionImage": "${subreddit_logo == '' ? '@pagesLogo' : subreddit_logo}"
                    },
                    buttons.bookmarkContainer,
                    buttons.voteContainer,
                    {
                        "type": "Container",
                        "grow": 1,
                        "justifyContent": "${viewport.shape == 'round' ? 'center' : 'end'}",
                        "items": [
                            {
                                "paddingLeft": "@marginLeft",
                                "paddingRight": "@marginRight",
                                "type": "Text",
                                "text": "${title}",
                                "style": "textStyleTitle",
                                "align": "${viewport.shape == 'round' ? 'center' : 'left'}"
                            }
                        ]
                    },
                    {
                        "type": "AlexaFooter",
                        "footerHint": "${hint}"
                    }
                ]
            }
        ]
    },
    "PagerItem": {
        "parameters": [
            {
                "name": "hint",
                "type": "string"
            }
        ],
        "items": [
            {
                "type": "TitleImage",
                "outputType": "${data.outputType}",
                "hint": "${hint}",
                "title": "${data.strings.title}",
                "image": "${data.strings.image}",
                "video": "${data.strings.video}",
                "score": "${data.strings.score}",
                "subreddit": "${data.strings.subreddit}",
                "subreddit_logo": "${data.strings.subreddit_logo}",
                "text": "${data.strings.text}"
            },
            {
                "type": "TitleBody",
                "outputType": "${data.outputType}",
                "hint": "${hint}",
                "title": "${data.strings.title}",
                "image": "${data.strings.image}",
                "video": "${data.strings.video}",
                "score": "${data.strings.score}",
                "subreddit": "${data.strings.subreddit}",
                "subreddit_logo": "${data.strings.subreddit_logo}",
                "text": "${data.strings.text}"
            },
            {
                "type": "TitleOnly",
                "outputType": "${data.outputType}",
                "hint": "${hint}",
                "title": "${data.strings.title}",
                "image": "${data.strings.image}",
                "video": "${data.strings.video}",
                "score": "${data.strings.score}",
                "subreddit": "${data.strings.subreddit}",
                "subreddit_logo": "${data.strings.subreddit_logo}",
                "text": "${data.strings.text}"
            }
        ]
    }
}

module.exports = {
  layout
}