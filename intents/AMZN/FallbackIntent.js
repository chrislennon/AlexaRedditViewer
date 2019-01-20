const FallbackIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'AMAZON.FallbackIntent'
  },
  handle (handlerInput) {
    const frontPage = require('../FrontPageIntent').FrontPageHandler
    return frontPage.handle(handlerInput)
  }
}

module.exports = {
  FallbackIntentHandler
}
