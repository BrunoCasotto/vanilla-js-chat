const headerVdom = {
  type: 'div',
  props: {
    class: 'vanilla-js-chat__header'
  },
  children: [{
    type: 'h1',
    props: {
      class: 'vanilla-js-chat__title',
      textContent: 'Conversa'
    },
  }]
}

const bodyVdom = {
  type: 'div',
  props: {
    class: 'vanilla-js-chat__body'
  },
}

const controllerVdom = {
  type: 'div',
  props: {
    class: 'vanilla-js-chat__controller'
  },
  children: [
    {
      type: 'button',
      props: {
        class: 'vanilla-js-chat__btn',
        textContent: 'enviar'
      },
    }
  ]
}

export const chatVdom = {
  type: 'div',
  props: {
    class: 'vanilla-js-chat'
  },
  children: [
    headerVdom,
    bodyVdom,
    controllerVdom,
  ]
}
