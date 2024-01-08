---
title: 自定义内容
description: 由Peacock提供的自定义内容概览
---

Peacock为我们的用户提供了许多有趣的内容。 这里是我们的一些自定义内容的预览！

## 行踪不定的目标

在Peacock中，你可以随意重新游玩行踪不定的目标，重新开始时无时间冷却（不像行踪不定的目标街机模式），也无时间限制。

-   **如何游玩：**
    -   在Peacock中启动杀手3后，在游戏中前往`生涯` -> `行踪不定的目标`
-   参阅[Plugins](#plugins)板块查看在杀手3中安装行踪不定的目标“The Brothers”（删减内容）的信息。

## 升级

-   **自定义Peacock升级**

    -   Peacock支持自定义（Peacock原版）升级。 这些升级在游戏中默认可用。 你也可以在[路线图](./roadmaps.mdx)中看到一些列举的自定义升级。

-   **官方服务器的升级契约与传承升级契约**

    -   Peacock也支持所有官方服务器升级契约，包括未被移植到《杀手2》或《杀手3》的《杀手2016》升级契约（传承升级契约）。 这些升级在游戏中默认可用。

-   注意：您可以使用升级契约关卡选择工具选择要启动的特定级别的升级契约关卡，如[此处](./intel/loadout-profiles-elp.md#escalation-level-picker)所述

## 契约模式

Peacock同时支持官方服务器和Peacock自定义契约。

-   **支持的契约**
    -   这包含自定义（Peacock原版）契约，由Peacock开发团队创建。 你可以在[这里](./roadmaps.mdx)查看一些自定义契约。
        -   **注意：这里不包含官方服务器契约。**
    -   如何游玩：
        -   在游戏中前往`游戏模式`-> `契约` -> `特色`
-   **用户创建的，官方服务器的契约**
    -   如何安装：
        -   注意：这仅能在HITMAPS机器人可以验证通过的平台上使用。 [在这里查看有关验证HITMAPS机器人的信息](https://bot.hitmaps.com/)。
            -   如果你想查看HITMAPS机器人是否在线，在Peacock Discord群组的`#bot-spam`频道输入`/botstatus`。 注意，`/botstatus`命令在使用后会进入10分钟的冷却时间。
            -   注意：只要游戏引擎包含了相应的地图，下载来的官方服务器契约会与所有游戏引擎兼容。 例如，假设你下载了在《杀手3》引擎中的一个萨比恩撒（第一季地图）契约，你可以通过Peacock在《杀手2016》和《杀手2》引擎中游玩这个契约。 但是，如果你下载了一个萨加尔岛（第二季地图）契约，则你无法在杀手2016引擎中游玩这个契约，因为杀手2016引擎并没有包含任何第二季的地图。
        -   在游戏中前往`游戏模式` -> `契约` -> `搜索契约`。
        -   输入官方服务器契约编号（**支持除了任天堂Switch以外的所有平台**）。
        -   契约将会被下载到你的`Contracts`文件夹。
    -   如何游玩：在游戏中前往`游戏模式` -> `契约` -> `我的契约`。
-   **用户创建的，Peacock的契约**
    -   如何安装：
        -   在Peacock Discord群组中的`share-contracts`频道下载契约的`.json`文件。 将此`.json`文件安装到你的`Contracts`文件夹，如图所示：![](/img/contracts_folder.png)。
    -   如何创建自己的契约：
        -   如果你在Peacock服务器运行时在游戏内创建了契约，你的契约会以`.json`形式保存在你的`Contracts`文件夹，如上图所示。
        -   如果你想让其他人游玩你的自定义Peacock契约，请确保在Peacock Discord群组的`share-contracts`频道分享你的`.json`文件。
    -   如何游玩：
        -   在游戏中前往`游戏模式` -> `契约` -> `我的契约`。

## 插件

Peacock支持各种各样的服务器端mods（插件）。 这包含，但不限于：

-   屠城模式
    -   所有真实NPC都被标记为目标，在杀死所有人后可以获得沉默刺客评分。
    -   注意：在有200+目标的地图中会出现卡顿，枪械可能会随机卡住。 你可能需要开始使用近战武器击杀目标。
-   行踪不定的目标：兄弟（删除内容/饭制模组）
    -   请注意：尽管兄弟ET模组适用于Peacock，但其本质是对于该任务本应游玩内容的一种**粉丝自制诠释**，并非必要的规则。
    -   下载文件：https://www.nexusmods.com/hitman3/mods/375?tab=files
    -   安装模组的主要部分（在Simple Mod Framework中未标记为”Peacock Plugin”的文件）。 通过将模组的“Peacock插件”部分放入你的Peacock安装文件夹以进行安装
-   在游戏中添加未启用的武器的插件
-   修改现有武器和伪装的插件

### 如何安装插件

-   简单来说，前往Peacock Discord群组的 `plugins`或`#plugin-releases`频道来下载一个你感兴趣的插件。
-   把你的插件放到孔雀文件夹下的`plugins`文件夹。
    -   Your plugin should end with `.plugin.mjs` or `Plugin.js` - if it's distributed as a `.zip`, extract it first.
    -   示例： ![插件文件夹](/img/plugins_folder.png)
-   一些插件可能需要进阶设定或与新版本的Peacock不兼容，所以请确保在`#plugin-releases`频道中查找对应插件的进阶教程。

**注意：插件只是杀手模组化场景中的一小部分。 **更多除了Peacock范围以外的客户端侧的通用模组，可以在这里查阅：

-   [NexusMods](https://www.nexusmods.com/hitman3)
-   [Glacier Modding Discord](https://discord.com/invite/6UDtuYhZP6)
