---
title: Base de Conhecimento
description: Detalhes em o que o Peacock é, como instalar, como usar, e mais.
---

<div class="make_h2_smaller">

## O que é Peacock?

<details><summary>Clique para expandir</summary>
<p>

-   Peacock é essencialmente um emulador de servidor Hitman que roda no seu próprio computador.
-   Benefícios de usar Peacock incluem:
    -   **Obter todas as recompensas imediatamente**
        -   Nota: Se é a sua primeira vez jogando (seja no Peacock ou em servidores oficiais), algumas saídas estarão bloqueadas. Você precisará desbloquear as saídas de Dubai ([precisa desbloquear os elevadores](https://youtu.be/IEQgRQyQRf8)), saídas de Dartmoor ([precisa sair por meio da moto pelo menos uma vez](https://youtu.be/AJtJZe9jEi8?t=151)), e saídas de Colorado ([precisa usar a saída do abrigo de tornados pelo menos uma vez(https://youtu.be/3XKWHrKpXwk?t=140)). Essas saídas estão sob responsabilidade do usuário.
    -   Jogue [conteúdo customizado](custom-content.mdx) ou caso contrário conteúdo descontinuado/de tempo limitado como o [Modo Fantasma](https://thepeacockproject.org/wiki/ghost-mode), escalações legacy, alvos elusivos.
    -   Mostrar placar para outros usuários Peacock
    -   Acessar o sistema de avaliação do Hitman sem precisar estar conectado aos servidores da IOI
        -   **Nota: Peacock não é uma experiência completamente offline.**
        -   Toda vez que você iniciar o jogo, você precisará estar inicialmente conectado a internet, para passar pela verificação Steam ou Epic.
        -   Após passar pela verificação Steam/Epic e estar conectado ao Peacock, você estará livre para se desconectar da internet se quiser e você continuará conectado ao Peacock pela duração da sua sessão de jogo.
-   Curiosidade: Peacock, ou pavão, é o nome que o jogo usa em seu código base para se referir à missão "Showstopper", que começou uma nova era de Hitman. Dessa forma, a razão do nome "Peacock".

</p>
</details>

## Jogos Suportados / Sistemas Operacionais

<details><summary>Clique para expandir</summary>
<p>

**Jogos Suportados / Plataformas**

-   Hitman 2016 ([Steam](https://store.steampowered.com/app/236870/HITMAN/) / [Epic](https://www.epicgames.com/store/en-US/p/hitman))
-   Hitman 2 ([Steam](https://store.steampowered.com/app/863550/HITMAN_2/))
-   Hitman 3 ([Steam](https://store.steampowered.com/app/1659040/HITMAN_3/) / [Epic](https://www.epicgames.com/store/en-US/p/hitman-3)).

Qualquer plataforma não incluída na lista acima (**incluindo Hitman 3 no Xbox Game Pass**) não é suportado pelo Peacock!
Também note: Hitman 2016 / Hitman 2 não são tão suportados quanto Hitman 3, podem haver vários bugs.

**Sistemas Operacionais Suportados**

-   Para o servidor:
    -   Uma plataforma suportada por Node.js, significando um Windows 8.1 ou mais recente, ou uma instalação mais recente de Linux/macOS/FreeBSD.
    -   Temos alternativas disponíveis se você não se encontra nesses requerimentos, por favor pergunte no Discord.
-   Para o inicializador:
    -   Windows 7 ou acima
-   Você pode rodar o servidor em qualquer máquina que suporta a versão do Node.js que o Peacock visa, mas o inicializador precisa ser rodado na mesma máquina que o jogo.

</p>
</details>

## Como instalar / Usar o Peacock

<details>
<summary>Clique para expandir</summary>

<p>

1. Junte-se ao servidor Discord do Peacock (https://thepeacockproject.org/discord). Você precisa ter uma conta de pelo menos 7 dias e ter provas de ter comprado Hitman 2016/ Hitman 2/ Hitman 3 para poder entrar.

2. Vá para o canal `#downloads` no servidor Discord acima e faça o download da mais recente versão do Peacock.

3. Extraia (descompacte) os arquivos. Rodar os arquivos de dentro do arquivo compactado não irá funcionar.

4. Abra a pasta extraída `Peacock-vx.x.x` (em que `x.x.x` significa qualquer versão atual do Peacock), e então abra a segunda pasta `Peacock-vx.x.x` dentro da anterior. Dessa pasta `...Peacock-vx.x.x\Peacock-vx.x.x`, rode `Start Server.cmd`, o servidor, e depois disso `PeacockPatcher.exe`, o inicializador. Depois disso, abra Hitman normalmente.

    - Nota: Se você joga Hitman 3, você deverá repetir os passos 2-3 a cada vez que o jogo receba uma nova atualização (mais informações abaixo, na seção "Quando/ Como Atualizar o Peacock"). E para qualquer um dos três jogos Hitman suportados, você deverá repetir o passo 4 toda vez que for iniciar o jogo.. O jogo retorna aos servidores oficiais se não o fizer.

</p>

</details>

## Quando / Como Atualizar o Peacock

<details>
<summary>Clique para expandir</summary>

<p>

1. Quando você iniciar `Start Server.cmd`, você pode receber um alerta que o Peacock está desatualizado, como [mostrado aqui](https://i.ibb.co/NtGMJjN/peacock-out-of-date.png).
2. Normalmente você precisará atualizar o Peacock apenas quando tiver uma nova atualização do jogo, mas fique atento aos canais `#updates` e `#downloads` do servidor Discord do Peacock para se assegurar.
    - Nota: Peacock pode ficar temporariamente indisponível depois de uma atualização do jogo, já que levam algumas horas para o inicializador do Peacock ser atualizado também.
3. Se uma nova atualização do Peacock estiver disponível, vá ao canal `#downloads` no servidor Discord do Peacock para fazer o download da última versão.
4. Extraia (descompacte) os arquivos. Rodar os arquivos de dentro do arquivo compactado não irá funcionar.
5. **Assumindo que você usou Peacock durante a última atualização do jogo**, siga as instruções abaixo para manter seu equipamento inicial nas missões e arquivos salvos (De outra forma, seu equipamento irá voltar à pistola ICA19/moedas/fio de fibra, e seus arquivos salvos serão perdidos).

    - Copie suas antigas pastas userdata e contractSessions (ex: `...Peacock-vx.x.x\Peacock-vx.x.x\userdata`) e (ex: `...Peacock-vx.x.x\Peacock-vx.x.x\contractSessions`) da versão anterior do Peacock e cole na pasta principal da nova versão do Peacock (`...Peacock-vy.y.y\Peacock-vy.y.y`), onde `x.x.x` significa a antiga versão do Peacock, e `y.y.y` significa a nova versão. Substitua qualquer arquivo existente na pasta da nova versão do Peacock, se necessário.

        - Note que as versões anteriores a v4.1.0 usam a organização de arquivo `...Peacock-vx.x.x\assembled\userdata` e `...Peacock-vx.x.x\assembled\contractSessions` em vez disso.

</p>

</details>

## Dicas Gerais de Uso do Peacock

<details>
<summary>Clique para expandir</summary>

<p>

-   Podem levar algumas tentativas para se conectar ao Peacock. Se não puder se conectar, tente voltar ao aplicativo inicializador do Peacock e clique em "Repatch", ou "Reinicializar", até que o inicializador mostre "Sucessfully patched ID", ou "ID inicializada com sucesso".
-   Se o jogo já está conectado aos servidores oficiais, você pode precisar desconectar o jogo antes para se conectar ao Peacock. Para se desconectar dos servidores oficiais, vá para "Options" no menu principal do Hitman 3, e depois em "Privacy Policy", e "Opt out". Quando você tentar se desconectar depois disso, você deverá estar no Peacock.

-   Similarmente, você pode ficar offline quando conectado ao Peacock, ativar a opção no inicializador do Peacock para voltar aos servidores oficiais, e clicar em ficar "online" novamente para se conectar aos servidores oficiais.

-   Para usar itens dos 7 Pecados Capitais, tenha certeza de ter comprado a DLC 7 Pecados Capitais. Depois, exclua a pasta `...Peacock-vx.x.x\Peacock-vx.x.x\userdata` e reinicie o jogo.
-   Para salvar múltiplos equipamentos iniciais por mapa (perfis de equipamento): [Siga este tutorial](https://www.youtube.com/watch?v=ouD9QBSVHI0)
    -   Nota: Você precisa abrir Hitman com o Peacock antes de seguir esses passos nesse tutorial. Além disso, Peacock recebeu uma nova atualização, então agora você pode ir a `localhost` no seu navegador em vez de `localhost/loadouts`. Quando você estiver na página `localhost`, clique em 'Loadout Profiles' na barra de navegação no canto superior esquerdo. E então prossiga com o tutorial do vídeo.
-   Salvamentos em jogo são suportados, mas note que você só pode usar salvamentos dos servidores oficiais apenas na versão dos servidores oficiais do jogo, e salvamentos no Peacock apenas na versão Peacock do jogo.

-   Usar o Peacock afetará seu perfil nos servidores oficiais de maneiras bem imperceptíveis.
    -   Devido ao fato que não temos implementado propriamente alguns recursos de menor importância como avisos de spoiler em conteúdo/história, vai colocar todos em um estado como se 'eu já tivesse jogado'. Além disso, não deve ter qualquer efeito.
-   Nota: Se essa é sua primeira vez jogando (tanto no Peacock como nos servidores oficiais), algumas saídas estarão bloquadas. Você precisará desbloquear as saídas de Dubai ([precisa desbloquear os elevadores](https://youtu.be/IEQgRQyQRf8)), saídas de Dartmoor ([precisa sair por meio da moto pelo menos uma vez](https://youtu.be/AJtJZe9jEi8?t=151)), e saídas de Colorado ([precisa usar a saída do abrigo de tornados pelo menos uma vez(https://youtu.be/3XKWHrKpXwk?t=140)). Essas saídas estão sob responsabilidade do usuário.

</p>
</details>

## Setup do Autosplitter (Para speedruns do jogo todo)

<details>
<summary>Clique para expandir</summary>

<p>

_Guia escrito originalmente por [Fusha](https://www.speedrun.com/user/Fusha)_

### Especificações

(veja "Como Usar" e "Outras Notas de Uso" abaixo também)

-   100% preciso como runs são cronometradas para propósitos de verificação, ao contrário do [Autosplitter dos Servidores Oficiais](https://www.speedrun.com/hitman_3/guide/kbydm).

-   Vários glitches como o splitter não estar funcionando corretamente do local inicial "Outside" em Romania estão resolvidos.

-   Funciona de forma totalmente automática, baseado em que nível você começa e em qual categoria de jogo completo você está jogando. Iniciar e parar o plitter (por pressionar teclas do teclado numérico etc) não é necessário.

-   Funciona nas ambas versões Steam e Epic do Hitman 3 ao contrário do Autosplitter dos Servidores Oficiais (sendo exclusivo da Epic).

-   Obviamente isso apenas funciona no [Peacock](https://thepeacockproject.org/wiki/intel/), se você está jogando nos servidores oficiais por alguma razão você deverá usar um dos [outros dois Guias Livesplit](https://www.speedrun.com/hitman_3/guides).

### Instalação

1. Instale o [Peacock](https://thepeacockproject.org/wiki/intel/) e o [LiveSplit](https://livesplit.org/downloads/) se você não os tiver instalados (extraia-os em qualquer lugar que desejar). **Se você já tem o Peacock instalado, tenha a certeza de ter atualizado para a última versão.** Após ter esses aplicativos instalados/atualizados, feche-os no momento.

2. Faça o download do componente do servidor LiveSplit daqui:
https://github.com/LiveSplit/LiveSplit.Server/releases/tag/1.8.17

3. Extraia e coloque os dois arquivo que você acabou de baixar no arquivo zip do componente do servidor LiveSplit na pasta Components dentro da pasta de instalação `LiveSplit`.

4. Inicie o LiveSplit.

5. Clique com o botão direito na janela principal do Livesplit, e clique em `Edit Splits`. Edite seus nomes split (`Segment Name`) para o que desejar. Clique em `Insert Above / Below` para adicionar dois novos segmentos. Se desejar, você pode inserir seus tempos estimados em `Segment Times`.

6. Click `ok` on the Splits Editor, then right click the main Livesplit window and select `save splits` for future use.

7. Clique com o botão direito na janela principal do Livesplit, e então clique em `Edit Layout`. Clique duas vezes em `Timer`, e então selecione `Game Time` para o método de cronometragem.

8. Ainda na página `Edit Layout`: Clique no botão `+`, e então em `Control`, e em `Livesplit Server`.

9. Clique `ok` no Layout Editor, depois clique com o botão direto na janela principal do Livesplit e selecione `save layout` para uso futuro.

### Como Usar

(Faça toda vez que abrir o jogo, a ordem é importante! Tenha a certeza de iniciar o LiveSplit e iniciar o servidor antes de iniciar o Peacock).

1. Abra o LiveSplit

2. Clique com o botão direito na janela principal do LiveSplit, selecione `Control`, e depois em `Start Server`.

3. Se você quiser mudar qual categoria de jogo completo você está jogando, edite o arquivo `options.ini` dentro da pasta do Peacock e mude a opção `autoSplitterCampaign` para `trilogy`, trilogia, `1`, `2`, ou `3` dependendo em qual campanha você quer jogar (O autosplitter está configurado para `trilogy`, trilogia, por predefinição). O autosplitter só irá funcionar enquanto você jogar a campanha, em ordem.

4. Abra a pasta onde você instalou o Peacock, e inicie `Start Server.cmd` e `PeacockPatcher.exe`.

5. Inicie o jogo normalmente.

### Outras Notas de Uso

-   O splitter sempre irá reiniciar e começar uma nova run assim que você começar a primeira missão na campanha selecionada, sem ser afetada por qualquer outro estado em que esta pode estar. Você não precisar iniciar ou reiniciar a run no LiveSplit manualmente (pressionando teclas no teclado numérico etc).

-   Se você começar uma missão que não é a primeira, a que você acabou de jogar, ou a próxima missão depois de completar a missão que você acabou de jogar, o cronômetro irá parar de contar até você reiniciar a primeira missão na campanha.

-   O splitter vai automaticamente pausar (gravar o tempo e carregar para a próxima missão) assim que você terminar uma missão com sucesso. Porém, se você jogar novamente a mesma missão várias vezes (além da primeira na campanha selecionada), vai automaticamente adicionar o tempo de reset para você, mesmo se você completar a missão e o cronômetro pausar (por exemplo se você falhar SA no último segundo, apenas reinicie a missão e vai auto-despausar e adicionar o tempo de reset).

-   Depois de você completar ou falhar uma missão, o splitter vai detalhar informação do tempo sobre a tentativa que você acabou de realizar na janela do servidor do Peacock, com a informação do cronômetro nas dezenas/centenas de segundos para a tentativa que você acabou de realizar assim como detalhando a quantidade total de tempo com os resets da missão atual.

</p>
</details>

## Para Ajuda Adicional / Solução de Problemas

<p>

-   Pergunte no canal do servidor Discord do Peacock `#help` (https://thepeacockproject.org/discord)

</p>

</div>
