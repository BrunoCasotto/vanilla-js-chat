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

class VanillaJsChatCore {

  constructor() {
    this.chatInstances = {
      chat: null,
      header: null,
      body: null,
      controller: null,
      wrapper: null
    }

    this.onSendMessageCallbacks = []
  }

  destroyInstances () {
    this.chatInstances.chat = null
    this.chatInstances.header = null
    this.chatInstances.body = null
    this.chatInstances.controller = null
    this.chatInstances.wrapper = null
  }

  hasInstance() {
    return !!this.chatInstances.chat
  }

  removeHtmlElements () {
    this.chatInstances.wrapper.removeChild(
      this.chatInstances.wrapper.firstChild
    )
  }

  executeSendMessageCallbacks (message) {
    if(message.length > 0) {
      this.onSendMessageCallbacks.forEach(callback => callback({ message }))
    }
  }

  scrollChatToBottom () {
    const { scrollHeight } = this.chatInstances.body
    this.chatInstances.body.scrollTop = scrollHeight
  }

  addMessageEventListener (buttonElement, inputElement) {
    buttonElement.addEventListener('click', () => {
      this.executeSendMessageCallbacks(inputElement.value)
      inputElement.value = ''
    })

    inputElement.addEventListener('keypress', ({ key, target }) => {
      if (key === 'Enter') {
        this.executeSendMessageCallbacks(target.value)
        inputElement.value = ''
      }
    })
  }

  /**
   * Main method to initialize render and chat listeners
  */
  init (id) {
    const wrapperId = id || 'vanilla-js-chat'
    const wrapper = document.querySelector(`#${wrapperId}`)

    if (!wrapperId || !wrapper) {
      return throwWrapperIdError()
    }

    this.chatInstances.chat = DomHandler.renderElement(chatVdom),
    this.chatInstances.header = DomHandler.renderElement(headerVdom),
    this.chatInstances.body = DomHandler.renderElement(bodyVdom),
    this.chatInstances.controller = DomHandler.renderElement(controllerVdom),
    this.chatInstances.wrapper = wrapper

    DomHandler.render({ wrapper, ...this.chatInstances })

    const inputElement = this.chatInstances.controller.querySelector('#vanilla-js-message'),
      buttonElement = this.chatInstances.controller.querySelector('#vanilla-js-button')

    this.addMessageEventListener(buttonElement, inputElement)
  }

  restart () {
    if(this.hasInstance()) {
      this.close()
    }

    this.init()
  }

  /**
   * Method to inser new message on chat
   * @param {string} name - string contains the name
   * @param {string} message - string contains the message
   * @param {string} color - string contains background color [red, blue, yellow or green]
   * @param {string} side - string contains message side [right or left]
   */
  addMessage (name, message, color, side) {
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
    DomHandler.insertMessage(this.chatInstances.body, messageInstance)

    this.scrollChatToBottom()
  }

  onSendMessage (callback) {
    if(!callback || typeof callback !== 'function') {
      return throwOnSendMessageCallbackError()
    }

    this.onSendMessageCallbacks.push(callback)
  }

  /**
   * Method to close chat and remove instances
   */
  close() {
    if(this.hasInstance()) {
      this.removeHtmlElements()
      this.destroyInstances()
    }
  }
}

module.exports = new VanillaJsChatCore()
