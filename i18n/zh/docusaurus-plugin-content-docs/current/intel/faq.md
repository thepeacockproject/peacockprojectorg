---
title: 常见问题解答
---

## 常见问题解答

### 错误的游戏版本/平台

-   请参阅本教程的[要求](./requirements.md)板块，确保你拥有受支持的游戏版本和平台等内容。
    -   **Xbox Game Pass及Microsoft PC版本的杀手3是不受支持的（常见问题）**。
    -   Linux用户请参阅 [Linux初始化指南](../guides/./linux-setup.md)。
-   确保你在使用最新版本的杀手和Peacock，旧版本是不受支持的。

### 尝试重新连接

-   当你尝试连接Peacock时，确保Peacock Patcher被设置为”Peacock Local“（本地孔雀）选项，而不是”IOI Official“（IOI官方）。
-   你可能需要多次尝试来连接到Peacock。 如果你无法连接，尝试回到Peacock Patcher，点击“Re-patch（重新安装补丁）”，直到Peacock Patcher上显示"Successfully patched ID（成功为某进程安装补丁）"。
-   如果你的游戏已经连接到了官方服务器，你可能首先需要从官方服务器中断开连接来连接到Peacock。 在杀手3主界面点击“选项”，然后点击“隐私”，最后点击“选择退出”，即可从官方服务器中断开连接。 然后，你应该能够重新连接到Peacock。
-   若想要回到官方服务器，你可以在连接到Peacock时选择离线，然后在Peacock Patcher上切换到官方服务器，随后在游戏中按下”上线“即可连接到官方服务器。
-   **如果你仍然无法连接，请继续阅读下一节内容。**

### 连接问题解答

-   正如[什么是Peacock](./what-is-peacock.md)页面中所说，**你需要最起码在启动时连接到网络来使用Peacock**。 这是为了通过Steam/Epic平台的验证。 在首次连接到Peacock后，你可以从互联网中断开，并在游戏进程的阶段中保持连接到Peacock。
    -   如果你的手机有移动数据流量，你可以使用手机为电脑提供热点来连接到互联网。
-   如果这是你第一次游玩游戏，请不要尝试使用Peacock。 在你连接Peacock之前，你必须至少连接到官方服务器一次。 在你连接到官方服务器一次以后，在后续使用Peacock时不再需要连接到官方服务器。
-   尝试以管理员身份运行`PeacockPatcher.exe`。
-   在Peacock Patcher中，保持选中"Use http instead of https"（使用http协议），除非你在游玩幽灵模式。

-   Peacock默认在你的电脑上使用80端口来启动Peacock服务器。

    -   如果可能的话，在终端中使用`netstat -ano | find ":80" | find "LISTEN"`来检查是否有程序进程正在使用Peacock，然后在任务管理器中点击”详细信息“来通过80端口上的PID找到对应的程序。
    -   如果你使用Visual Studio，你可能安装了一些也运行在80端口上，会影响Peacock的服务。 如何解决：

        1. 通识按下Windows徽标键和R键
        2. 在弹出窗口中输入services.msc，然后点击确定
        3. 在服务管理中搜索W3SVC: World Wide Web Publishing Service和Web Deployment Agent Service
        4. 如果它们存在，禁用它们
        5. 重试一次，如果仍然连接失败，重启你的电脑后再试一次

    -   如果你不想停用80端口的进程，这里是修改Peacock使用端口的方式：
        -   在下面的指引中，请将`端口号`替换为当前在你设备上一个未被占用的端口，例如。`8080`，`6969`，`3000`，等等。
        -   如下修改`Start Server.cmd`文件：
        ```
        @echo off
        SET PORT=端口号
        .\nodedist\node.exe chunk0.js
        PAUSE
        ```
        -   输入`localhost:PORTNUMBER`或`127.0.0.1:PORTNUMBER`进入服务器窗口，如下所示： ![](/img/patcher_port.png)

### 物品/地图缺失

-   从v6开始，Peacock应该能够自动检测到你获得的新DLC，并让你获得这些新的物品/地图。

### 其他

-   参阅[Peacock独特功能](../intel/loadout-profiles-elp.md)页面来查找如何在Peacock上为每张地图设定多重装备组合以及选择特定的升级契约。
-   默认套装 - 如果你在你的Peacock安装文件夹中的`options.ini`文件中开启了`getDefaultSuits = true`，请注意以下行为：
    -   下面任何关于“默认套装”的讨论都是指默认套装**无手套版本**——当你第一次启动该关卡时通常会使用的套装的任何版本。
    -   一些杀手2和杀手3的默认套装不能在原版游戏的所有地图中使用。 可通过https://www.nexusmods.com/hitman3/mods/401/ 修复。
    -   如果你不使用上述mod，那么请注意以下几点：
        -   第一季的默认套装（例如马拉喀什的夏天西装）： 适用于所有地图
        -   第二季的默认套装（例如，来自圣福耳图那的休闲游客）： 适用于第二季和第三季地图
            -   纽约和马尔代夫（海文岛）属于第二季。
        -   第三季的默认套装（例如：重庆的霓虹之城套装）：适用于第三季地图
        -   安布罗斯岛可以说是在季节系统之外，安布罗斯岛的默认套装（游击队潜水衣）可以在所有地图上使用，而且所有地图的默认套装都可以在安布罗斯岛使用。

### 请求技术支持

-   你的问题未包含在上述常见问题中？ 请前往Peacock Discord `#help`频道中提问(https://thepeacockproject.org/discord)
    -   提问前请准备好提供以下信息：
        -   当前Peacock服务器在终端中运行的截图
        -   当前Peacock Patcher运行的截图
        -   你的操作系统和游戏版本信息
        -   80端口的运行信息（参阅上述的[常见问题解答](#connection-troubleshooting)）
        -   其它深入的相关信息

## Peacock运作的常见问题

-   见[什么是Peacock](./what-is-peacock.md)。
    -   请参阅上面的链接，了解有关进度（挑战和精通等）、自由职业者与Peacock的集成、是否需要网络才能使用Peacock，或有关Peacock如何工作的任何其他一般问题

## 常见功能请求解答

-   在询问任何有关幽灵模式、升级、用户契约、行踪不定的目标之前，请参阅[自定义内容页面](.././custom-content.md)以及[幽灵模式页面](.././ghost-mode.md)。
-   Mod（模组）兼容性：
    -   大部分模组都与Peacock兼容；除了三种以外。
        -   如果一个模组修改了契约（任务，特殊要求等），它需要一个Peacock插件来兼容。
        -   如果一个模组修改了准备物品栏（即，修改了开始地点、你能够带进任务中的物品、你能使用的西装），则也需要一个插件。
        -   菜单修改有时可能也会不兼容，但除此之外是没有问题的。 除以上提到的情况以外，模组不需要模组创作者的任何特殊处理就应与Peacock兼容。
