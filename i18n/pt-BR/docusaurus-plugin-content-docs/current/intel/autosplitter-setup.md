---
title: Guia de Configuração do Auto-Splitter
description: Como configurar o auto-splitter do Peacock para speedruns do jogo.
---

Guia escrito originalmente por [Fusha](https://www.speedrun.com/user/Fusha)

This tool is meant for use in full game Hitman speedruns.

## Especificações

(veja "Como Usar" e "Outras Notas de Uso" abaixo também)

-   100% accurate to how runs are timed for verification purposes, unlike the [Official Servers Autosplitter](https://hitruns-wiki.vercel.app/docs/livesplit_auto_official).

-   Vários glitches como o splitter não estar funcionando corretamente do local inicial "Outside" em Romania estão resolvidos.

-   Funciona de forma totalmente automática, baseado em que nível você começa e em qual categoria de jogo completo você está jogando. Iniciar e parar o plitter (por pressionar teclas do teclado numérico etc) não é necessário.

-   Funciona nas ambas versões Steam e Epic do Hitman 3 ao contrário do Autosplitter dos Servidores Oficiais (sendo exclusivo da Epic).

-   Obviamente isso apenas funciona no [Peacock](https://thepeacockproject.org/wiki/intel/), se você está jogando nos servidores oficiais por alguma razão você deverá usar um dos [outros dois Guias Livesplit](https://www.speedrun.com/hitman_3/guides).

## Instalação

1. Instale o [Peacock](https://thepeacockproject.org/wiki/intel/) e o [LiveSplit](https://livesplit.org/downloads/) se você já não os tiver instalados (extraia-os em qualquer lugar que desejar). **Se você já tem o Peacock instalado, tenha a certeza de ter atualizado para a última versão.** Após ter esses aplicativos instalados/atualizados, feche-os no momento.

2. Extraia e coloque os dois arquivo que você acabou de baixar no arquivo zip do componente do servidor LiveSplit na pasta Components dentro da pasta de instalação `LiveSplit`.

3. Unzip `Livesplit.Server.zip`. Move the `Livesplit.Server.dll` and `Noes.Javascript.dll` files found within the unzipped folder to `Livesplit/Components` folder (refer to step 1 if you forgot where you installed the main Livesplit application). Here is an [example image](https://media.discordapp.net/attachments/839264571990343681/1013559084814958694/unknown.png) of how your `Livesplit/Components`folder should look afterwards.

4. Inicie o LiveSplit.

5. Clique com o botão direito na janela principal do Livesplit, e clique em `Edit Splits`. Edite seus nomes split (`Segment Name`) para o que desejar. Clique em `Insert Above / Below` para adicionar dois novos segmentos. Se desejar, você pode inserir seus tempos estimados em `Segment Times`.

6. Clique em `ok` no Splits Editor, depois clique com o botão direito na janela principal do Livesplit e secione `Save Splits` para uso futuro.

7. Clique com o botão direito na janela principal do Livesplit, e clique em `Edit Layout`. Clique duas vezes em `Timer`, então selecione `Game Time` para método de cronometragem.

8. Enquanto ainda estiver na página `Edit Layout`: Clique no botão `+`, então em `Control`, e depois em `Livesplit Server`.

9. Clique em `ok` no Splits Editor, depois clique com o botão direito na janela principal do Livesplit e secione `Save Layout` para uso futuro.

## Como Usar

(Faça toda vez que abrir o jogo, a ordem é importante! Tenha a certeza de iniciar o LiveSplit e iniciar o servidor antes de iniciar o Peacock).

1. Abra o LiveSplit

2. Clique com o botão direito na janela principal do LiveSplit, selecione `Control`, e depois em `Start Server`.

3. Se você quiser mudar qual categoria de jogo completo você está jogando, edite o arquivo `options.ini` dentro da pasta do Peacock e mude a opção `autoSplitterCampaign` para `trilogy` (trilogia), `1`, `2`, ou `3` dependendo em qual campanha você quer jogar (O autosplitter está configurado para `trilogy`, por predefinição). O autosplitter só irá funcionar enquanto você jogar a campanha, em ordem.

4. Abra a pasta onde você instalou o Peacock, e inicie `Start Server.cmd` e `PeacockPatcher.exe`.

5. Inicie o jogo normalmente.

## Outras Notas de Uso

-   O splitter sempre irá reiniciar e começar uma nova run assim que você começar a primeira missão na campanha selecionada, sem ser afetada por qualquer outro estado em que esta pode estar. Você não precisar iniciar ou reiniciar a run no LiveSplit manualmente (pressionando teclas no teclado numérico etc).

-   Se você começar uma missão que não é a primeira, a que você acabou de jogar, ou a próxima missão depois de completar a missão que você acabou de jogar, o cronômetro irá parar de contar até você reiniciar a primeira missão na campanha.

-   O splitter vai automaticamente pausar (gravar o tempo e carregar para a próxima missão) assim que você terminar uma missão com sucesso. Porém, se você jogar novamente a mesma missão várias vezes (além da primeira na campanha selecionada), vai automaticamente adicionar o tempo de reset para você, mesmo se você completar a missão e o cronômetro pausar (por exemplo se você falhar SA no último segundo, apenas reinicie a missão e vai auto-despausar e adicionar o tempo de reset).

-   Depois de você completar ou falhar uma missão, o splitter vai detalhar informação do tempo sobre a tentativa que você acabou de realizar na janela do servidor do Peacock, com a informação do cronômetro nas dezenas/centenas de segundos para a tentativa que você acabou de realizar assim como detalhando a quantidade total de tempo com os resets da missão atual.

-   Na versão v4.50, o Autosplitter do Peacock agora se padroniza em um modo que não vai logar uma conclusão bem sucedida de uma missão (parando e permitindo ir para o próximo mapa) exceto se você completar a missão atual com avaliação Assassino Silencioso. Se você quiser usar o autosplitter para jogadas any% (qualquer avaliação), mude a opção `autoSplitterForceSilentAssassin` em `options.ini` para `false`.

-   For those that would like to participate in the weekly RTA SASO full game races, you can sign up at [racetime.gg](https://racetime.gg/hitman-3), and then set `autoSplitterRacetimegg = true` in `options.ini` in order to get access to RTA livesplit that integrates with racetime.gg
