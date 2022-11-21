---
title: Linux初始化指南
description: 在Linux系统或macOS系统上初始化Peacock的教程。
---

Peacock主要在Windows系统上使用，但别担心，在Linux系统上使用也是可能的！

## 服务器

为了在Linux系统上启用服务器，首先你需要准备好Node.js。

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

    -   `PORT=PORTNUMBER node --enable-source-maps --harmony chunk0.js --hmr`

And then make the script executable:

```shell
chmod +x ./theScriptsName.sh
```

You can now launch the server by running the script you just created.

## 补丁安装器

This part is a lot more tricky. You need to run the patcher in _the same Wine prefix as the game_.

Some users have gotten it to work, but others haven't. Feel free to document your experience in the Discord's `#help` channel for anybody that has problems in the future to reference.

Some people have gotten it to work using the following command:

```shell
STEAM_COMPAT_DATA_PATH="$HOME/.steam/root/steamapps/compatdata/1659040" \
  WINEPREFIX="$STEAM_COMPAT_DATA_PATH/pfx" \
  STEAM_COMPAT_CLIENT_INSTALL_PATH="$home/.steam/steam" \
  "$HOME/.steam/root/steamapps/common/Proton\ -\ Experimental/proton" run /path/to/PeacockPatcher.exe
```

Obviously, you will need to change the paths to match your install of Steam, Proton, and the patcher.
