import DomCore from './index'
import faker from 'faker'

describe('Dom core', () => {
  test('getAttributesFromProps should return attributes array', () => {
    const propsMock = {
      class: faker.random.word(),
      id: faker.random.word(),
    }

    const attArray = DomCore.getAttributesFromProps(propsMock)

    expect(Array.isArray(attArray)).toBeTruthy()
    expect(attArray.length).toBe(2)
  })

  test('getAttributesFromProps should not return textContent props', () => {
    const propsMock = {
      class: faker.random.word(),
      id: faker.random.word(),
      textContent: faker.random.word(),
    }

    const attArray = DomCore.getAttributesFromProps(propsMock)

    expect(Array.isArray(attArray)).toBeTruthy()
    expect(attArray.length).toBe(2)
  })

  test('addAttAndTextOnElement should add attributes and text on element', () => {
    const element = document.createElement('button')
    const propsMock = {
      class: faker.random.word(),
      id: faker.random.word(),
      textContent: faker.random.word(),
    }
    const attArray = DomCore.getAttributesFromProps(propsMock)

    const elementWithAtt = DomCore.addAttAndTextOnElement(element, propsMock)

    attArray.forEach(attr => {
      expect(elementWithAtt.hasAttribute(attr)).toBe(true)
      expect(elementWithAtt.getAttribute(attr)).toBe(propsMock[attr])
    })
  })

  test('createElement should return an html element', () => {
    const vdomElement = {
      type: 'div',
      props: {
        class: faker.random.word(),
        id: faker.random.word(),
        textContent: faker.random.word(),
      }
    }
    const element = DomCore.createElement(vdomElement)

    expect(element instanceof HTMLElement).toBeTruthy()
    expect(element.tagName).toEqual(vdomElement.type.toUpperCase())
  })
})