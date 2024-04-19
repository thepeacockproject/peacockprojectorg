---
title: Plugins
---

Peacock supports a broad variety of server side mods (plugins). Plugins can add new content to the game, or change
existing mechanics.

## What can plugins do?

Plugins are able to make changes to the parts of the game that Peacock handles.
This includes menus, missions, contracts mode, leaderboards, and unlockables, among other things.

One limitation of plugins is that they can't modify the game's files on their own, but some mods for the game have
plugins that go along with them to make certain features work in Peacock's online mode, instead of only offline mode.

:::note

Plugins are only a small portion of the Hitman modding scene. **Many Hitman mods are done client-side and out of
scope of Peacock.** More general-use client-side mods, outside the scope of Peacock, are aggregated here:

- [NexusMods](https://www.nexusmods.com/hitman3)
- [Glacier Modding Discord](https://discord.com/invite/6UDtuYhZP6)

:::

## Examples

Here are some of the plugins that have been made by our community:

- Kill Everyone Campaign by Anthony Fuller
  - All real NPC's marked as targets, can get Silent Assassin rating back after killing everyone.
  - Note: Very buggy for maps with 200+ targets, guns may jam randomly. You may need to start by melee killing people.
- Plugins that add unused weapons to the game (such as the [Beanbag Shotgun](/img/wiki/beanbag_shotgun.png))
- Plugins to modify existing weapons and disguises

## How to Install Plugins

To install plugins, go to either the `plugins` or `#plugin-releases` (being phased out) channel in the Peacock Discord
and download a plugin you are interested in.

- Put the downloaded files into the `plugins` folder, located in the Peacock folder (created automatically by the server
  the first time you launch it).
- The plugin should end with `.plugin.js` or `Plugin.js` - if it's distributed as a `.zip`, extract it first.

Example of the `plugins` folder: ![Plugins folder](/img/wiki/plugins_folder.png)

:::info Instructions

Be sure to check for any further instructions in the plugin's description. Some plugins may require further setup steps
or haven't been updated yet for newer versions of Peacock.

:::
