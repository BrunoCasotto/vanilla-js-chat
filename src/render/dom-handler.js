import { createElement } from './dom-core'

/**
 * Method to resolve vdom and render components
 * @param {HTMLElement} wrapper when created element should be append
 * @param {object} vdom object to represent dom
 */
const render = (wrapper, vdom) => {
  const createdElement = createElement(vdom)
  const { children } = vdom

  if(children) {
    children.forEach( child => render(createdElement, child))
  }

  wrapper.appendChild(createdElement)
}

const DomHandler = {
  render,
}

export default DomHandler
