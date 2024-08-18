---
title: Erro de Porta em Uso
---

O erro de "Porta em uso" acontece quando o Peacock está tentando inicializar, mas a porta configurada já está em uso.

Veja como se parece:

![Mensagem de erro emitida quando o Peacock tenta usar uma porta em uso](/img/wiki/port_in_use.png)

## O que é uma Porta?

Em termos simples, uma porta é uma conexão realizada entre programas ou computadores para trocar informações.
Para que o jogo se comunique com o servidor Peacoc, o servidor deve ocupar uma porta.
Portas devem ter um número atribuído. A porta padrão usada pelo Peacock é 80, mas números de portas podem ser qualquer número inteiro entre 1 e 65535.

## Visual Studio

Se você utiliza o Visual Studio, você pode ter instalado alguns serviços que interferem com o Peacock por também acessar a Porta 80. Para resolver:

1. Clique no botão Windows e em R ao mesmo tempo.
2. Escreva services.msc na caixa de texto, e então clique em OK.
3. Procure por `W3SVC: Serviço de Publicação da World Wide Web` e `Serviço de Agente de Implantação da Web` no gerenciador de serviços.
4. Desligue ambos se presentes.
5. Tente novamente, se não funcionar, reinicie seu computador, e depois tente mais uma vez.

## Alterando a Porta

Abaixo você encontra informações sobre como mudar a Porta usada pelo Peacock, se você desejar parar a utilização na Porta 80:

In the instructions below, please substitute `PORTNUMBER` with a port that is not currently in use on your PC, e.g. `8080`, `6969`, `3000`, etc.

- Mude `Start Server.cmd` como descrito abaixo:
  ```bash
  @echo off
  SET PORT=PORTNUMBER
  SET LOG_LEVEL_CONSOLE=info
  SET LOG_CATEGORY_DISABLED=
  SET LOG_MAX_FILES=14d
  .\nodedist\node.exe chunk0.js
  PAUSE
  ```
- Type `127.0.0.1:PORTNUMBER` into the Patcher's URL field, as shown here (click on the text and then type, the UI/UX will hopefully be improved soon): ![](/img/wiki/patcher_port.png)

## No Linux

A porta padrão do Peacock é 80, mas no Linux, o acesso normal do usuário não garante a permissão de utilizar a porta 80.
Verifique a seção Alterando a Porta acima.
