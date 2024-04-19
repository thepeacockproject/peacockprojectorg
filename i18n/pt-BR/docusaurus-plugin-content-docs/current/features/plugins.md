---
title: Plugins
---

O Peacock suporta uma grande variedade de mods de servidor (plugins). Plugins can add new content to the game, or change
existing mechanics.

## What can plugins do?

Plugins are able to make changes to the parts of the game that Peacock handles.
This includes menus, missions, contracts mode, leaderboards, and unlockables, among other things.

One limitation of plugins is that they can't modify the game's files on their own, but some mods for the game have
plugins that go along with them to make certain features work in Peacock's online mode, instead of only offline mode.

:::note

Plugins são apenas uma pequena parte da comunidade Hitman de mods. **Vários mods de Hitman são manipulados pelo lado do cliente e estão fora da alçada do Peacock.** Mais mods gerais de uso pelo usuário, fora da responsabilidade do Peacock, estão agregados aqui:

- [NexusMods](https://www.nexusmods.com/hitman3)
- [Glacier Modding Discord](https://discord.com/invite/6UDtuYhZP6)

:::

## Exemplos

Here are some of the plugins that have been made by our community:

- Kill Everyone Campaign by Anthony Fuller
  - Todos os NPCs reais são marcados como alvos, podendo receber avaliação Assassino Silencioso depois de ter matado a todos.
  - Nota: Bem bugado em mapas com mais de 200 alvos, armas podem falhar em momentos aleatórios. Você pode precisar matar usando métodos corpo a corpo.
- Plugins that add unused weapons to the game (such as the [Beanbag Shotgun](/img/wiki/beanbag_shotgun.png))
- Plugins para modificar armas e disfarces existentes

## Como Instalar Plugins

To install plugins, go to either the `plugins` or `#plugin-releases` (being phased out) channel in the Peacock Discord
and download a plugin you are interested in.

- Put the downloaded files into the `plugins` folder, located in the Peacock folder (created automatically by the server
  the first time you launch it).
- The plugin should end with `.plugin.js` or `Plugin.js` - if it's distributed as a `.zip`, extract it first.

Example of the `plugins` folder: ![Plugins folder](/img/wiki/plugins_folder.png)

:::info Instruções

Be sure to check for any further instructions in the plugin's description. Some plugins may require further setup steps
or haven't been updated yet for newer versions of Peacock.

:::
