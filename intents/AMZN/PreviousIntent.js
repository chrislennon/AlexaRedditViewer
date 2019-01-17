const PreviousIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
           handlerInput.requestEnvelope.request.intent.name === 'AMAZON.PreviousIntent'
  },
  handle (handlerInput) {
    // https://developer.amazon.com/docs/alexa-presentation-language/apl-commands.html
    // https://developer.amazon.com/docs/alexa-presentation-language/apl-standard-commands.html#setpage-command
    return handlerInput.responseBuilder
      .addDirective({
        type : 'Alexa.Presentation.APL.ExecuteCommands',
        token: 'pagerToken',
        commands: [{
          "type": "SetPage",
          "componentId": "pagerComponentId",
          "position": "relative",
          "value": -1
        }]
      })
      .withShouldEndSession(false)
      .getResponse()
  }
}

module.exports = {
  PreviousIntentHandler
}
