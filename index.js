import DomHandler from './src/render/dom-handler'
import { chatVdom } from './src/render/vdoms'

/**
 * Main method to initialize render and chat listeners
 */
const init = (id) => {
  const wrapperId = id || 'vanilla-js-chat'
  const chatTarget = document.querySelector(`#${wrapperId}`)

  DomHandler.render(chatTarget, chatVdom)
}

const restart = () => {
  // code
}

const sendMessage = () => {
  // code
}

const onSend = () => {
  // code
}

const onClose = () => {
  // code
}

const VanillaJsChat = {
  init,
  restart,
  sendMessage,
  onSend,
  onClose,
}

window.VanillaJsChat = VanillaJsChat
