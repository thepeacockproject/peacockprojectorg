---
title: Linux初始化指南
description: 在Linux或macOS上初始化Peacock的教程。
---

Peacock主要是为在Windows上工作而构建的，但不要担心，在Linux上使用它也是可能的！

## 2022年11月更新

截至2022年11月的更新信息：

-   转到[这个Github仓库](https://github.com/thepeacockproject/linux-steam-setup)，以获得关于如何在Linux上使用Steam运行Peacock的最新说明。
-   **下面的原始指南可能仍然有效。**

## 服务器

为了在Linux上启用服务器，你需要首先准备Node.js。

### 安装nvm

首先运行如下的命令行指令：

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

该命令会下载和安装[nvm](https://nvm.sh)，一个允许快速切换Node.js版本的工具。 这将允许Peacock总是使用它所需要的Node.js版本。

### 安装Node.js

接下来，使用`cd`命令来到你解压Peacock文件的目录，随后运行如下的命令：

```shell
nvm install
```

这会安装Peacock所需的Node.js版本。 当Peacock更新时，你需要重新使用该命令来更新Node.js。

### 创建一个启动器脚本

最后，使用如下推荐的命令内容，创建一个能让你轻松启动服务器的脚本：

```shell
node --enable-source-maps --harmony chunk0.js --hmr
```

-   备注：如果你的80端口已被使用，你需要在你的启动器脚本中指定一个其他端口。 将下面脚本中的`端口号`替换为你的你选择的端口号码。

    -   `PORT=端口号 node --enable-source-maps --harmony chunk0.js --hmr`

然后将脚本设为可执行：

```shell
chmod +x ./theScriptsName.sh
```

现在，你可以通过运行你刚刚创建的脚本启动服务器。

## 补丁安装器

这一部分将比较困难。 你需要在_和游戏相同的Wine前缀（Wine Prefix）_上运行补丁。

一些用户可以正常使其工作，但其他用户也许不行。 请在Discord的`#help`频道留下你的经历供将来其他遇到此问题的人做参考。

一些人通过以下的命令即可让补丁有效：

```shell
STEAM_COMPAT_DATA_PATH="$HOME/.steam/root/steamapps/compatdata/1659040" \
  WINEPREFIX="$STEAM_COMPAT_DATA_PATH/pfx" \
  STEAM_COMPAT_CLIENT_INSTALL_PATH="$home/.steam/steam" \
  "$HOME/.steam/root/steamapps/common/Proton\ -\ Experimental/proton" run /path/to/PeacockPatcher.exe
```

当然，你需要修改命令中的文件路径，来匹配你的Steam、Proton以及补丁位置。
