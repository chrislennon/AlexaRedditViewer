const utils = require('../helpers/utils')
const reddit = require('../helpers/reddit')

const UserEventHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'Alexa.Presentation.APL.UserEvent'
  },
  handle (handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes()
   

    if (!utils.supportsAPL(handlerInput)) {
      return handlerInput.responseBuilder
        .speak(requestAttributes.t('APL_REQUIRED'))
        .getResponse();
    }

    if (!utils.accountUnlinked(handlerInput)) {
      return handlerInput.responseBuilder
        .speak(requestAttributes.t('ACCOUNT_UNLINKED'))
        .withLinkAccountCard()
        .getResponse();
    }

    return (async function () {
      const arguments = handlerInput.requestEnvelope.request.arguments

      if (arguments[0] == 'LogoSelected') {
        const frontPage = require('./FrontPageIntent').FrontPageHandler
        return frontPage.handle(handlerInput)
      } else if (arguments[0] == 'BookmarkSelected') { 
        let postid = arguments[1]
        await reddit.bookmarkPost(postid, handlerInput)
        return handlerInput.responseBuilder
          .speak(requestAttributes.t('BOOKMARK_ADD_MESSAGE'))
          .withShouldEndSession(false)
          .getResponse()
      } else if (arguments[0] == 'UnBookmarkSelected') { 
        let postid = arguments[1]
        await reddit.unBookmarkPost(postid, handlerInput)
        return handlerInput.responseBuilder
          .speak(requestAttributes.t('BOOKMARK_REMOVE_MESSAGE'))
          .withShouldEndSession(false)
          .getResponse()
      } else if (arguments[0] == 'UpvoteSelected') { 
        let postid = arguments[1]
        await reddit.upVotePost(postid, handlerInput)
        return handlerInput.responseBuilder
          .speak(requestAttributes.t('UPVOTE_ADD_MESSAGE'))
          .withShouldEndSession(false)
          .getResponse()
      } else if (arguments[0] == 'UnUpvoteSelected') { 
        let postid = arguments[1]
        await reddit.downVotePost(postid, handlerInput)
        return handlerInput.responseBuilder
          .speak(requestAttributes.t('UPVOTE_REMOVE_MESSAGE'))
          .withShouldEndSession(false)
          .getResponse()
      }
    })()
  }
}

module.exports = {
    UserEventHandler
}
