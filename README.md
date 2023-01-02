# Digitalk - Teste para Front End

<p align="center">

<br>

<p align="center">
  <a href="#user-content-qual-o-desafio">Sobre</a> •
  <a href="#user-content-utilização-do-widget">Utilização do widget</a> •
  <a href="#user-instalação-local">Instalação Local</a> •
  <a href="#user-content-tecnologias-utilizadas">Tecnologias Utilizadas</a>
</p>

![Capa do Projeto](public/digitalk.png)

</p>

<br>

## Qual o desafio?

<!-- <p align="center">
<img src="./src/assets/images/logo.svg" width="600px">
</p align="justify"> -->

Criar um widget para embedar em uma página externa.

Esse widget deve conter:

- Botão para iniciar
- Tela de boas vindas, que solicita o nome do usuário e após o preenchimento deve seguir para a tela de chat
- Tela de chat, deve funcionar da seguinte forma:
  1. Se o usuário não enviar mensagens dentro de 1 minuto o chat deve responder automaticamente "[nome do cliente], você enviou [quantidade de mensagens enviadas] mensagens"
  2. Se o usuário ficar inativo por 3 minutos ou mais, o chat deve encerrar a sessão automaticamente e deve exibir um botão para retornar ao botão inicial.

## Utilização do widget

Se desejar utilizar o widget, basta utilizar a tag iframe, com o link mostrado abaixo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <iframe
      src="https://chat-digitalk.vercel.app"
      width="450"
      height="650"
      style="border: none;
      position: absolute;
      bottom: 0;
      right: 0;
      "
    ></iframe>
  </body>
</html>
```

### Instalação local

```bash

# Clone o rep
$ git clone https://github.com/Vitor-Tx/teste-digitalk.git

# Entre na pasta raiz
$ cd teste-digitalk

# Instale as depêndencias
$ npm i

# Rode o projeto(acesse http://localhost:5173/).
$ npm run dev
```

## Tecnologias utilizadas

- TypeScript
- React ⚛
- Vite
- Styled Components 💅
- ESLint
- etc

[![license mit](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/Vitor-Tx/opjs-front-end/blob/master/LICENSE)

Feito por Vitor Teixeira. [Entre em contato!](https://www.linkedin.com/in/vitor-teixeira-eof/)
