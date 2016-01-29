# AntFlowJS #

## Versão em NodeJS do AntFlow.

Utilize o editor de texto de sua preferência para visualizar o código. Existem boas opções como o [Sublime Text 3](http://www.sublimetext.com/) ou o [Notepad++](https://notepad-plus-plus.org/), ou IDEs mais simples como o [Visual Studio Code](https://code.visualstudio.com/) ou o [Brackets](http://brackets.io/).

Para testar esta versão, é necessário instalar o [NodeJS](https://nodejs.org/). Com isto, o NPM também será instalado.

### Instalando dependências
Depois da instalação, através da linha de comando, vá até o diretório e digite `npm install` para que as dependências do projeto sejam instaladas.

Este projeto também usa o [Bower](http://bower.io/). Embora ele seja instalado como dependência no projeto, é necessário instala-lo *globalmente*, através do comando `npm install -g bower`. Uma vez instalado, utilize o comando `bower install` para que as dependências do *view* sejam instaladas.

Além disso, também é necessário intalar o [Gulp](http://gulpjs.com/) globalmente, através do comando `npm install -g gulp`. Ele é necessário para executar as tarefas (injeção das dependências nos *views* e execução do servidor).

### Executando a aplicação
Para testar a aplicação, utilize o comando `gulp run`. O servidor rodará na porta 29999 (http://localhost:29999).
