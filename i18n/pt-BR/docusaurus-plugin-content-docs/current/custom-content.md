---
title: Conteúdo Customizado
description: Uma visão geral do conteúdo customizado que existe no Peacock.
---

O Peacock tem vários benefícios incluídos para nossos usuários. Aqui vai uma espiada no nosso conteúdo customizado!

## Alvos Elusivos

Dentro do Peacock, você pode jogar Alvos Elusivos sem nenhum tempo limite ao reiniciar (ao contrário do Arcade de Alvos Elusivos), e sem nenhum tempo limite.

-   **Como Jogar:**
    -   Depois de iniciar o Hitman 3 usando o Peacock, vá para `Career` -> `Elusive Targets` no jogo.
-   Veja a seção [Plugins](#plugins) por informações sobre a instalação do alvo elusivo "Os Irmãos" (conteúdo cortado) em Hitman 3.

## Escalações

-   **Escalações Peacock Personalizadas**

    -   O Peacock suporta escalações (Originais Peacock) personalizadas. Essas escalações estão disponíveis em jogo por predefinição. Você pode ver algumas das escalações customizadas listadas nos [Roadmaps](https://thepeacockproject.org/wiki/roadmaps) também.

-   **Escalações dos Servidores Oficiais e Escalações Legado**

    -   O Peacock também suporta todas as escalações dos servidores oficiais, incluindo escalações de Hitman 2016 que não foram portadas para o Hitman 2 e 3 (escalações legado). Essas escalações estão disponíveis em jogo por predefinição.

-   Nota: Você pode selecionar níves específico de escalações para iniciar usando a ferramenta Escalation Level Picker, como explicado [aqui](./intel/loadout-profiles-elp.md#escalation-level-picker)

## Modo Contratos

O Peacock suporta ambos contratos de servidores oficiais e contratos personalizados Peacock.

-   **Contratos em Destaque**
    -   Aqui estão incluídos todos os contratos em destaque dos servidores oficiais, assim como alguns contratos (Originais Peacock) customizados criados pela equipe de desenvolvimento do Peacock e até mesmo de usuários regulares. Você pode ver alguns desses contratos em destaque customizados [aqui](./roadmaps.mdx).
        -   **Aviso: Contratos em Destaque dos Servidores Oficiais não estão incluídos.**
    -   Como Jogar:
        -   Vá para o menu `Game Modes` -> `Contracts` -> `Featured` em jogo
-   **Criados por Usuários, Contratos de Servidores Oficiais**
    -   Como Instalar:
        -   Nota: Isso funciona apenas enquanto o bot está autenticado para a plataforma em questão. [Mais informações aqui](https://bot.hitmaps.com/).
            -   Se você quiser checar se o bot do HITMAPS está online, execute o comando `botstatus` no canal `#bot-spam` no Discord do Peacock. Note que o comando `/botstatus` apenas atualiza a cada 10 minutos.
            -   Aviso: Contratos baixados dos Servidores Oficiais são compatíveis com qualquer engine de jogo, assumindo que a mesma contenha os mapas relevantes. Por exemplo, se você baixar um contrato de Sapienza (mapa da primeira Season) na engine de Hitman 3, você pode jogar esse contrato nas engines de Hitman 2016 e do Hitman 2, assim como no Peacock. No entanto, se você baixar um contrato da Ilha de Sgàil (mapa da segunda Season), você não poderá jogar esse contrato na engine do Hitman 2016, já que esse engine não contém nenhum mapa da segunda Season.
        -   Vá para o menu `Game Modes` -> `Contracts` -> `Contract Lookup` em jogo.
        -   Entre com o ID do contrato do servidor oficial (**Contratos de qualquer plataforma exceto Nintendo Switch são suportados para isso**).
        -   O contrato será agor baixado na sua pasta `Contracts`.
    -   Como Jogar: Vá para o menu `Game Modes` -> `Contracts` -> `My Contracts` em jogo.
-   **Criados por Usuários, Contratos Personalizados Peacock**
    -   Como Instalar:
        -   Faça o Download dos arquivos `.ocre` de contratos do canal `share-contracts` no Discord do Peacock. Instale esse arquivo `.json` na sua pasta `Contracts`, como mostrado aqui: ![](/img/contracts_folder.png).
    -   Como Criar o Seu Próprio:
        -   Se você criar um contrato em jogo enquanto estiver conectado ao servidor Peacock, seu contrato será salvo como um arquivo `.json` na pasta `Contracts`, como mostrado na imagem acima.
        -   Tenha a certeza de compartilhar seu arquivo `.ocre` no canal `share-contracts` do servidor Discord do Peacock se quiser que outros joguem seu contrato customizado Peacock.
    -   Como Jogar:
        -   Vá para o menu `Game Modes` -> `Contracts` -> `My Contracts` em jogo.

## Plugins

O Peacock suporta uma grande variedade de mods de servidor (plugins). Esses incluem, mas não estão limitados a:

-   Modo Massacre
    -   Todos os NPCs reais são marcados como alvos, podendo receber avaliação Assassino Silencioso depois de ter matado a todos.
    -   Nota: Bem bugado em mapas com mais de 200 alvos, armas podem falhar em momentos aleatórios. Você pode precisar matar usando métodos corpo a corpo.
-   Brothers Elusive Target (Cut Content / Fan Mod)
    -   NOTE: Although the Brothers ET mod is compatible with Peacock, it is a **fan interpretation** of how the mission would have played out, and not necessarily canon
    -   Download de Arquivo: https://www.nexusmods.com/hitman3/mods/375?tab=files
    -   Instale a porção principal do mod (o arquivo não marcado como "Peacock Plugin") através do Simple Mod Framework. Install the "Peacock Plugin" portion of the mod by putting it into your Peacock Install folder
-   Plugins para adicionar armas não usadas no jogo
-   Plugins para modificar armas e disfarces existentes

### Como Instalar Plugins

-   Amplamente falando, para baixar plugins, vá para os canais `plugins` ou `#plugin-releases` no servidor Discord do Peacock e faça o download de um plugin em que tenha interesse.
-   Então, coloque na mesma pasta onde o `Start Server.cmd` e o `peacockpatcher.exe` estão.
-   Alternativamente, crie uma pasta chamada `plugins` e coloque seus plugins nela, para organizar melhor os seus arquivos.
    -   Exemplo: ![PluginsFolder](/img/plugins_folder.png)
-   Tenha certeza de verificar por quaisquer outras instruções no canal `#plugin-releases` por um certo plugin, já que certos plugins poder necessitar de mais passos de instalação ou são incompatíveis com versões mais recentes do Peacock.

**Nota: Plugins são apenas uma pequena porção da comunidade Hitman de mods. Vários mods de Hitman são manipulados pelo lado do cliente e estão fora da alçada do Peacock.** Mais mods gerais de uso pelo usuário, fora da responsabilidade do Peacock, estão agregados aqui:

-   [Nexusmods](https://www.nexusmods.com/hitman3)
-   [Discord de Mods Glacier](https://discord.com/invite/6UDtuYhZP6)
