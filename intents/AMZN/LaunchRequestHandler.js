const LaunchRequestHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
  },
  handle (handlerInput) {
    const frontPage = require('./FrontPageIntent').FrontPageHandler
    return frontPage.handle(handlerInput)
  }
}

module.exports = {
  LaunchRequestHandler
}
