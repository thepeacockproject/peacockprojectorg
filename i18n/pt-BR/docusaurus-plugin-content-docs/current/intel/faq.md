---
title: Perguntas Frequentes (FAQ) / Solução de Problemas
---

## Perguntas Frequents sobre Resolução de Problemas

### Versão Errada do Jogo / Plataforma

-   Veja a seção [Requerimentos](./requirements.md) deste guia, tenha a certeza de que você tem uma versão e plataforma compatíveis, etc.
    -   **Xbox Game Pass / Versão da Microsoft PC de Hitman 3 não são suportadas (comumente perguntado)**.
    -   Veja o [Guia de Instalação de Linux](../guides/./linux-setup.md) se estiver usando Linux.
-   Tenha a certeza de que você tem as últimas versões do Hitman 3 e do Peacock, versões mais antigas podem não ser suportadas.

### Tente se Reconectar

-   Verifique se o Patcher está selecionado para a opção "Peacock Local" e não "IOI Official" quando estiver tentando se conectar ao Peacock.
-   Podem levar algumas tentativas para se conectar ao Peacock. Se não puder se conectar, tente voltar ao aplicativo inicializador do Peacock e clique em "Repatch", ou "Reinicializar", até que o inicializador mostre "Sucessfully patched ID", ou "ID inicializada com sucesso".
-   Se o jogo já está conectado aos servidores oficiais, você pode precisar desconectar o jogo antes para se conectar ao Peacock. Para se desconectar dos servidores oficiais, vá para "Options" no menu principal do Hitman 3, e depois em "Privacy Policy", e "Opt out". Quando você tentar se desconectar depois disso, você deverá estar no Peacock.
-   Similarmente, você pode ficar offline quando conectado ao Peacock, ativar a opção no inicializador do Peacock para voltar aos servidores oficiais, e clicar em ficar "online" novamente para se conectar aos servidores oficiais.
-   **Se você ainda estiver tendo problemas ao se conectar, continue na seção abaixo.**

### Solução de Problemas de Conexão

-   Como explicado na página [O Que é o Peacock](./what-is-peacock.md), **você precisa estar conectado à Internet, pelo menos inicialmente, para usar o Peacock**. Isso tem o único propósito de passar pela verificação Steam / Epic. Após conectar ao Peacock na primeira vez, você poderá desconectar da Internet e permanecer conectado ao Peacock pela duração da sua sessão de jogo.
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
        SET PORT=NumeroDaPorta
        .\nodedist\node.exe chunk0.js
        PAUSE
        ```
        -   Escreva `localhost:NumeroDaPorta` ou `127.0.0.1:NumeroDaPorta` na janela do servidor, como mostrado aqui: ![](/img/patcher_port.png)

### Itens Faltantes / Mapas

-   A partir da versão v6, o Peacock deve detectar automaticamente quando você adquirir uma nova DLC, e dar acesso a novos itens / mapas
-   v6.1.0 introduziu progressão ao Peacock, o que significa que você pode desbloquear novos itens ao longo do jogo. Isso é ativado por padrão, para emular a experiência oficial dos servidores. Para desativar isso, mude `enableMasteryProgression` no arquivo `options.ini` para `false`.

### Outro

-   Veja a página de [Recursos Únicos do Peacock](../intel/loadout-profiles-elp.md) para mais informações em como ter múltiplos equipamentos por mapa ou escolher níveis de escalações específicos.
-   Trajes Padrão - Se você ativar `getDefaultSuits = true` no seu arquivo `options.ini` na sua pasta de instalação do Peacock, por favor leia o seguinte comportamento:
    -   Qualquer discussão sobre "trajes padrão" abaixo se refere à versão do traje padrão **sem luvas** - qualquer versão do traje de 47 quando você inicia a missão pela primeira vez.
    -   Alguns trajes padrão de Hitman 2 e Hitman 3 não são usáveis em todos os mapas no jogo normalmente. Isso pode ser corrigido usando https://www.nexusmods.com/hitman3/mods/401
    -   Se você escolher não usar o mod acima, note o seguinte:
        -   Trajes padrão da Temporada 1 (e.g. Traje de Verão de Marrakesh): Funciona em todos os mapas
        -   Trajes padrão da Temporada 2 (e.g. Turista Casual de Santa Fortuna): Funciona em mapas da Temporada 2 e 3
            -   Nova Iorque e Maldivas (Haven) estão incluídas na Temporada 2
        -   Trajes padrão da Temporada 3 (e.g. Traje Urbano Neon de Chongqing): Funciona apenas em mapas da Temporada 3
        -   A Ilha Ambrose se encontra fora do sistema de temporadas, então seu traje padrão (Roupa de Mergulho de Guerrilha) é usável em todos os mapas, e os trajes padrão de qualquer mapa pode ser usado na Ilha Ambrose

### Solicitando Suporte Técnico

-   Questão não respondida no FAQ acima? Pergunte no canal do servidor Discord do Peacock `#help` (https://thepeacockproject.org/discord)
    -   Esteja preparado para providenciar:
        -   Fotos do seu Servidor Peacock rodando no terminal
        -   Fotos do seu Patcher Peacock rodando
        -   Informações sobre o seu sistema operacional e versão do jogo
        -   Informações sobre o que está rodando na Porta 80 (veja [Solução de Problemas de Conexão](#connection-troubleshooting) acima)
        -   Quaisquer outras informações pertinentes

## Como o Peacock Funciona FAQ

-   Veja [O que é o Peacock](./what-is-peacock.md)
    -   Veja o link acima por questões sobre integração do Freelancer com o Peacock, se você precisa ou não de internet para usar o Peacock ou qualquer outra questão geral sobre como o Peacock funciona

## Perguntas Frequentes sobre Solicitação de Recursos

-   Antes de perguntar qualquer coisa sobre o Modo Fantasma, Escalações, Contratos do Usuário e Alvos Elusivos, por favor verifique a [Página de Conteúdo Customizado](.././custom-content.md) assim como a [Página do Modo Fantasma](.././ghost-mode.md).
-   Compatibilidade de Mods:
    -   A maioria dos Mods são compatíveis com o Peacock; existem apenas três que não são.
        -   Se um mod edita contratos (missões, Missões Especiais, etc), ele necessitará de um plugin Peacock para ser compatível.
        -   Se um mod edita o inventário de planejamento (isto é, muda as propriedades de locais de início, muda quais itens você pode trazer em missões, ou edita as roupas disponíveis para você), você também precisará de um plugin.
        -   Mudanças no menu podem também ser incompatíveis, mas devem funcionar bem. Além desses, mods devem ser compatíveis com o Peacock sem nenhum esforço extra da parte do criador do mod.
