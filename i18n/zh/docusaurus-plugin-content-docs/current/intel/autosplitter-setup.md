---
title: Auto-Splitter初始化指南
description: 如何安装为整局游戏速通安装Peacock计时器。
---

_教程由[Fusha](https://github.com/fu5ha)编写_。

此工具用于《杀手》游戏的全段速通。

## 说明

（同时查阅下文“如何使用”和“其他使用说明”）

-   处于验证目的，100%准确记录每局游戏用时，与[官方服务器计时器](https://hitruns-wiki.vercel.app/docs/livesplit_auto_official)不同。

-   修复若干漏洞，例如在罗马尼亚“外部”出生点时计时器无法工作。

-   完全自动分时，基于你开始的关卡和你游玩的整局游戏类别。 不需要手动开始和关闭计时器（例如通过按下数字小键盘按键）。

-   Steam和Epic上的《杀手3》均可用，不像官方服务器计时器（其仅能在Epic使用）。

-   显然，这些功能只能在[Peacock](./what-is-peacock.md)上使用，如果你在官方服务器上游玩，出于一些原因你应该使用[其他两种Livesplit指南](https://hitruns-wiki.vercel.app/docs/livesplit)之一。

## 安装

1. 如果你还未安装，安装[Peacock](./installation.md)和[LiveSplit](https://livesplit.org/downloads/)（只需解压到你想要的地方）。 **如果您已经安装了 Peacock，请确保将其更新到最新版本。** 安装/更新这些应用程序后，请暂时关闭 Peacock，如果您还没有启动 LiveSplit，请启动它。

2. 在LiveSplit主窗口上点击右键，然后点击`Edit Splits`。 将计时名称（`Segment Name`）修改为你想要的名字。 点击`Insert Above / Below`来添加新的小节。 如果你想，你可以在`Segment Times`中输入你的预估时间。

3. 在Splits Editor按下`ok`，然后在LiveSplit主窗口上点击右键，并选择`Save Splits`以备后续使用。

4. 在LiveSplit主窗口上点击右键，然后点击`Edit Layout`。 在`Timer`上双击，然后选择`Game Time`来设定计时方式。

5. 在`Edit Layout`页面上：点击`+`按钮，然后点击`Control`，再点击`Livesplit Server`。

6. 在Layout Editor页面点击`ok`，然后在LiveSplit主窗口点击右键，并选择`save layout`以备后续使用。

7. 打开 Peacock 文件夹中的 `options.ini` 文件，将 `liveSplit = false` 改为 `liveSplit = true` 以启用 LiveSplit 集成（默认关闭），并根据需要调整其他 LiveSplit 选项。

## 如何使用

（在每次启动游戏时都需要操作，同时注意操作顺序！ 确保在启动Peacock前启动LiveSplit并启动服务器）。

1. 打开LiveSplit

2. 右键单击 LiveSplit 主窗口，然后选择 `控制`，再选择 `启动 TCP 服务器`。 如果此按钮不存在，则说明您运行的是过时的 LiveSplit 版本，因为此服务器最初与 LiveSplit 主下载是分开的，请更新到 2024 年 5 月 11 日发布的 LiveSplit 1.8.29 及以上版本。

3. 如果你想要修改运行的整局游戏类别，打开Peacock文件夹中的`options.ini`，然后将`autoSplitterCampaign`选项修改为`trilogy`， `1`，`2`，或 `3`，取决于你想要速通的战役（自动计时器默认设置为`trilogy`）。 仅在你按顺序游玩选中的战役时，计时器才会工作。

4. 打开你安装Peacock的文件夹，运行`Start Server.cmd`和`PeacockPatcher.exe`。 您应该会在 Peacock 服务器窗口中看到一条消息，内容为 `LiveSplit 已初始化`。

5. 正常启动游戏。

## 其他使用说明

-   计时器总会在你完成选择战役的第一个任务后立即完全重置并开启新的一局，不论它当前处于何种状态。 你不需要手动在LiveSplit中开启或重置（通过按下数字小键盘按键等）。

-   如果你开始的任务不是第一个任务、你刚刚完成的任务，或你刚刚完成的任务的下一个任务，计时器将会停止记录时间，知道你返回到战役的第一个任务。

-   计时器在你成功完成一个任务后，会立即自动分割时间（记录时间，并移动到下一个任务）。 然而，如果你重复游玩同一个任务（除了选中战役的第一个任务外），计时器将会自动添加你重玩的时间，尽管你“完成”了任务，计时器也会重新分割时间（例如，如果你丢失了沉默刺客评价，只需要重新游玩任务，计时器会自动抹除上次完成该任务的时间并记录本次完成该任务的时间）。

-   在你完成或失败一个任务后，计时器会将你刚刚进行的尝试的详细计时信息显示在Peacock服务器窗口，包含了详细时间数据和你在当前任务总共尝试的时间。

-   自v4.5.0起，当你在当前任务中未取得沉默刺客评价时，Peacock自动计时器默认不将本次成功的任务标记为完成（记录时间及移动到下一张地图）。 如果你想使用自动计时器游玩any%模式，即无限制，可以将`options.ini`文件中的`autoSplitterForceSilentAssassin`选项设置为`false`。

-   对于想要参加每周RTA SASO全局游戏竞赛的玩家，你可以在[racetime.gg](https://racetime.gg/hitman-3)注册，并将`options.ini`文件中的`autoSplitterRacetimegg`设置为`true`，即可使用与race.gg关联的RTA自动计时器。
