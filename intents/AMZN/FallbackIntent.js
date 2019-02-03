const FallbackIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
           handlerInput.requestEnvelope.request.intent.name === 'AMAZON.FallbackIntent'
  },
  handle (handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes()
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()

    sessionAttributes.speakOutput = requestAttributes.t('FALLBACK_MESSAGE')
    sessionAttributes.repromptSpeech = requestAttributes.t('FALLBACK_REPROMPT')

    return handlerInput.responseBuilder
      .speak(sessionAttributes.speakOutput)
      .reprompt(sessionAttributes.repromptSpeech)
      .getResponse()
  }
}

module.exports = {
  FallbackIntentHandler
}
