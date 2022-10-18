---
title: Perguntas Frequentes (FAQ) / Solução de Problemas
---

## Perguntas Frequents sobre Resolução de Problemas

### Wrong Game Version / Platform

-   Veja a seção "Do que eu Preciso para Rodar o Peacock" deste guia, tenha a certeza de que você tem uma versão e plataforma compatíveis, etc.
    -   **Xbox Game Pass / Microsoft PC version of Hitman 3 is not supported (commonly asked)**.
    -   Check [Linux Setup Guide](https://thepeacockproject.org/wiki/guides/linux-setup) if on Linux.
-   Tenha a certeza de que você tem as últimas versões do Hitman 3 e do Peacock, versões mais antigas podem não ser suportadas.

### Try to Reconnect

-   Podem levar algumas tentativas para se conectar ao Peacock. Se não puder se conectar, tente voltar ao aplicativo inicializador do Peacock e clique em "Repatch", ou "Reinicializar", até que o inicializador mostre "Sucessfully patched ID", ou "ID inicializada com sucesso".
-   Se o jogo já está conectado aos servidores oficiais, você pode precisar desconectar o jogo antes para se conectar ao Peacock. Para se desconectar dos servidores oficiais, vá para "Options" no menu principal do Hitman 3, e depois em "Privacy Policy", e "Opt out". Quando você tentar se desconectar depois disso, você deverá estar no Peacock.
-   Similarmente, você pode ficar offline quando conectado ao Peacock, ativar a opção no inicializador do Peacock para voltar aos servidores oficiais, e clicar em ficar "online" novamente para se conectar aos servidores oficiais.
-   **If you still have trouble connecting, then continue to the next section below.**

### Connection Troubleshooting

-   As explained in the [What is Peacock](https://thepeacockproject.org/wiki/intel/what-is-peacock) page, **you need to be connected to the Internet, at least initially, to use Peacock**. This is to get past Steam / Epic verification. After connecting to Peacock the first time, you may disconnect from the Internet and stay connected to Peacock for the duration of your game session.
    -   If you have a phone with cellular data plan, you can use the phone as hotspot for your computer to connect to Internet.
-   Don't try to use Peacock if it's literally your first time playing the game. You need to connect to the official servers at least once before you can connect to Peacock. After you've connected to official servers at least once you no longer have to do so in the future in order to use Peacock.
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

### Missing Items / Maps

-   Para usar itens dos 7 Pecados Capitais, tenha certeza de ter comprado a DLC 7 Pecados Capitais. Então delete a pasta `userdata` e reinicie o jogo.

    -   Se você estiver com problemas em encontrar a pasta `userdata`, [veja esta imagem de exemplo](https://media.discordapp.net/attachments/833505136290299935/991071183732613200/unknown.png).

### Outro

-   Salvamentos em jogo são suportados, mas note que você só pode usar salvamentos dos servidores oficiais apenas na versão dos servidores oficiais do jogo, e salvamentos no Peacock apenas na versão Peacock do jogo.
-   Challenges (currently implemented in Paris) are still in development and may be buggy. Report issues in the `#help` channel in Peacock discord.
-   Usar o Peacock afetará seu perfil nos servidores oficiais de maneiras bem imperceptíveis.
    -   Devido ao fato que não temos implementado propriamente alguns recursos de menor importância como avisos de spoiler em conteúdo/história, vai colocar todos em um estado como se 'eu já tivesse jogado'. Além disso, não deve ter qualquer efeito.
-   Nota: Se essa é sua primeira vez jogando (tanto no Peacock como nos servidores oficiais), algumas saídas estarão bloquadas. Você terá que desbloquear as saídas de Dubai ([precisa desbloquear os elevadores](https://youtu.be/IEQgRQyQRf8)), saídas de Dartmoor ([precisa sair por meio da motocicleta pelo menos uma vez](https://youtu.be/AJtJZe9jEi8?t=151)), e saídas de Colorado ([precisa ter usado a saída do abrigo de tornados pelo menos uma vez](https://youtu.be/3XKWHrKpXwk?t=140)). Essas saídas estão sob responsabilidade do usuário.
-   Check [Peacock Unique Features](../intel/loadout-profiles-elp) page for info on how to set multiple loadouts per map or choose specific escalation levels with Peacock.

### Request Tech Support

-   Questão não respondida no FAQ acima? Pergunte no canal do servidor Discord do Peacock `#help` (https://thepeacockproject.org/discord)
    -   Esteja preparado para providenciar:
        -   Fotos do seu Servidor Peacock rodando no terminal
        -   Fotos do seu Patcher Peacock rodando
        -   Informações sobre o seu sistema operacional e versão do jogo
        -   Information on what is running on Port 80 (check [Connection Troubleshooting](faq/#connection-troubleshooting) above)
        -   Quaisquer outras informações pertinentes

## Perguntas Frequentes sobre Solicitação de Recursos

-   To be very clear: Progression (unlocking items as you go) is currently not supported, although planned for the future. O Peacock irá te fornecer todos os itens desbloqueáveis logo de início (baseando-se no conteúdo que você tenha adquirido).
-   In-game challenges are actively being implemented as of Peacock v5.0.1.
-   Antes de perguntar qualquer pergunta sobre o Modo Fantasma, Escalações, Contratos do Usuário e Alvos Elusivos, por favor verifique a [Página de Conteúdo Customizado](https://thepeacockproject.org/wiki/custom-content) assim como a [Página do Modo Fantasma](https://thepeacockproject.org/wiki/ghost-mode/).
-   Mod Compatability:
    -   Most mods are compatible with Peacock; there are only three kinds that aren't.
        -   If a mod edits contracts (missions, special assignments, etc.), it'll need a Peacock plugin to be compatible.
        -   If a mod edits the planning inventory (that is, changes the properties of starting locations, changes which items you can bring into missions, or edits the suits available to you), it will also need a plugin.
        -   Menu changes may also sometimes be incompatible, but should otherwise be fine. Other than those, mods should be compatible with Peacock without any effort on the part of the mod creator.
