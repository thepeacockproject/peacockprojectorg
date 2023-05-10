---
title: 常见问题解答
---

## 常见问题解答

### 错误的游戏版本/平台

-   Check the [Requirements](./requirements.md) section of this guide, make sure you have a supported game version and platform, etc.
    -   **Xbox Game Pass及Microsoft PC的杀手3版本是不受支持的（常见问题）**。
    -   Check [Linux Setup Guide](../guides/./linux-setup.md) if on Linux.
-   确保你在使用最新版本的杀手和Peacock，旧版本是不受支持的。

### 尝试重新连接

-   当你尝试连接Peacock时，确保Peacock Patcher被设置为”Peacock Local“（本地孔雀）选项，而不是”IOI Official“（IOI官方）。
-   你可能需要多次尝试来连接到Peacock。 如果你无法连接，尝试回到Peacock Patcher，点击“Re-patch（重新安装补丁）”，直到Peacock Patcher上显示"Successfully patched ID（成功为某进程安装补丁）"。
-   如果你的游戏已经连接到了官方服务器，你可能首先需要从官方服务器中断开连接来连接到Peacock。 在杀手3主界面点击“选项”，然后点击“隐私”，最后点击“选择退出”，即可从官方服务器中断开连接。 然后，你应该能够重新连接到Peacock。
-   若想要回到官方服务器，你可以在连接到Peacock时选择离线，然后在Peacock Patcher上切换到官方服务器，随后在游戏中按下”上线“即可连接到官方服务器。
-   **如果你仍然无法连接，请继续阅读下一节内容。**

### 连接问题解答

-   As explained in the [What is Peacock](./what-is-peacock.md) page, **you need to be connected to the Internet, at least initially, to use Peacock**. 这是为了通过Steam/Epic平台的验证。 在首次连接到Peacock后，你可以从互联网中断开，并在游戏进程的阶段中保持连接到Peacock。
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
        -   [如这里所示](https://media.discordapp.net/attachments/839264571990343681/992523717869568050/unknown.png)，在服务器窗口输入`localhost:端口号`。

### 物品/地图缺失

-   如果你最近购买了一个DLC且在Peacock中没有看到，请确保你确实购买了此DLC。 随后删除`userdata`文件夹，并重启服务器。

    -   如果你找不到`userdata`文件夹，[参阅此示例图片](https://media.discordapp.net/attachments/833505136290299935/991071183732613200/unknown.png)。

-   Starting from v6, Peacock should be able to automatically get your latest DLCs. So no need to delete the userdata folder anymore.

### 其他

-   Check [Peacock Unique Features](../intel/loadout-profiles-elp.md) page for info on how to set multiple loadouts per map or choose specific escalation levels with Peacock.
-   Default Suits - If you tick `getDefaultSuits = true` in your `options.ini` file in your Peacock Install folder, please note the following behavior:
    -   Any discussion for "default suits" below refers to the version of the default suit **without gloves** - whichever version of the suit you normally would use for that level when starting it up for the first time ever.
    -   Some Hitman 2 and Hitman 3 default suits are not usable in all maps in the vanilla game. This can be fixed using https://www.nexusmods.com/hitman3/mods/401/
    -   If you choose not to use the above mod, then note the following:
        -   Season 1 default suits (e.g. Summer Suit from Marrakesh): Works on all maps
        -   Season 2 default suits (e.g. Casual Tourist from Santa Fortuna): Works on Season 2 and 3 Maps
            -   New York and Maldives (Haven) are included in Season 2
        -   Season 1 default suits (e.g. Neon City Suit from Chongqing): Works on Season 3 Maps Only
        -   Ambrose Island is outside of the Season system so to speak, Ambrose Default suit (Guerilla Wetsuit) is usable on all maps, and all maps' Default Suits can be used in Ambrose

### 请求技术支持

-   你的问题未包含在上述常见问题中？ 请前往Peacock Discord `#help`频道中提问(https://thepeacockproject.org/discord)
    -   提问前请准备好提供以下信息：
        -   当前Peacock服务器在终端中运行的截图
        -   当前Peacock Patcher运行的截图
        -   你的操作系统和游戏版本信息
        -   Information on what is running on Port 80 (check [Connection Troubleshooting](#connection-troubleshooting) above)
        -   其它深入的相关信息

## How Peacock Works FAQ

-   See [What is Peacock](./what-is-peacock.md)

## 常见功能请求解答

-   Before asking any questions about Ghost Mode, escalations, user contracts, elusive targets, please check the [Custom Content Page](.././custom-content.md) as well as the [Ghost Mode Page](.././ghost-mode.md).
-   Mod（模组）兼容性：
    -   大部分模组都与Peacock兼容；除了三种以外。
        -   如果一个模组修改了契约（任务，特殊要求等），它需要一个Peacock插件来兼容。
        -   如果一个模组修改了准备物品栏（即，修改了开始地点、你能够带进任务中的物品、你能使用的西装），则也需要一个插件。
        -   菜单修改有时可能也会不兼容，但除此之外是没有问题的。 除以上提到的情况以外，模组不需要模组创作者的任何特殊处理就应与Peacock兼容。
