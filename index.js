import DomHandler from './src/render/dom-handler'

import {
  headerVdom,
  bodyVdom,
  controllerVdom,
  chatVdom,
  createMessageVdom,
} from './src/render/vdoms'

const VanillaJsChat = () => {
  let chatInstances = {
    chat: null,
    header: null,
    body: null,
    controller: null,
    wrappwe: null
  }

  const destroyInstances = () => {
    chatInstances.chat = null
    chatInstances.header = null
    chatInstances.body = null
    chatInstances.controller = null
    chatInstances.wrappwe = null
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
    chatInstances.wrapper = wrapper

    DomHandler.render({ wrapper, ...chatInstances })
  }

  const restart = () => {
    // code
  }

  /**
   * Method to inser new message on chat
   * @param {string} name - string contains the name
   * @param {string} message - string contains the message
   * @param {string} color - string contains background color [red, blue, yellow or green]
   * @param {string} side - string contains message side [right or left]
   */
  const addMessage = (name, message, color, side) => {
    const messageVdom = createMessageVdom({
      name,
      message,
      color: color || 'green',
      side: side || 'right'
    })

    const messageInstance = DomHandler.renderElement(messageVdom)
    DomHandler.insertMessage(chatInstances.body, messageInstance)
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
