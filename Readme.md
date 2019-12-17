# vanilla-js-chat

Um projeto com desenvolvido em javascript puro que introduz em uma página web uma interface de chat, sem dependências ou lógicas de mensageria.

<img width="350" alt="" src="https://github.com/BrunoCasotto/vanilla-js-chat/blob/master/docs/chat_image.png">


## Implementando o chat
Instalação

``` npm i --save vanilla-js-chat ```

Implementação básica do projeto.

```
import 'vanilla-js-chat/dist/vanillaJsChat.css'
import VanillaJsChat from 'vanilla-js-chat'

VanillaJsChat.init()
```

## Capturando mensagens enviadas pelo usuario
Os parâmetros que o metodo `onSendMessage` recebem são:

`name` - Nome do usuário que envia a mensagem

`message` - A mensagem de texto que deverá ser exibida non chat

`color` - A cor de fundo da mensagem no chat [green, blue, yellow, red]

`side` - O lado que a mensagem sera alinhada [right, left]

```
  const receiveMessage = ({ message }) => {
    VanillaJsChat.addMessage('John Doe', message, 'green', 'right')
  }

  VanillaJsChat.onSendMessage(receiveMessage)
````
