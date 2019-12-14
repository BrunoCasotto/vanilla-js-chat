import { createElement } from './dom-core'

const chatVdom = {
  type: 'div',
  props: {
    class: 'vanilla-js-chat'
  },
  children: [{
    type: 'h1',
    props: {
      class: 'vanilla-js-chat__title',
      textContent: 'Conversa'
    },
  }]
}

const render = (wrapper) => {
  wrapper.appendChild(createElement(chatVdom))
}

const DomHandler = {
  render,
}

export default DomHandler
