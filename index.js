import DomHandler from './src/dom-handler'
import { chatVdom } from './src/vdoms'

const chatTarget = document.querySelector('#vanilla-js-chat')
DomHandler.render(chatTarget, chatVdom)
