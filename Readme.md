# Vanilla js chat
Uma interface gráfica de chat em javascript sem dependencias.


## todo [interface]
Html initialize
```
<div id="vanilla-js-chat">Carregando chat...</div>

<script>
  VanillaJsChat.init()
</script>
```

```
  VanillaJsChat.restart()
```

```
  VanillaJsChat.sendMessage({
    name: 'John Doe',
    color: 'blue', // [blue, red, green, yellow, black]
    message: 'Lorem ipsu, John Doe here guys.'
  })
```

```
  VanillaJsChat.onSend(({ message }) => {
    // Send message
  })
```

```
  VanillaJsChat.onClose(() => {
    // Close connection
  })
```

