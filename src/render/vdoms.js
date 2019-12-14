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

const messageVdom = {
  type: 'div',
  props: {
    class: 'vanilla-js-chat__message right green'
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
            textContent: 'Bruno Casotto'
          },
        },
        {
          type: 'p',
          props: {
            class: 'vanilla-js-chat__message__text',
            textContent: 'E simplesmente uma simulação de texto da indústria tipográfica.'
          },
        }
      ]
    },
  ]
}

const leftMessageVdom = {
  type: 'div',
  props: {
    class: 'vanilla-js-chat__message left blue'
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
            textContent: 'Bruno Casotto'
          },
        },
        {
          type: 'p',
          props: {
            class: 'vanilla-js-chat__message__text',
            textContent: 'E simplesmente uma simulação de texto da indústria tipográfica.'
          },
        }
      ]
    },
  ]
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
  children: [
    messageVdom,
    leftMessageVdom,
    messageVdom,
    messageVdom,
    messageVdom,
    leftMessageVdom,
    leftMessageVdom,
  ]
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
        name: 'message',
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
