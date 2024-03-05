---
title: 自定义内容
description: 由Peacock提供的自定义内容概览
---

Peacock为我们的用户提供了许多有趣的内容。 这里是我们的一些自定义内容的预览！

## 行踪不定的目标

Within Peacock, you can replay Elusive Targets without any time limit on restarts (unlike Elusive Target Arcade), and without a time limit.

- **如何游玩：**
    - 在Peacock中启动杀手3后，在游戏中前往`生涯` -> `行踪不定的目标`
- See the [Plugins](#plugins) section for information on installing "The Brothers" Elusive Target (cut content) in Hitman 3.

## 升级

### Custom Peacock Escalations

Peacock supports custom (Peacock original) escalations. These escalations are available in-game by default. You can see some custom escalations listed in the [Roadmaps](./roadmaps.mdx) as well.

### Official Server Escalations and Legacy Escalations

Peacock also supports all official server escalations, including Hitman 2016 escalations that have not been ported to Hitman 2 or 3 (legacy escalations). These escalations are available in-game by default.

- Note: You can select specific escalation levels to start on using the Escalation Level Picker tool, as explained [here](./intel/loadout-profiles-elp.md#escalation-level-picker)

## 契约模式

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
- 在游戏中前往`游戏模式` -> `契约` -> `搜索契约`。
- 输入官方服务器契约编号（**支持除了任天堂Switch以外的所有平台**）。
- The contract will now be downloaded in your `contracts` folder.

#### How to Play

在游戏中前往`游戏模式` -> `契约` -> `我的契约`。

### User-Created Peacock Contracts

#### How to Install

Download the contract's `.json` file from the `share-contracts` channel in Peacock Discord. Place the `.json` file in your `Contracts` folder, as shown here: ![](/img/wiki/contracts_folder.png).

#### How to create your own

- If you create a contract in-game while in Peacock server, your contract will be saved as an `.json` file in `Contracts` folder, as shown in the image above.
- Be sure to share your `.json` file in Peacock Discord's `share-contracts` channel if you want others to play your custom Peacock contract.

#### How to Play

- 在游戏中前往`游戏模式` -> `契约` -> `我的契约`。

## 插件

Peacock支持各种各样的服务器端mods（插件）。 这包含，但不限于：

- 屠城模式
    - 所有真实NPC都被标记为目标，在杀死所有人后可以获得沉默刺客评分。
    - 注意：在有200+目标的地图中会出现卡顿，枪械可能会随机卡住。 你可能需要开始使用近战武器击杀目标。
- 行踪不定的目标：兄弟（删除内容/饭制模组）
    - NOTE: Although the Brothers ET mod is compatible with Peacock, it is a **fan interpretation** of how the mission would have played out, and not necessarily canon
    - 下载文件：https://www.nexusmods.com/hitman3/mods/375?tab=files
    - 安装模组的主要部分（在Simple Mod Framework中未标记为”Peacock Plugin”的文件）。 Install the "Peacock Plugin" portion of the mod by putting it into your Peacock Install folder
- 在游戏中添加未启用的武器的插件
- 修改现有武器和伪装的插件

### 如何安装插件

Broadly speaking, to install plugins, go to either the `plugins` or `#plugin-releases` channel in the Peacock Discord and download a plugin you are interested in.

- Put your plugins into the `plugins` folder, located in the Peacock folder (created automatically by the server the first time you launch it).
- The plugin should end with `.plugin.js` or `Plugin.js` - if it's distributed as a `.zip`, extract it first.

示例： ![Plugins folder](/img/wiki/plugins_folder.png)

- Be sure to check for any further instructions in the plugin's description, as some plugins may require further setup steps or won't work with newer versions of Peacock.

:::note

Plugins are only a small portion of the Hitman modding scene. **Many Hitman mods are done client-side and out of scope of Peacock.** More general-use client-side mods, outside the scope of Peacock, are aggregated here:

- [NexusMods](https://www.nexusmods.com/hitman3)
- [Glacier Modding Discord](https://discord.com/invite/6UDtuYhZP6)

:::
