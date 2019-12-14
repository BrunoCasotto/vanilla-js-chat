import DomHandler from './src/dom-handler'
import { chatVdom } from './src/vdoms'

/**
 * Main method to initialize render and chat listeners
 */
const init = () => {
  const chatTarget = document.querySelector('#vanilla-js-chat')
  DomHandler.render(chatTarget, chatVdom)
  // code
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
