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
  //Private
  const chatInstances = {
    chat: null,
    header: null,
    body: null,
    controller: null,
    wrapper: null
  }

  //Private
  const onSendMessageCallbacks = []

  //Private
  const destroyInstances = () => {
    chatInstances.chat = null
    chatInstances.header = null
    chatInstances.body = null
    chatInstances.controller = null
    chatInstances.wrapper = null
  }

  const isInstance = () => !!chatInstances.chat

  //Private
  const removeHtmlElements = () => {
    chatInstances.wrapper.removeChild(
      chatInstances.wrapper.firstChild
    )
  }

  //Private
  const executeSendMessageCallbacks = message => {
    if(message.length > 0) {
      onSendMessageCallbacks.forEach(callback => callback({ message }))
    }
  }

  //Private
  const scrollChatToBottom = () => {
    const { scrollHeight } = chatInstances.body
    chatInstances.body.scrollTop = scrollHeight
  }

  //Private
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
    if(isInstance()) {
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

    if(!color || typeof  color !== 'string') {
      return throwWrapperColorError()
    }

    if(side !== 'right' && side !== 'left') {
      return throwWrapperSideError()
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

  const onSendMessage = callback => {
    if(!callback || typeof callback !== 'function') {
      return throwOnSendMessageCallbackError()
    }

    onSendMessageCallbacks.push(callback)
  }

  /**
   * Method to close chat and remove instances
   */
  const close = () => {
    if(isInstance()) {
      removeHtmlElements()
      destroyInstances()
    }
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
