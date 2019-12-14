import DomHandler from './src/render/dom-handler'

import {
  headerVdom,
  bodyVdom,
  controllerVdom,
  chatVdom,
  createMessageVdom,
} from './src/render/vdoms'

const VanillaJsChat = () => {
  //@private
  let chatInstances = {
    chat: null,
    header: null,
    body: null,
    controller: null,
    wrappwe: null
  }

  //@private
  let onSendMessageCallbacks = []

  //@private
  const destroyInstances = () => {
    chatInstances.chat = null
    chatInstances.header = null
    chatInstances.body = null
    chatInstances.controller = null
    chatInstances.wrappwe = null
  }

  //@private
  const executeSendMessageCallbacks = message => {
    onSendMessageCallbacks.forEach(callback => callback({ message }))
  }

  //@private
  const scrollChatToBottom = () => {
    const { scrollHeight } = chatInstances.body
    chatInstances.body.scrollTop = scrollHeight
  }

  //@private
  const addMessageEventListener = (buttonElement, inputElement) => {
    buttonElement.addEventListener('click', () => {
      executeSendMessageCallbacks(inputElement.value)
      inputElement.value = ''
    })

    inputElement.addEventListener('keypress', ({ key, target }) => {
      if (key === 'Enter') {
        executeSendMessageCallbacks(target.value)
        inputElement.value = ''
      }
    })
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

    const inputElement = chatInstances.controller.querySelector('#vanilla-js-message'),
      buttonElement = chatInstances.controller.querySelector('#vanilla-js-button')

    addMessageEventListener(buttonElement, inputElement)
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

    scrollChatToBottom()
  }

  const onSendMessage = calback => {
    onSendMessageCallbacks.push(calback)
  }

  const onClose = () => {
    // code
  }

  return {
    init,
    restart,
    addMessage,
    onSendMessage,
    onClose,
  }
}

window.VanillaJsChat = new VanillaJsChat()
