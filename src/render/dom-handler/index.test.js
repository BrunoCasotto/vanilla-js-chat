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

})