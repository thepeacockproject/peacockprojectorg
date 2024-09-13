---
title: 常见问题解答
---

## 如何获取全物品

6.1.0版本起Peacock引入了进度系统，这意味着您现在可以随着游玩解锁物品。 此功能**默认开启**，以模拟官方服务器的体验。

如欲关闭进度系统并**立即获取全物品**，请将`options.ini`文件中的`enableMasteryProgression`选项设置为`false`。

## 常见问题解答

### 排障前须知

-   请参阅本教程的[要求](./requirements.md)板块，确保你拥有受支持的游戏版本和平台等内容。
    -   **Microsoft Store版本的《杀手3》不受支持（常见问题）**。
    -   Linux用户请参阅 [Linux初始化指南](../guides/./linux-setup.md)。
-   确保你在使用最新版本的杀手和Peacock，旧版本是不受支持的。

### 尝试重新连接

-   当你尝试连接Peacock时，确保Peacock Patcher被设置为”Peacock Local“（本地孔雀）选项，而不是”IOI Official“（IOI官方）。
-   你可能需要多次尝试来连接到Peacock。 如果你无法连接，尝试回到Peacock Patcher，点击“Re-patch（重新安装补丁）”，直到Peacock Patcher上显示"Successfully patched ID（成功为某进程安装补丁）"。
-   如果你的游戏已经连接到了官方服务器，你可能首先需要从官方服务器中断开连接来连接到Peacock。 在《杀手3》主界面点击“选项”，然后点击“隐私”，最后点击“选择退出”，即可从官方服务器中断开连接。 然后，你应该能够重新连接到Peacock。
-   若想要回到官方服务器，你可以在连接到Peacock时选择离线，然后在Peacock Patcher上切换到官方服务器，随后在游戏中按下”上线“即可连接到官方服务器。
-   **如果你仍然无法连接，请继续阅读下一节内容。**

### 连接问题

-   正如[什么是Peacock](./what-is-peacock.md)页面中所说，**你需要最起码在启动时连接到网络来使用Peacock**。 这是为了通过Steam/Epic平台的验证。 在首次连接到Peacock后，你可以从互联网中断开，并在游戏进程的阶段中保持连接到Peacock。
    -   如果你的手机有移动数据流量，你可以使用手机为电脑提供热点来连接到互联网。
-   如果这是你第一次游玩游戏，请不要尝试使用Peacock。 在你连接Peacock之前，你必须至少连接到官方服务器一次。 在你连接到官方服务器一次以后，在后续使用Peacock时不再需要连接到官方服务器。
-   尝试以管理员身份运行`PeacockPatcher.exe`。
-   在Peacock Patcher中，保持选中“Use http instead of https”（使用http协议替代https协议），除非你在游玩幽灵模式。

#### 使用端口

如果你遇到的错误看起来像这样：

![Peacock尝试使用正在使用的端口时显示的错误信息](/img/wiki/port_in_use.png)

该问题的错误信息大致为“未能将服务器绑定到 X 端口”。

查阅[此指南](../troubleshooting/fix-port-in-use.md)以获取解释和修复说明。

## 其他

-   参阅[Peacock独特功能](../intel/loadout-profiles-elp.md)页面来查找如何在Peacock上为每张地图设定多重装备组合以及选择特定的升级契约。
-   默认套装 - 如果你在你的Peacock安装文件夹中的`options.ini`文件中开启了`getDefaultSuits = true`，请注意以下行为：
    -   下面任何关于“默认套装”的讨论都是指默认套装**无手套版本**——当你第一次启动该关卡时通常会使用的套装的任何版本。
    -   一些《杀手2》和《杀手3》的默认套装不能在原版游戏的所有地图中使用。 可通过https://www.nexusmods.com/hitman3/mods/401/ 修复。
    -   如果你不使用上述mod，那么请注意以下几点：
        -   第一季的默认套装（例如马拉喀什的夏天西装）： 适用于所有地图
        -   第二季的默认套装（例如，来自圣福耳图那的休闲游客）： 适用于第二季和第三季地图
            -   纽约和马尔代夫（海文岛）属于第二季。
        -   第三季的默认套装（例如：重庆的霓虹之城套装）：适用于第三季地图
        -   安布罗斯岛可以说是在季节系统之外，安布罗斯岛的默认套装（游击队潜水衣）可以在所有地图上使用，而且所有地图的默认套装都可以在安布罗斯岛使用。

### 请求技术支持

-   你的问题未包含在上述常见问题中？ 请前往Peacock Discord `#help`频道中提问(https://thepeacockproject.org/discord)
    -   关闭Peacock服务器。 接着运行`Tools.cmd`，并点击回车键。
    -   准备好提供`DEBUG_PROFILE.zip`，此文件将出现在孔雀目录下。

## Peacock运作的常见问题

-   参阅[Peacock是什么](./what-is-peacock.md)。
    -   请参阅上面的链接，了解有关进度（挑战和精通等）、自由职业者与Peacock的集成、是否需要网络才能使用Peacock，或有关Peacock如何工作的任何其他一般问题。

## 常见功能请求解答

-   在询问任何有关幽灵模式、升级、用户契约、行踪不定的目标之前，请参阅[自定义内容页面](.././custom-content.md)以及[幽灵模式页面](.././ghost-mode.md)。
-   模组适配：绝大多数模组无需额外设置即可适配于Peacock，包括契约与解锁道具模组。 菜单修改有时可能会不兼容，但大部分情况下是没有问题的。

## Piracy FAQ
-   We do not support pirated games.
-   Why though?
    -   IOI is aware that Peacock exists and is not hostile towards the project, supporting piracy would be the quickest way to change that and get the project taken down, erasing over 3 years of work on the project.
    -   Peacock exists, because we enjoy the WoA trilogy games, and want to preserve them, we have little reason to support anything that could significantly hurt IOI financially.
