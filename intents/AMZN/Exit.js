const ExitHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
          (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent' ||
           handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent')
  },
  handle (handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes()
    const speakOutput = requestAttributes.t('STOP_MESSAGE', requestAttributes.t('SKILL_NAME'))

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .withShouldEndSession(true)
      .getResponse()
  }
}

module.exports = {
  ExitHandler
}
