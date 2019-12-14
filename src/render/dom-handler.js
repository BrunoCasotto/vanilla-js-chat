import DomCore from './dom-core'

const DomHandler = () => {
  /**
   * Method to resolve vdom and render components
   * @param {HTMLElement} wrapper when created element should be append
   * @param {object} vdom object to represent dom
   */
  const render = (wrapper, vdom) => {
    const createdElement = DomCore.createElement(vdom)
    const { children } = vdom

    if(children) {
      children.forEach( child => render(createdElement, child))
    }

    wrapper.appendChild(createdElement)
  }

  return {
    render,
  }
}

export default new DomHandler()
