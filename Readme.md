# vanilla-js-chat

Um projeto com desenvolvido em javascript puro que introduz em uma página web uma interface de chat, sem dependências ou lógicas de mensageria.

<img width="350" alt="" src="https://github.com/BrunoCasotto/vanilla-js-chat/blob/master/docs/chat_image.png">


## Implementando o chat
Instalação:

``` npm i --save vanilla-js-chat ```

OU

```
<link href="https://unpkg.com/vanilla-js-chat@latest/dist/vanillaJsChat.css" rel="stylesheet" >
<script src="https://unpkg.com/browse/vanilla-js-chat@latest/dist/vanillaJsChat.min.js" />
```

Implementação básica do projeto.

```
import 'vanilla-js-chat/dist/vanillaJsChat.css'
import VanillaJsChat from 'vanilla-js-chat'

VanillaJsChat.init()
```

## Enviar mensagem
Os parâmetros que o metodo `addMessage` recebem são:

`name` - Nome do usuário que envia a mensagem

`message` - A mensagem de texto que deverá ser exibida non chat

`color` - A cor de fundo da mensagem no chat [green, blue, yellow, red]

`side` - O lado que a mensagem sera alinhada [right, left]

```VanillaJsChat.addMessage('John Doe', 'I`m baba yaga', 'red', 'right')```

## Capturando mensagens enviadas pelo usuario
O método `onSendMessage` recebe uma callback como parametro, toda vez que o usuário enviar uma mensagem essa callback será chamada. Podem ser inseridas quantas callbacks forem necessárias.
```
  const storageMessage = ({ message }) => {
    database.save(message)
  }
  
  const replyMessage = ({ message }) => {
    const responseMessage = handleMessage(message)
    
    VanillaJsChat.addMessage('John Doe', responseMessage, 'red', 'right')
  }

  VanillaJsChat.onSendMessage(storageMessage) // first callback
  VanillaJsChat.onSendMessage(replyMessage) // second callback
````

## Fechar o chat e remover a instancia
```VanillaJsChat.close()```

## Reiniciar o chat
```VanillaJsChat.restart()```
