---
title: Perguntas Frequentes (FAQ) / Solução de Problemas
---

## Perguntas Frequents sobre Resolução de Problemas

### Versão Errada do Jogo / Plataforma

-   Veja a seção "Do que eu Preciso para Rodar o Peacock" deste guia, tenha a certeza de que você tem uma versão e plataforma compatíveis, etc.
    -   **Xbox Game Pass / Versão da Microsoft PC de Hitman 3 não são suportadas (comumente perguntado)**.
    -   Veja o [Guia de Instalação de Linux](https://thepeacockproject.org/wiki/guides/linux-setup) se estiver usando Linux.
-   Tenha a certeza de que você tem as últimas versões do Hitman 3 e do Peacock, versões mais antigas podem não ser suportadas.

### Tente se Reconectar

-   Podem levar algumas tentativas para se conectar ao Peacock. Se não puder se conectar, tente voltar ao aplicativo inicializador do Peacock e clique em "Repatch", ou "Reinicializar", até que o inicializador mostre "Sucessfully patched ID", ou "ID inicializada com sucesso".
-   Se o jogo já está conectado aos servidores oficiais, você pode precisar desconectar o jogo antes para se conectar ao Peacock. Para se desconectar dos servidores oficiais, vá para "Options" no menu principal do Hitman 3, e depois em "Privacy Policy", e "Opt out". Quando você tentar se desconectar depois disso, você deverá estar no Peacock.
-   Similarmente, você pode ficar offline quando conectado ao Peacock, ativar a opção no inicializador do Peacock para voltar aos servidores oficiais, e clicar em ficar "online" novamente para se conectar aos servidores oficiais.
-   **Se você ainda estiver tendo problemas ao se conectar, continue na seção abaixo.**

### Solução de Problemas de Conexão

-   Como explicado na página [O Que é o Peacock](https://thepeacockproject.org/wiki/intel/what-is-peacock), **você precisa estar conectado à Internet, pelo menos inicialmente, para usar o Peacock**. Isso tem o único propósito de passar pela verificação Steam / Epic. Após conectar ao Peacock na primeira vez, você poderá desconectar da Internet e permanecer conectado ao Peacock pela duração da sua sessão de jogo.
    -   Se você tiver um celular com plano de Internet, você pode usá-lo como ponto de acesso de Internet para o seu computador se conectar.
-   Não tente usar o Peacock se esta for a sua primeira vez jogando o jogo. Você precisa se conectar aos servidores oficiais pelo menos uma vez antes de se conectar ao Peacock. Depois de ter conectado aos servidores oficiais pelo menos uma vez, você não precisa de fazê-lo novamente no futuro para usar o Peacock.
-   Tente rodar o `Start Server.cmd` como administrador.
-   Mantenha a opção "Use http instead of https" no Peacock ativada a não ser que esteja jogando o Modo Fantasma.

-   O Peacock utiliza por padrão a Porta de Rede 80 no seu computador para o servidor do Peacock.

    -   Se possível, veja quaisquer processos estão atualmente utilizando o Peacock escrevendo `netstat -ano | find ":80" | find "LISTEN"` no seu terminal, e então checando a categoria "Details" do Gerenciador de Tarefas para encontrar o processo baseado em PID de qualquer coisa que esteja ocupando a Porta 80.
    -   Se você utiliza o Visual Studio, você pode ter instalado alguns serviços que interferem com o Peacock por também utilizar a Porta de Rede 80. Para resolver:

        1. Clique no botão Windows e em R ao mesmo tempo
        2. Escreva services.msc na caixa de texto, e então clique em ok
        3. Verifique por W3SVC: World Wide Web Publishing Service and Web Deployment Agent Service (Serviço de Publicação de World Wide Web e Serviço de Agente Remoto de Implantação da Web)
        4. Desligue ambos se presentes
        5. Tente novamente, se não funcionar, reinicie seu computador, e depois tente mais uma vez

    -   Se por alguma razão você não suporta a ideia de parar quaiquer processos que você tenha rodando na Porta 80, edite seu arquivo `Start Server.cmd` para iniciar a Porta em outra linha. Tenha a certeza de entrar com `127.0.0.1:PORTNUMBER` na sua entrada "Server Address" do Patcher do Peacock também, com `PORTNUMBER` estando ativo em qualquer porta que você tenha configurado em `Start Server.cmd`.
        -   Tenha [esta imagem de exemplo](https://media.discordapp.net/attachments/839264571990343681/985885230634242048/unknown.png) como referência para saber o que escrever no `Start Server.cmd`.
        -   Tenha [esta imagem de exemplo](https://media.discordapp.net/attachments/839264571990343681/992523717869568050/unknown.png) como referência para saber o que escrever no Patcher do Peacock.

### Itens Faltantes / Mapas

-   Para usar itens dos 7 Pecados Capitais, tenha certeza de ter comprado a DLC 7 Pecados Capitais. Então delete a pasta `userdata` e reinicie o jogo.

    -   Se você estiver com problemas em encontrar a pasta `userdata`, [veja esta imagem de exemplo](https://media.discordapp.net/attachments/833505136290299935/991071183732613200/unknown.png).

### Outro

-   Salvamentos em jogo são suportados, mas note que você só pode usar salvamentos dos servidores oficiais apenas na versão dos servidores oficiais do jogo, e salvamentos no Peacock apenas na versão Peacock do jogo.
-   Desafios (atualmente implementados em Paris) ainda estão em fase de desenvolvimento e podem ter bugs. Relate erros no canal `#help` no Discord do Peacock.
-   Usar o Peacock afetará seu perfil nos servidores oficiais de maneiras bem imperceptíveis.
    -   Devido ao fato que não temos implementado propriamente alguns recursos de menor importância como avisos de spoiler em conteúdo/história, vai colocar todos em um estado como se 'eu já tivesse jogado'. Além disso, não deve ter qualquer efeito.
-   Nota: Se essa é sua primeira vez jogando (tanto no Peacock como nos servidores oficiais), algumas saídas estarão bloquadas. Você terá que desbloquear as saídas de Dubai ([precisa desbloquear os elevadores](https://youtu.be/IEQgRQyQRf8)), saídas de Dartmoor ([precisa sair por meio da motocicleta pelo menos uma vez](https://youtu.be/AJtJZe9jEi8?t=151)), e saídas de Colorado ([precisa ter usado a saída do abrigo de tornados pelo menos uma vez](https://youtu.be/3XKWHrKpXwk?t=140)). Essas saídas estão sob responsabilidade do usuário.
-   Veja a página de [Recursos Únicos do Peacock](../intel/loadout-profiles-elp) para mais informações em como ter múltiplos equipamentos por mapa ou escolher níveis de escalações específicos.

### Solicitando Suporte Técnico

-   Questão não respondida no FAQ acima? Pergunte no canal do servidor Discord do Peacock `#help` (https://thepeacockproject.org/discord)
    -   Esteja preparado para providenciar:
        -   Fotos do seu Servidor Peacock rodando no terminal
        -   Fotos do seu Patcher Peacock rodando
        -   Informações sobre o seu sistema operacional e versão do jogo
        -   Informações sobre o que está rodando na Porta 80 (veja [Solução de Problemas de Conexão](faq/#connection-troubleshooting) acima)
        -   Quaisquer outras informações pertinentes

## Perguntas Frequentes sobre Solicitação de Recursos

-   Para ser claro: Progressão (desbloqueando itens lentamente) não é atualmente suportado, mas é planejado para o futuro. O Peacock irá te fornecer todos os itens desbloqueáveis logo de início (baseando-se no conteúdo que você tenha adquirido).
-   Desafios em jogo estão sendo atualmente implementados na v5.0.1 do Peacock.
-   Antes de perguntar qualquer pergunta sobre o Modo Fantasma, Escalações, Contratos do Usuário e Alvos Elusivos, por favor verifique a [Página de Conteúdo Customizado](https://thepeacockproject.org/wiki/custom-content) assim como a [Página do Modo Fantasma](https://thepeacockproject.org/wiki/ghost-mode/).
-   Compatibilidade de Mods:
    -   A maioria dos Mods são compatíveis com o Peacock; existem apenas três que não são.
        -   Se um mod edita contratos (missões, Missões Especiais, etc), ele necessitará de um plugin Peacock para ser compatível.
        -   Se um mod edita o inventário de planejamento (isto é, muda as propriedades de locais de início, muda quais itens você pode trazer em missões, ou edita as roupas disponíveis para você), você também precisará de um plugin.
        -   Mudanças no menu podem também ser incompatíveis, mas devem funcionar bem. Além desses, mods devem ser compatíveis com o Peacock sem nenhum esforço extra da parte do criador do mod.
