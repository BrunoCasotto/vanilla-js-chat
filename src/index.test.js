import faker from 'faker'
import VanillaJsChat from './index'

describe('Main class :: render tests', () => {

  beforeEach(() => {
    document.body.innerHTML = '' //clear body

    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'vanilla-js-chat')
    document.body.appendChild(wrapper)
  })

  test('VanillaJsChat should be an object', () => {
    expect(typeof VanillaJsChat).toBe('object')
  })

  test('init should initialize chat inner default id', () => {
    VanillaJsChat.init()
    const wrapper = document.body.querySelector('#vanilla-js-chat')

    expect(wrapper.children.length).toBe(1)
    expect(!!wrapper.querySelector('.vanilla-js-chat')).toBe(true)
  })

  test('init should initialize chat inner personalized id', () => {
    const id = 'my-personal-id'

    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', id)
    document.body.appendChild(wrapper)

    VanillaJsChat.init(id)

    expect(wrapper.children.length).toBe(1)
    expect(!!wrapper.querySelector('.vanilla-js-chat')).toBe(true)
  })

  test('init should throw error when there isnt div contains id', () => {
    expect(() => VanillaJsChat.init('my-personal-id')).toThrow()
  })

  test('init should throw error when there isnt div contains id', () => {
    expect(() => VanillaJsChat.init('my-personal-id')).toThrow()
  })

  test('Close should remove html element and instances ', () => {
    VanillaJsChat.init()
    const wrapper = document.body.querySelector('#vanilla-js-chat')
    VanillaJsChat.close()

    expect(wrapper.children.length).toBe(0)
    expect(!!wrapper.querySelector('.vanilla-js-chat')).toBe(false)
  })
})

describe('Main class :: actions tests', () => {
  beforeEach(() => {
    document.body.innerHTML = '' //clear body

    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'vanilla-js-chat')
    document.body.appendChild(wrapper)
  })

  test('onSendMessage call method when send button triggered', () => {
    VanillaJsChat.init()

    const sendBtn = document.querySelector('#vanilla-js-button')
    const inputMessage = document.querySelector('#vanilla-js-message')
    const message = faker.random.word()
    const sendCallback = jest.fn()

    VanillaJsChat.onSendMessage(sendCallback)

    inputMessage.value = message
    sendBtn.click()

    expect(sendCallback).toBeCalled()
  })

  test('onSendMessage call method when input enter key press', () => {
    VanillaJsChat.init()

    const inputMessage = document.querySelector('#vanilla-js-message')
    const message = faker.random.word()
    const sendCallback = jest.fn()

    VanillaJsChat.onSendMessage(sendCallback)

    inputMessage.value = message

    const eventObj = document.createEvent("Events")
    eventObj.initEvent("keypress", true, true)
    eventObj.key = 'Enter'
    inputMessage.dispatchEvent(eventObj)

    expect(sendCallback).toBeCalled()
  })

  test('onSendMessage should return throw when callback isnt function', () => {
    VanillaJsChat.init()
    expect(() => VanillaJsChat.onSendMessage(null)).toThrow()
  })

  test('addMessage should return throw when has no name', () => {
    VanillaJsChat.init()
    expect(() => VanillaJsChat.addMessage(null)).toThrow()
  })

  test('addMessage should return throw when color isnt a string', () => {
    VanillaJsChat.init()
    const name = faker.random.word()
    const message = faker.random.word()
    expect(() => VanillaJsChat.addMessage(name, message, null, 'left')).toThrow()
  })

  test('addMessage should return throw when side isnt a string or not left or right', () => {
    VanillaJsChat.init()
    const name = faker.random.word()
    const message = faker.random.word()
    expect(() => VanillaJsChat.addMessage(name, message, 'blue', null)).toThrow()
    expect(() => VanillaJsChat.addMessage(name, message, 'blue', 'center')).toThrow()
  })

  test('addMessage should add a message into chat body', () => {
    VanillaJsChat.init()
    const name = faker.random.word()
    const message = faker.random.word()
    const color = faker.random.arrayElement(['red','blue','yellow','green'])
    const side = faker.random.arrayElement(['left','right'])

    const chatBody = document.querySelector('.vanilla-js-chat__body')
    expect(chatBody.children.length).toBe(0)

    VanillaJsChat.addMessage(name, message, color, side)
    expect(chatBody.children.length).toBe(1)

    const nameEl = chatBody.children[0].querySelector('.vanilla-js-chat__message__name')
    expect(nameEl.innerHTML).toEqual(name)

    const messageEl = chatBody.children[0].querySelector('.vanilla-js-chat__message__text')
    expect(messageEl.innerHTML).toEqual(message)
  })

  test('restart should remove and create a chat instance', () => {
    VanillaJsChat.init()
    const chatInstance = document.querySelector('.vanilla-js-chat')

    VanillaJsChat.restart()

    const newChatInstance = document.querySelector('.vanilla-js-chat')
    expect(chatInstance === newChatInstance).toBe(false)
  })

  test('restart should init if has current instance', () => {
    VanillaJsChat.restart()

    const chatInstance = document.querySelector('.vanilla-js-chat')
    expect(!!chatInstance).toBe(true)
  })
})
