const RefreshHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
           handlerInput.requestEnvelope.request.intent.name === 'RefreshIntent'
  },
  handle (handlerInput) {
    const frontPage = require('./FrontPageIntent').FrontPageHandler
    return frontPage.handle(handlerInput)
  }
}

module.exports = {
  RefreshHandler
}
