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

-   Verifique se o Patcher está selecionado para a opção "Peacock Local" e não "IOI Official" quando estiver tentando se conectar ao Peacock.
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

    -   Abaixo você encontra informações sobre como mudar o uso da Port Peacock, se você desejar parar a utilização na Port 80:
        -   Nas instruções abaixo, substitua `NumeroDaPort` por uma port que não esteja sendo atualmente executada em seu PC, e.g. `8080`, `6969`, `3000`, etc.
        -   Mude `Start Server.cmd` como descrito abaixo:
        ```
        @echo off
        SET PORT=NumeroDaPort
        .\nodedist\node.exe chunk0.js
        PAUSE
        ```
        -   Digite `localhost:NumeroDaPort` na janela do servidor, [como mostrado aqui](https://media.discordapp.net/attachments/839264571990343681/992523717869568050/unknown.png)

### Itens Faltantes / Mapas

-   Se você adquiriu recentemente uma DLC e não está conseguindo acessar o conteúdo no Peacock, verifique se você realmente ativou a DLC. Depois delete a pasta `userdata` e reinicie o servidor.

    -   Se você estiver com problemas em encontrar a pasta `userdata`, [veja esta imagem de exemplo](https://media.discordapp.net/attachments/833505136290299935/991071183732613200/unknown.png).

-   Starting from v6, Peacock should be able to automatically get your latest DLCs. So no need to delete the userdata folder anymore.

### Outro

-   Veja a página de [Recursos Únicos do Peacock](../intel/loadout-profiles-elp) para mais informações em como ter múltiplos equipamentos por mapa ou escolher níveis de escalações específicos.
-   Default Suits - If you tick `getDefaultSuits = true` in your `options.ini` file in your Peacock Install folder, please note the following behavior:
    -   Any discussion for "default suits" below refers to the version of the default suit **without gloves** - whichever version of the suit you normally would use for that level when starting it up for the first time ever.
    -   Some Hitman 2 and Hitman 3 default suits are not usable in all maps in the vanilla game. This can be fixed using https://www.nexusmods.com/hitman3/mods/401/
    -   If you choose not to use the above mod, then note the following:
        -   Season 1 default suits (e.g. Summer Suit from Marrakesh): Works on all maps
        -   Season 2 default suits (e.g. Casual Tourist from Santa Fortuna): Works on Season 2 and 3 Maps
            -   New York and Maldives (Haven) are included in Season 2
        -   Season 1 default suits (e.g. Neon City Suit from Chongqing): Works on Season 3 Maps Only
        -   Ambrose Island is outside of the Season system so to speak, Ambrose Default suit (Guerilla Wetsuit) is usable on all maps, and all maps' Default Suits can be used in Ambrose

### Solicitando Suporte Técnico

-   Questão não respondida no FAQ acima? Pergunte no canal do servidor Discord do Peacock `#help` (https://thepeacockproject.org/discord)
    -   Esteja preparado para providenciar:
        -   Fotos do seu Servidor Peacock rodando no terminal
        -   Fotos do seu Patcher Peacock rodando
        -   Informações sobre o seu sistema operacional e versão do jogo
        -   Informações sobre o que está rodando na Porta 80 (veja [Solução de Problemas de Conexão](faq/#connection-troubleshooting) acima)
        -   Quaisquer outras informações pertinentes

## How Peacock Works FAQ

-   See [What is Peacock](https://thepeacockproject.org/wiki/intel/what-is-peacock)

## Perguntas Frequentes sobre Solicitação de Recursos

-   Antes de perguntar qualquer pergunta sobre o Modo Fantasma, Escalações, Contratos do Usuário e Alvos Elusivos, por favor verifique a [Página de Conteúdo Customizado](https://thepeacockproject.org/wiki/custom-content) assim como a [Página do Modo Fantasma](https://thepeacockproject.org/wiki/ghost-mode/).
-   Compatibilidade de Mods:
    -   A maioria dos Mods são compatíveis com o Peacock; existem apenas três que não são.
        -   Se um mod edita contratos (missões, Missões Especiais, etc), ele necessitará de um plugin Peacock para ser compatível.
        -   Se um mod edita o inventário de planejamento (isto é, muda as propriedades de locais de início, muda quais itens você pode trazer em missões, ou edita as roupas disponíveis para você), você também precisará de um plugin.
        -   Mudanças no menu podem também ser incompatíveis, mas devem funcionar bem. Além desses, mods devem ser compatíveis com o Peacock sem nenhum esforço extra da parte do criador do mod.
