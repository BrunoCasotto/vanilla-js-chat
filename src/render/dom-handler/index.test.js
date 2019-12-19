import DomHandler from './index'
import faker from 'faker'

describe('Dom Handler', () => {
  test('RenderElement should return an HTML element', () => {
    const vdomElement = {
      type: 'div',
      props: {
        class: faker.random.word(),
        id: faker.random.word(),
        textContent: faker.random.word(),
      }
    }

    const element = DomHandler.renderElement(vdomElement)

    expect(element instanceof HTMLElement).toBeTruthy()
    expect(element.tagName).toEqual(vdomElement.type.toUpperCase())
  })

  test('RenderElement should an HTML element and children', () => {
    const vdomElement = {
      type: 'div',
      children: [
        {
          type: 'h1',
          textContent: faker.random.word()
        },
        {
          type: 'p',
          textContent: faker.random.word()
        }
      ]
    }

    const element = DomHandler.renderElement(vdomElement)
    Array.from(element.children).forEach((child, index) => {
      expect(child.tagName).toBe(vdomElement.children[index].type.toUpperCase())
    })
  })

  test('insertMessage should insert a message into chatBody', () => {
    const bodyElement = document.createElement('div')

    const messageElement = document.createElement('div')
    messageElement.innerText = faker.random.word()

    const elementWithMessage = DomHandler.insertMessage(bodyElement, messageElement)
    expect(elementWithMessage.children.length).toBe(1)
  })

  test('render should append chat html in correct sequence', () => {
    const wrapper = document.createElement('div')
    const chat = document.createElement('div')
    const header = document.createElement('div')
    const body = document.createElement('div')
    const controller = document.createElement('div')

    wrapper.setAttribute('id', 'wrapper'),
    chat.setAttribute('id', 'chat'),
    header.setAttribute('id', 'header'),
    body.setAttribute('id', 'body'),
    controller.setAttribute('id', 'controller')

    const rendererWrapper = DomHandler.render({ wrapper, chat, header, body, controller })
    expect(rendererWrapper.getAttribute('wrapper'))
    expect(rendererWrapper.children[0].getAttribute('chat'))
    expect(rendererWrapper.children[0].children[0].getAttribute('header'))
    expect(rendererWrapper.children[0].children[0].getAttribute('body'))
    expect(rendererWrapper.children[0].children[0].getAttribute('controller'))
  })

})