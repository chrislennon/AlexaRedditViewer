const utils = require('../helpers/utils')

const FeatureUnavailableHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            // Vote or Bookmark Intent
           (handlerInput.requestEnvelope.request.intent.name === 'VoteIntent' ||
           handlerInput.requestEnvelope.request.intent.name === 'BookmarkIntent')
  },
  handle (handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes()
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
    
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

    let speakOutput = `<speak>${requestAttributes.t('FEATURE_UNAVILALBE')}</speak>`
    sessionAttributes.speakOutput = speakOutput

    return handlerInput.responseBuilder
      .speak(sessionAttributes.speakOutput) 
      .withShouldEndSession(false)
      .getResponse()
  }
}

module.exports = {
  FeatureUnavailableHandler
}
