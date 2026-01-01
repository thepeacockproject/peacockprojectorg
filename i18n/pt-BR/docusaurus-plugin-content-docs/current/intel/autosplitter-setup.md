---
title: Guia de Configuração do Auto-Splitter
description: Como configurar o auto-splitter do Peacock para speedruns do jogo.
---

_Guia escrito originalmente por [Fusha](https://github.com/fu5ha)_.

Essa ferramenta tem o propósito de ser usada em speedruns completas de Hitman.

## Especificações

(veja "Como Usar" e "Outras Notas de Uso" abaixo também)

-   100% preciso em como as missões são cronometradas para propósitos de verificação, ao contrário do [Autosplitter dos Servidores Oficiais](https://hitruns-wiki.vercel.app/docs/livesplit_auto_official).

-   Vários glitches como o splitter não estar funcionando corretamente do local inicial "Outside" em Romania estão resolvidos.

-   Funciona de forma totalmente automática, baseado em que nível você começa e em qual categoria de jogo completo você está jogando. Iniciar e parar o plitter (por pressionar teclas do teclado numérico etc) não é necessário.

-   Funciona nas ambas versões Steam e Epic do Hitman 3 ao contrário do Autosplitter dos Servidores Oficiais (sendo exclusivo da Epic).

-   Obviamente isso apenas funciona no [Peacock](./what-is-peacock.md), se você está jogando nos servidores oficiais por alguma razão você deverá usar um dos [outros dois Guias Livesplit](https://hitruns-wiki.vercel.app/docs/livesplit).

## Instalação

1. Instale o [Peacock](./installation.md) e o [LiveSplit](https://livesplit.org/downloads/) se você já não os tiver instalados (extraia-os em qualquer lugar que desejar). **If you already have Peacock installed, make sure to you have it updated to the latest version.** After you get these apps installed/updated, close Peacock for now and start LiveSplit if you haven't yet.

2. Clique com o botão direito na janela principal do Livesplit, e clique em `Edit Splits`. Edite seus nomes split (`Segment Name`) para o que desejar. Clique em `Insert Above / Below` para adicionar dois novos segmentos. Se desejar, você pode inserir seus tempos estimados em `Segment Times`.

3. Clique em `ok` no Splits Editor, depois clique com o botão direito na janela principal do Livesplit e secione `Save Splits` para uso futuro.

4. Clique com o botão direito na janela principal do Livesplit, e clique em `Edit Layout`. Clique duas vezes em `Timer`, então selecione `Game Time` para método de cronometragem.

5. Enquanto ainda estiver na página `Edit Layout`: Clique no botão `+`, então em `Control`, e depois em `Livesplit Server`.

6. Clique em `ok` no Splits Editor, depois clique com o botão direito na janela principal do Livesplit e secione `Save Layout` para uso futuro.

7. Open `options.ini` in the Peacock folder and set `liveSplit = false` to be `liveSplit = true` instead to enable the livesplit integration (turned off by default), and adjust the other LiveSplit options as needed.

## Como Usar

(Faça toda vez que abrir o jogo, a ordem é importante! Tenha a certeza de iniciar o LiveSplit e iniciar o servidor antes de iniciar o Peacock).

1. Abra o LiveSplit

2. Right-click on the main LiveSplit window, then select `Control`, then `Start TCP Server`. If this button isn't there you are likely running an outdated version of LiveSplit, as this server was originally separate from the main LiveSplit download, please update to at least LiveSplit 1.8.29, released May 11, 2024.

3. Se você quiser mudar qual categoria de jogo completo você está jogando, edite o arquivo `options.ini` dentro da pasta do Peacock e mude a opção `autoSplitterCampaign` para `trilogy` (trilogia), `1`, `2`, ou `3` dependendo em qual campanha você quer jogar (O autosplitter está configurado para `trilogy`, por predefinição). O autosplitter só irá funcionar enquanto você jogar a campanha, em ordem.

4. Abra a pasta onde você instalou o Peacock, e inicie `Start Server.cmd` e `PeacockPatcher.exe`. You should see a message in the Peacock Server Window saying `LiveSplit initialized`.

5. Inicie o jogo normalmente.

## Outras Notas de Uso

-   O splitter sempre irá reiniciar e começar uma nova run assim que você começar a primeira missão na campanha selecionada, sem ser afetada por qualquer outro estado em que esta pode estar. Você não precisar iniciar ou reiniciar a run no LiveSplit manualmente (pressionando teclas no teclado numérico etc).

-   Se você começar uma missão que não é a primeira, a que você acabou de jogar, ou a próxima missão depois de completar a missão que você acabou de jogar, o cronômetro irá parar de contar até você reiniciar a primeira missão na campanha.

-   O splitter vai automaticamente pausar (gravar o tempo e carregar para a próxima missão) assim que você terminar uma missão com sucesso. Porém, se você jogar novamente a mesma missão várias vezes (além da primeira na campanha selecionada), vai automaticamente adicionar o tempo de reset para você, mesmo se você completar a missão e o cronômetro pausar (por exemplo se você falhar SA no último segundo, apenas reinicie a missão e vai auto-despausar e adicionar o tempo de reset).

-   Depois de você completar ou falhar uma missão, o splitter vai detalhar informação do tempo sobre a tentativa que você acabou de realizar na janela do servidor do Peacock, com a informação do cronômetro nas dezenas/centenas de segundos para a tentativa que você acabou de realizar assim como detalhando a quantidade total de tempo com os resets da missão atual.

-   Na versão v4.50, o Autosplitter do Peacock agora se padroniza em um modo que não vai logar uma conclusão bem sucedida de uma missão (parando e permitindo ir para o próximo mapa) exceto se você completar a missão atual com avaliação Assassino Silencioso. Se você quiser usar o autosplitter para jogadas any% (qualquer avaliação), mude a opção `autoSplitterForceSilentAssassin` em `options.ini` para `false`.

-   Para aqueles que gostariam de participar nas competições semanais SASO RTA de jogo completo, você pode se candidatar em [racetime.gg](https://racetime.gg/hitman-3) e ativar `autoSplitterRacetimegg = true` nao seu arquivo `options.ini` para ter acesso ao livesplit RTA integrado ao racetime.gg
