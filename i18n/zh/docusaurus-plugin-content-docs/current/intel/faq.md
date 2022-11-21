---
title: 常见问题解答
---

## 常见问题解答

### 错误的游戏版本/平台

-   请参阅本教程的[需求](https://thepeacockproject.org/wiki/intel/requirements)板块，确保你拥有受支持的游戏版本和平台以及其他内容。
    -   **Xbox Game Pass及Microsoft PC的杀手3版本是不受支持的（常见问题）**。
    -   Linux用户请参阅 [Linux初始化指南](https://thepeacockproject.org/wiki/guides/linux-setup)
-   确保你在使用最新版本的杀手和Peacock，旧版本是不受支持的。

### 尝试重新连接

-   你可能需要多次尝试来连接到Peacock。 如果你无法连接，尝试回到Peacock Patcher，点击“Re-patch（重新安装补丁）”，直到Peacock Patcher上显示"Successfully patched ID（成功为某进程安装补丁）"。
-   如果你的游戏已经连接到了官方服务器，你可能首先需要从官方服务器中断开连接来连接到Peacock。 在杀手3主界面点击“选项”，然后点击“隐私”，最后点击“选择退出”，即可从官方服务器中断开连接。 然后，你应该能够重新连接到Peacock。
-   若想要回到官方服务器，你可以在连接到Peacock时选择离线，然后在Peacock Patcher上切换到官方服务器，随后在游戏中按下”上线“即可连接到官方服务器。
-   **如果你仍然无法连接，请继续阅读下一节内容。**

### 连接问题解答

-   正如[Peacock是什么](https://thepeacockproject.org/wiki/intel/what-is-peacock)页面中所说， **你需要连接到互联网，最起码在启动时，来使用Peacock**。 这是为了通过Steam/Epic平台的验证。 在首次连接到Peacock后，你可以从互联网中断开，并在游戏进程的阶段中保持连接到Peacock。
    -   如果你的手机有移动数据流量，你可以使用手机为电脑提供热点来连接到互联网。
-   如果这是你第一次游玩游戏，请不要尝试使用Peacock。 在你连接Peacock之前，你必须至少连接到官方服务器一次。 在你连接到官方服务器一次以后，在后续使用Peacock时不再需要连接到官方服务器。
-   尝试以管理员身份运行`Start Server.cmd`。
-   在Peacock Patcher中，保持选中"Use http instead of https"（使用http协议），除非你在游玩幽灵模式。

-   Peacock默认在你的电脑上使用80端口来启动Peacock服务器。

    -   如果可能的话，在终端中使用`netstat -ano | find ":80" | find "LISTEN"`来检查是否有程序进程正在使用Peacock，然后在任务管理器中点击”详细信息“来通过80端口上的PID找到对应的程序。
    -   如果你使用Visual Studio，你可能安装了一些也运行在80端口上，会影响Peacock的服务。 如何解决：

        1. 通识按下Windows徽标键和R键
        2. 在弹出窗口中输入services.msc，然后点击确定
        3. 在服务管理中搜索W3SVC: World Wide Web Publishing Service和Web Deployment Agent Service
        4. 如果它们存在，禁用它们
        5. 重试一次，如果仍然连接失败，重启你的电脑后再试一次

    -   如果因某些原因你无法或不想关闭占用了80端口的程序，你可以在你的`Start Server.cmd`文件中加一行内容来设定一个端口。 同时，确保在Peacock Patcher中的”Server Address（服务器地址）“输入框内输入`127.0.0.1:端口号`，其中，`端口号`表示你在`Start Server.cmd`中指定的端口号。
        -   参阅[此示例图片](https://media.discordapp.net/attachments/839264571990343681/985885230634242048/unknown.png)来查看需要在`Start Server.cmd`中编写的内容。 （若你在中国大陆且无法访问网页，请使用此[镜像](https://i.postimg.cc/76L1NVQy/startserver.png)）
        -   参阅[此示例图片](https://media.discordapp.net/attachments/839264571990343681/992523717869568050/unknown.png)来查看需要在Start Server.cmd中编写的内容。（若你在中国大陆且无法访问网页，请使用此[镜像](https://i.postimg.cc/nr0xBn5k/peacockpatcher.png)）

### 物品/地图缺失

-   如果你近期购买了DLC但在Peacock中找不到对应内容，首先请确保你确实购买了所说的DLC。 随后，删除`userdata`文件夹，再重新启动服务器。

    -   如果你找不到`userdata`文件夹，[参阅此示例图片](https://media.discordapp.net/attachments/833505136290299935/991071183732613200/unknown.png)。 （如果你在中国大陆且无法访问网页，请使用此[镜像](https://i.postimg.cc/Qt4QYyFq/userdata.png)）

### 其他

-   游戏内存档是受支持的，且在Peacock v5.0.1起，你可以在Peacock中载入官方服务器存档。
-   挑战（目前仅在巴黎实装）仍处在开发阶段，可能出现错误。 请在Peacock Discord的`#help`频道反馈任何错误。
-   使用Peacock会小程度地影响你的官方服务器档案。
    -   由于我们还未正式实装一些小的功能，例如内容/故事的剧透警告，它仍然会被全部标记为“我已经游玩过”的状态。 除此之外，应该不会有任何的影响。
-   注意：如果这是你的首次游玩（无论是在Peacock或是官方服务器），一些撤离点可能会被锁定。 你需要解锁迪拜的撤离点（[需要解锁电梯](https://youtu.be/IEQgRQyQRf8)），达特缪尔的撤离点（[需要至少通过摩托车撤离一次](https://youtu.be/AJtJZe9jEi8?t=151)），以及科罗拉多撤离点（[需要至少通过地下室撤离一次](https://youtu.be/3XKWHrKpXwk?t=140)）。 这些撤离点是由客户端侧处理的。
-   参阅[Peacock独特功能](../intel/loadout-profiles-elp)页面来查找如何在Peacock上为每张地图设定多重装备组合以及选择特定的升级关卡。

### 请求技术支持

-   你的问题未包含在上述常见问题中？ 请前往Peacock Discord `#help`频道中提问(https://thepeacockproject.org/discord)
    -   提问前请准备好提供以下信息：
        -   当前Peacock服务器在终端中运行的截图
        -   当前Peacock Patcher运行的截图
        -   你的操作系统和游戏版本信息
        -   80端口的运行信息（参阅上述的[常见问题解答](faq/#connection-troubleshooting)）
        -   其它深入的相关信息

## 常见功能请求解答

-   首先声明：进度（物品解锁等）当前不受支持，尽管在将来有相关计划。 Peacock将直接给你提供所有的物品（根据你所购买的DLC判定你有资格拥有的物品）。
-   游戏内挑战已在Peacock v5.0.1开始启用。
-   在询问任何有关幽灵模式、升级、用户契约、难寻目标之前，请参阅[自定义内容页面](https://thepeacockproject.org/wiki/custom-content)以及[幽灵模式页面](https://thepeacockproject.org/wiki/ghost-mode)。
-   Mod（模组）兼容性：
    -   大部分模组都与Peacock兼容；除了三种以外。
        -   如果一个模组修改了契约（任务，特殊要求等），它需要一个Peacock插件来兼容。
        -   如果一个模组修改了准备物品栏（即，修改了开始地点、你能够带进任务中的物品、你能使用的西装），则也需要一个插件。
        -   菜单修改有时可能也会不兼容，但除此之外是没有问题的。 除以上提到的情况以外，模组不需要模组创作者的任何特殊处理就应与Peacock兼容。
