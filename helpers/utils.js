function supportsAPL(handlerInput) {
  const supportedInterfaces = handlerInput.requestEnvelope.context.System.device.supportedInterfaces
  const aplInterface = supportedInterfaces['Alexa.Presentation.APL']
  return aplInterface != null && aplInterface != undefined
}

function accountUnlinked(handlerInput) {
  const accessToken = handlerInput.requestEnvelope.context.System.user.accessToken
  return accessToken != null && accessToken != undefined
}

function kFormatter(num) {
  return num > 999 ? (num/1000).toFixed(1) + 'k' : num
}

module.exports = {
  supportsAPL,
  accountUnlinked,
  kFormatter
}
