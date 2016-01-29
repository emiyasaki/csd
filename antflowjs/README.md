# AntFlowJS #

Versão em NodeJS do AntFlow.

Para testar esta versão, é necessário instalar o [NodeJS](https://nodejs.org/). Com isto, o NPM também será instalado.

Depois da instalação, através da linha de comando, vá até o diretório e digite `npm install` para que as dependências do projeto sejam instaladas.

Este projeto também usa o [Bower](http://bower.io/). Embora ele seja instalado como dependência no projeto, é necessário instala-lo *globalmente*, através do comando `npm install -g bower`. Uma vez instalado, utilize o comando `bower install` para que as dependências do *view* sejam instaladas.

Além disso, também é necessário intalar o [Gulp](http://gulpjs.com/) globalmente, através do comando `npm install -g gulp`. Ele é necessário para executar as tarefas (injeção das dependências nos *views* e execução do servidor).

Para testar a aplicação, utilize o comando `gulp run`. O servidor rodará na porta 29999 (http://localhost:29999).