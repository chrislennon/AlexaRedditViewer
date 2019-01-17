const HelpHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
           handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent'
  },
  handle (handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes()
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()

    sessionAttributes.speakOutput = requestAttributes.t('HELP_MESSAGE')
    sessionAttributes.repromptSpeech = requestAttributes.t('HELP_REPROMPT')

    return handlerInput.responseBuilder
      .speak(sessionAttributes.speakOutput)
      .reprompt(sessionAttributes.repromptSpeech)
      .getResponse()
  }
}

module.exports = {
  HelpHandler
}
