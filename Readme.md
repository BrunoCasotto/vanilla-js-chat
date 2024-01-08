<h1 align="center"> vanilla-js-chat</h1>

<p align="center">
  <a href="https://travis-ci.com/BrunoCasotto/vanilla-js-chat"><img src="https://travis-ci.com/BrunoCasotto/vanilla-js-chat.svg?branch=master" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/vanilla-js-chat"><img src="https://img.shields.io/npm/v/vanilla-js-chat" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vanilla-js-chat"><img src="https://img.shields.io/npm/l/vanilla-js-chat.svg" alt="License"></a>
  <a href="https://codecov.io/gh/BrunoCasotto/vanilla-js-chat"><img src="https://codecov.io/gh/BrunoCasotto/vanilla-js-chat/branch/master/graph/badge.svg" alt="CodeCov"></a></p>

A project developed in vanilla JavaScript that introduces a chat interface to a web page, without dependencies or message sending logic.

<img width="350" alt="" src="https://github.com/BrunoCasotto/vanilla-js-chat/blob/master/docs/chat_image.png">


## Getting start
Install:

``` npm i --save vanilla-js-chat ```

OR

```
<link href="https://unpkg.com/vanilla-js-chat@latest/dist/vanillaJsChat.css" rel="stylesheet" >
<script src="https://unpkg.com/browse/vanilla-js-chat@latest/dist/vanillaJsChat.min.js" />
```

Basic install

```
import 'vanilla-js-chat/dist/vanillaJsChat.css'
import VanillaJsChat from 'vanilla-js-chat'

VanillaJsChat.init()
```

In the current html you should add a div with especific ID

```
  <div id="vanilla-js-chat"></div>
```

If you want another id you should pass into a init funcion the custom ID created

```
<div id="my-project-chat"></div>
VanillaJsChat.init('my-project-chat')
```

## Send message

### ```addMessage``` method params

`name` - Sender name

`message` - Content message

`color` - The background color [green, blue, yellow, red]

`side` - The side wich the message will be aligned [right, left]

```VanillaJsChat.addMessage('John Doe', 'I`m baba yaga', 'red', 'right')```

## Get user message
The method `onSendMessage` receives a callback as parameter, every message send by a user this callback is called. As many callbacks as needed can be inserted.

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

## Close and remove instance
```VanillaJsChat.close()```

## Restart chat
```VanillaJsChat.restart()```
