import DomHandler from './src/render/dom-handler'
import { headerVdom, bodyVdom, controllerVdom, chatVdom } from './src/render/vdoms'

const VanillaJsChat = () => {
  let chatInstances = {
    chat: null,
    header: null,
    body: null,
    controller: null,
  }

  /**
   * Main method to initialize render and chat listeners
  */
  const init = (id) => {
    const wrapperId = id || 'vanilla-js-chat'
    const wrapper = document.querySelector(`#${wrapperId}`)

    chatInstances.chat = DomHandler.renderElement(chatVdom),
    chatInstances.header = DomHandler.renderElement(headerVdom),
    chatInstances.body = DomHandler.renderElement(bodyVdom),
    chatInstances.controller = DomHandler.renderElement(controllerVdom),

    DomHandler.render({ wrapper, ...chatInstances })
  }

  const restart = () => {
    // code
  }

  const addMessage = () => {
    // code
  }

  const onSend = () => {
    // code
  }

  const onClose = () => {
    // code
  }

  return {
    init,
    restart,
    addMessage,
    onSend,
    onClose,
  }
}

window.VanillaJsChat = new VanillaJsChat()
