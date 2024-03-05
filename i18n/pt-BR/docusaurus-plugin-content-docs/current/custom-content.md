---
title: Conteúdo Customizado
description: Uma visão geral do conteúdo customizado que existe no Peacock.
---

O Peacock tem vários benefícios incluídos para nossos usuários. Aqui vai uma espiada no nosso conteúdo customizado!

## Alvos Elusivos

Within Peacock, you can replay Elusive Targets without any time limit on restarts (unlike Elusive Target Arcade), and without a time limit.

- **Como Jogar:**
    - Depois de iniciar o Hitman 3 usando o Peacock, vá para `Career` -> `Elusive Targets` no jogo.
- See the [Plugins](#plugins) section for information on installing "The Brothers" Elusive Target (cut content) in Hitman 3.

## Agravamentos

### Custom Peacock Escalations

Peacock supports custom (Peacock original) escalations. These escalations are available in-game by default. You can see some custom escalations listed in the [Roadmaps](./roadmaps.mdx) as well.

### Official Server Escalations and Legacy Escalations

Peacock also supports all official server escalations, including Hitman 2016 escalations that have not been ported to Hitman 2 or 3 (legacy escalations). These escalations are available in-game by default.

- Note: You can select specific escalation levels to start on using the Escalation Level Picker tool, as explained [here](./intel/loadout-profiles-elp.md#escalation-level-picker)

## Modo Contratos

Peacock supports both official server and custom Peacock contracts.

### Featured contracts

This includes custom (Peacock original) contracts created by Peacock dev team. You can see some of these custom featured contracts [here](./roadmaps.mdx).

- **Note: Official Servers Featured Contracts are not included.**

#### How to Play

Go to `Game Modes` -> `Contracts` -> `Featured` menu in-game.

### User-Created Official Server Contracts

#### How to Install

- Note: This only works while the HITMAPS bot is authenticated for the platform in question.
  - [More info on how to authenticate it](https://bot.hitmaps.com/).
  - To check if it's online, run the command `/botstatus` in the `#bot-spam` channel in the Peacock Discord. The status is updated every 10 minutes.
- Vá para o menu `Game Modes` -> `Contracts` -> `Contract Lookup` em jogo.
- Entre com o ID do contrato do servidor oficial (**Contratos de qualquer plataforma exceto Nintendo Switch são suportados para isso**).
- The contract will now be downloaded in your `contracts` folder.

#### How to Play

Vá para o menu `Game Modes` -> `Contracts` -> `My Contracts` em jogo.

### User-Created Peacock Contracts

#### How to Install

Download the contract's `.json` file from the `share-contracts` channel in Peacock Discord. Place the `.json` file in your `Contracts` folder, as shown here: ![](/img/wiki/contracts_folder.png).

#### How to create your own

- If you create a contract in-game while in Peacock server, your contract will be saved as an `.json` file in `Contracts` folder, as shown in the image above.
- Be sure to share your `.json` file in Peacock Discord's `share-contracts` channel if you want others to play your custom Peacock contract.

#### How to Play

- Vá para o menu `Game Modes` -> `Contracts` -> `My Contracts` em jogo.

## Plugins

O Peacock suporta uma grande variedade de mods de servidor (plugins). Esses incluem, mas não estão limitados a:

- Modo Massacre
    - Todos os NPCs reais são marcados como alvos, podendo receber avaliação Assassino Silencioso depois de ter matado a todos.
    - Nota: Bem bugado em mapas com mais de 200 alvos, armas podem falhar em momentos aleatórios. Você pode precisar matar usando métodos corpo a corpo.
- Alvo Elusivo Os Irmãos (Conteúdo Cortado / Mod de Fã)
    - NOTE: Although the Brothers ET mod is compatible with Peacock, it is a **fan interpretation** of how the mission would have played out, and not necessarily canon
    - Download de Arquivo: https://www.nexusmods.com/hitman3/mods/375?tab=files
    - Instale a porção principal do mod (o arquivo não marcado como "Peacock Plugin") através do Simple Mod Framework. Install the "Peacock Plugin" portion of the mod by putting it into your Peacock Install folder
- Plugins para adicionar armas não usadas no jogo
- Plugins para modificar armas e disfarces existentes

### Como Instalar Plugins

Broadly speaking, to install plugins, go to either the `plugins` or `#plugin-releases` channel in the Peacock Discord and download a plugin you are interested in.

- Put your plugins into the `plugins` folder, located in the Peacock folder (created automatically by the server the first time you launch it).
- The plugin should end with `.plugin.js` or `Plugin.js` - if it's distributed as a `.zip`, extract it first.

Exemplo: ![Plugins folder](/img/wiki/plugins_folder.png)

- Be sure to check for any further instructions in the plugin's description, as some plugins may require further setup steps or won't work with newer versions of Peacock.

:::note

Plugins are only a small portion of the Hitman modding scene. **Many Hitman mods are done client-side and out of scope of Peacock.** More general-use client-side mods, outside the scope of Peacock, are aggregated here:

- [Nexusmods](https://www.nexusmods.com/hitman3)
- [Discord de Mods Glacier](https://discord.com/invite/6UDtuYhZP6)

:::
