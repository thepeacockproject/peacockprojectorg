---
title: 自定义内容
description: 由Peacock提供的自定义内容概览
---

Peacock为我们的用户提供了许多有趣的内容。 这里是我们的一些自定义内容的预览！

## 难寻目标

在Peacock中，你可以随意重新游玩行踪不定的目标，重新开始时无时间冷却（不像行踪不定的目标街机模式），也无时间限制。

-   **如何游玩：**
    -   在Peacock中启动杀手3后，在游戏中前往`生涯` -> `行踪不定的目标`
-   参阅[Plugins](#plugins)板块查看在杀手3中安装行踪不定的目标“The Brothers”（删减内容）的信息。

## 升级

-   **自定义Peacock升级**

    -   Peacock支持自定义（Peacock原版）升级。 这些升级在游戏中默认可用。 你也可以在[路线图](./roadmaps.mdx)中看到一些列举的自定义升级。

-   **官方服务器升级**
    -   Peacock也支持一些官方服务器升级，尽管不是全部升级都已被引入。 这些升级在游戏中默认可用。
-   **旧版升级**

    -   Peacock支持在杀手2016中，但不在杀手2或3中的升级（即旧版升级）。
    -   在Peacock Discord中搜索`legacy in: plugin-releases`即可安装旧版升级。 下载`LegacyEscalationsPlugin.js`，并移动到你放置`Start Server.cmd`和`peacockpatcher.exe`的那个文件夹中。
    -   前往`目的地`菜单，然后选择一个地图，即可游玩升级。

-   注意：如[这里](https://thepeacockproject.org/wiki/intel/#loadout-profiles--escalation-level-picker)所述，你可以使用升级关卡选择器工具来选择一个特定的升级关卡。

## Peacock独立自定义任务

Peacock中有两个独立的自定义任务（这些任务不算升级或契约，但比“奖励任务”的内容更加丰富）：

-   **贸易传统**
    -   可以在游戏中的`目的地` > `曼谷`游玩
-   **刺杀李洪**
    -   可以在游戏中的`目的地` > `重庆`游玩

## 契约模式

Peacock同时支持官方服务器和Peacock自定义契约。

-   **支持的契约**
    -   这包含自定义（Peacock原版）契约，由Peacock开发团队创建。 你可以在[这里](https://thepeacockproject.org/wiki/roadmaps)查看一些自定义契约。
        -   **注意：这里不包含官方服务器契约。**
    -   如何游玩：
        -   在游戏中前往`游戏模式`-> `契约` -> `特色`
-   **用户创建的，官方服务器的契约**
    -   如何安装：
        -   注意：这仅能在HITMAPS机器人可以验证通过的平台上使用。 [在这里查看有关验证HITMAPS机器人的信息](https://bot.hitmaps.com/)。
            -   如果你想查看HITMAPS机器人是否在线，在Peacock Discord群组的`#bot-spam`频道输入`/botstatus`。 注意，`/botstatus`命令在使用后会进入10分钟的冷却时间。
            -   注意：只要游戏引擎包含了相应的地图，下载来的官方服务器契约会与所有游戏引擎兼容。 例如，假设你下载了在杀手3引擎中的一个萨比恩萨（第一季地图）契约，你可以通过Peacock在杀手2016和杀手2引擎中游玩这个契约。 但是，如果你下载了一个萨加尔岛（第二季地图）契约，则你无法在杀手2016引擎中游玩这个契约，因为杀手2016引擎并没有包含任何第二季的地图。
        -   在游戏中前往`游戏模式` -> `契约` -> `搜索契约`。
        -   输入官方服务器契约编号（**支持除了任天堂Switch以外的所有平台**）。
        -   契约将会被下载到你的`Contracts`文件夹。
    -   如何游玩：在游戏中前往`游戏模式` -> `契约` -> `我的契约`。
-   **用户创建的，Peacock的契约**
    -   如何安装：
        -   在Peacock Discord群组中的`share-contracts`频道下载契约的`.json`文件。 将此`.json`文件安装到你的`Contracts`文件夹，[如图所示](https://media.discordapp.net/attachments/833505136290299935/991101789426421760/unknown.png)。
    -   如何创建自己的契约：
        -   如果你在Peacock服务器运行时在游戏内创建了契约，你的契约会已`.json`形式保存在你的`Contracts`文件夹，[如图所示](https://media.discordapp.net/attachments/833505136290299935/991101789426421760/unknown.png)。
        -   如果你想让其他人游玩你的自定义Peacock契约，请确保在Peacock Discord群组的`share-contracts`频道分享你的`.json`文件。
    -   如何游玩：
        -   在游戏中前往`游戏模式` -> `契约` -> `我的契约`。

## 插件

除了在升级板块提到的Legacy Escalations Plugin（旧版升级插件）外，Peacock也支持许多服务端侧模组（插件）。 这包含，但不限于：

-   屠城模式
    -   所有真实NPC都被标记为目标，在杀死所有人后可以获得沉默刺客评分。
    -   注意：在有200+目标的地图中会出现卡顿，枪械可能会随机卡住。 你可能需要开始使用近战武器击杀目标。
-   萨拉热窝六号
    -   仅在Playstation上的杀手2016可用的奖励任务。
    -   Installation Instructions: https://github.com/solderq35/hitman-tech-tips/blob/main/modding/sarajevo_six.md
-   兄弟 行踪不定的目标（删减内容）
    -   下载文件：https://www.nexusmods.com/hitman3/mods/375?tab=files
    -   安装模组的主要部分（在Simple Mod Framework中未标记为”Peacock Plugin”的文件）。 将模组中的“Peacock Plugin”部分放入你的Peacock安装文件夹。 如果对这些步骤有任何问题，阅读上面的萨拉热窝六号安装指南。
-   在游戏中添加未启用的武器的插件
-   修改现有武器和伪装的插件

### 如何安装插件

-   简单来说，前往Peacock Discord群组的`#plugin-releases`频道来下载一个你感兴趣的插件。
-   然后，将插件安装到你放置`Start Server.cmd`和`peacockpatcher.exe`的文件夹中。
-   Alternatively, create a folder named `plugins`, and then put your plugins there, to organize your files better.
    -   Example: ![PluginsFolder](https://media.discordapp.net/attachments/1018323831468851202/1072614932790648922/image.png)
-   一些插件可能需要进阶设定或与新版本的Peacock不兼容，所以请确保在`#plugin-releases`频道中查找对应插件的进阶教程。

**注意：插件只是杀手模组化场景中的一小部分。 **更多除了Peacock范围以外的客户端侧的通用模组，可以在这里查阅：

-   [Nexusmods](https://www.nexusmods.com/hitman3)
-   [Glacier Modding Discord](https://discord.com/invite/6UDtuYhZP6)
