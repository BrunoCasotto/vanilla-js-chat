export const headerVdom = {
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

export const createMessageVdom = ({ name, message, color, side }) => ({
  type: 'div',
  props: {
    class: `vanilla-js-chat__message ${side} ${color}`
  },
  children: [
    {
      type: 'div',
      props: {
        class: 'vanilla-js-chat__message__body'
      },
      children: [
        {
          type: 'p',
          props: {
            class: 'vanilla-js-chat__message__name',
            textContent: name
          },
        },
        {
          type: 'p',
          props: {
            class: 'vanilla-js-chat__message__text',
            textContent: message
          },
        }
      ]
    },
  ]
})

export const bodyVdom = {
  type: 'div',
  props: {
    class: 'vanilla-js-chat__body'
  },
}

export const controllerVdom = {
  type: 'div',
  props: {
    class: 'vanilla-js-chat__controller'
  },
  children: [
    {
      type: 'input',
      props: {
        id: 'vanilla-js-message',
        name: 'inputMessage',
        class: 'vanilla-js-chat__input',
        textContent: 'enviar'
      },
    },
    {
      type: 'button',
      props: {
        name: 'button',
        id: 'vanilla-js-button',
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
  }
}
