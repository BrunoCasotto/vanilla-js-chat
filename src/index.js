import './style/index.scss'
import DomHandler from './render/dom-handler'
import {
  throwWrapperIdError,
  throwWrapperMessageError
} from './error-handler'

import {
  headerVdom,
  bodyVdom,
  controllerVdom,
  chatVdom,
  createMessageVdom,
} from './render/vdoms'

const VanillaJsChat = () => {
  //@private
  let chatInstances = {
    chat: null,
    header: null,
    body: null,
    controller: null,
    wrapper: null
  }

  //@private
  let onSendMessageCallbacks = []

  //@private
  const destroyInstances = () => {
    chatInstances.chat = null
    chatInstances.header = null
    chatInstances.body = null
    chatInstances.controller = null
    chatInstances.wrapper = null
  }

  //@private
  const removeHtmlElements = () => {
    chatInstances.wrapper.removeChild(
      chatInstances.wrapper.firstChild
    )
  }

  //@private
  const executeSendMessageCallbacks = message => {
    if(message.length > 0) {
      onSendMessageCallbacks.forEach(callback => callback({ message }))
    }
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

    if (!wrapperId || !wrapper) {
      return throwWrapperIdError()
    }

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
    if(chatInstances.wrapper) {
      close()
    }

    init()
  }

  /**
   * Method to inser new message on chat
   * @param {string} name - string contains the name
   * @param {string} message - string contains the message
   * @param {string} color - string contains background color [red, blue, yellow or green]
   * @param {string} side - string contains message side [right or left]
   */
  const addMessage = (name, message, color, side) => {
    if(!name || !name.length > 0 || !message || !message.length > 0) {
      return throwWrapperMessageError()
    }

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

  /**
   * Method to close chat and remove instances
   */
  const close = () => {
    removeHtmlElements()
    destroyInstances()
  }

  return {
    init,
    restart,
    addMessage,
    onSendMessage,
    close,
  }
}

 module.exports = new VanillaJsChat()
