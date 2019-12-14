import { createElement } from './dom-core'

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
