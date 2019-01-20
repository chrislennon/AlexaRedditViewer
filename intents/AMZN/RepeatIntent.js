const RepeatHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
           handlerInput.requestEnvelope.request.intent.name === 'AMAZON.RepeatIntent'
  },
  handle (handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()

    return handlerInput.responseBuilder
      .speak(sessionAttributes.speakOutput)
      .getResponse()
  }
}

module.exports = {
  RepeatHandler
}
