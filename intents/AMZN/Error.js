const ErrorHandler = {
  canHandle () {
    return true
  },
  handle (handlerInput, error) {
    console.log(`Error handled: ${error.message}`)
    console.log(`Error handled: ${error.stack}`)

    const requestAttributes = handlerInput.attributesManager.getRequestAttributes()

    return handlerInput.responseBuilder
      .speak(requestAttributes.t('ERROR_MESSAGE'))
      .getResponse()
  }
}

module.exports = {
  ErrorHandler
}
