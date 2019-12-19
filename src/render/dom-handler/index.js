import DomCore from './../dom-core'

const DomHandler = () => {

  /**
   * Method to create single element and childrens
   * @param {object} vdom object to represent dom
   */
  const renderElement = (vdom) => {
    const createdElement = DomCore.createElement(vdom)
    const { children } = vdom

    if(children) {
      children.forEach( child => {
        createdElement.appendChild(renderElement(child))
      })
    }

    return createdElement
  }

  /**
   * Method to resolve vdom and render components
   * @param {HTMLElement} wrapper when created element should be append
   * @param {object} vdom object to represent dom
   */
  const render = ({ wrapper, chat, header, body, controller }) => {
    chat.appendChild(header)
    chat.appendChild(body)
    chat.appendChild(controller)

    wrapper.appendChild(chat)

    return wrapper
  }

  const insertMessage = (bodyElement, messageElement) => {
    bodyElement.insertBefore(messageElement, null)
    return bodyElement
  }

  return {
    render,
    renderElement,
    insertMessage,
  }
}

export default new DomHandler()
