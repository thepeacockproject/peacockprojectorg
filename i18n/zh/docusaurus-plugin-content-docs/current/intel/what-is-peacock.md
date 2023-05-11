---
title: Peacock是什么？
description: 一个Peacock是什么的介绍，以及为什么你可能想要来使用。
---

Peacock本质上是一个在你自己的电脑上运行的杀手服务器模拟器。

当你启动游戏时，它仅连接Peacock的服务器，不连接IOI的服务器。

## How does Peacock Work?

Here's a brief breakdown of what Peacock does:

-   Peacock lets you access Hitman's rating system without being connected to IOI's servers.
    -   **注意：Peacock并非可以完全断开网络使用。**
    -   在你每次启动游戏时，你仍然需要首先连接到互联网以通过Steam或Epic平台验证。
    -   当通过Steam或Epic平台验证并连接到Peacock后，你可以随意断开互联网连接，接下来的游戏进程将持续与Peacock服务器保持连接。
-   **In general, as of Peacock v6.3.1, challenges, mastery, progression, scoring, earning merces (Freelancer) are all supported, and the experience is 1:1 with the official servers experience**
    -   Minor Exception: Some challenges, especially for Freelancer, may have some minor bugs. Please report any issues to the Peacock Discord `#help` channel (https://thepeacockproject.org/discord).
    -   Please check the `options.ini` file in your Peacock install folder for any additional configuration tweaks, such as **turning progression / challenge completion on and off** (e.g. if you want to get all unlocks right away on purpose).
    -   **By default, progression / challenge completion is turned on to simulate an official servers experience.**
    -   **You can reset progress (challenges, XP, mastery, etc) at any time** by deleting your `userdata` folder within your Peacock Install directory.
    -   如果这是你首次游玩（不论是Peacock还是官方服务器上），一些撤离点仍会被锁定。 你需要解锁迪拜的撤离点（[需要解锁电梯](https://youtu.be/IEQgRQyQRf8)），达特缪尔的撤离点（[需要至少通过摩托车撤离一次](https://youtu.be/AJtJZe9jEi8?t=151)），以及科罗拉多撤离点（[需要至少通过地下室撤离一次](https://youtu.be/3XKWHrKpXwk?t=140)）。 这些撤离点是由客户端侧处理的。
-   Peacock lets you play [custom](.././custom-content.md) or otherwise discontinued / time limited content such as [Ghost Mode](.././ghost-mode.md), Sniper co-op, escalations, elusive targets, and contracts.
    -   Both official server escalation / elusive targets / contracts and custom / modded ones are supported, see [here](.././custom-content.md) for more info.
-   Display leaderboards for other Peacock users (Cross Platform, Epic and Steam)
-   In Game Saving is supported, and as of Peacock v5.0.1 you can load official server saves in Peacock.

花絮：为什么叫Peacock？

Peacock是“精彩表演”，一个引领了杀手系列新时代的任务，在其源代码中使用的名称。 所以，我们使用了Peacock这一名字。

:::
