import faker from 'faker'

import {
  headerVdom,
  bodyVdom,
  controllerVdom,
  chatVdom,
  createMessageVdom,
} from './index'

describe('Vdoms', () => {
  test('headerVdom should be a object', () => {
    expect(typeof headerVdom).toBe('object')
  })

  test('headerVdom should contains basic properties', () => {
    expect(headerVdom).toHaveProperty('type')
    expect(headerVdom).toHaveProperty('children')
    expect(headerVdom).toHaveProperty('props')
  })

  test('bodyVdom should be a object', () => {
    expect(typeof bodyVdom).toBe('object')
  })

  test('bodyVdom should contains basic properties', () => {
    expect(bodyVdom).toHaveProperty('type')
    expect(bodyVdom).toHaveProperty('props')
  })

  test('chatVdom should be a object', () => {
    expect(typeof chatVdom).toBe('object')
  })

  test('chatVdom should contains basic properties', () => {
    expect(chatVdom).toHaveProperty('type')
    expect(chatVdom).toHaveProperty('props')
  })

  test('controllerVdom should be a object', () => {
    expect(typeof controllerVdom).toBe('object')
  })

  test('controllerVdom should contains basic properties', () => {
    expect(controllerVdom).toHaveProperty('type')
    expect(controllerVdom).toHaveProperty('props')
    expect(controllerVdom).toHaveProperty('children')
    expect(controllerVdom.children.length).toBe(2)
  })

  test('createMessageVdom should be a function', () => {
    expect(typeof createMessageVdom).toBe('function')
  })

  test('createMessageVdom should return correct name Object', () => {
    const name = faker.random.word()
    const vdom = createMessageVdom({ name })
    expect(vdom.children[0].children[0].props.textContent).toBe(name)
  })

  test('createMessageVdom should return correct message Object', () => {
    const message = faker.random.word()
    const vdom = createMessageVdom({ message })
    expect(vdom.children[0].children[1].props.textContent).toBe(message)
  })

  test('createMessageVdom should return correct side and color class', () => {
    const color = faker.random.word()
    const side = faker.random.word()

    const vdom = createMessageVdom({ color, side })
    expect(vdom.props.class.search(side) !== -1).toBe(true)
    expect(vdom.props.class.search(color) !== -1).toBe(true)
  })
})