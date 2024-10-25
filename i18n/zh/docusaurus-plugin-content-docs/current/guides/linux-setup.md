---
title: Linux初始化指南
description: 在Linux或macOS上初始化Peacock的教程。
---

Peacock主要是为在Windows上工作而构建的，但不要担心，在Linux上使用它也是可能的！

:::2022年11月更新信息

-   请访问[该GitHub资源库](https://github.com/thepeacockproject/linux-steam-setup)获取有关如何在Linux上通过Steam运行Peacock的最新说明。
-   **下面的原始指南可能仍然有效。**

:::

## 服务器

要让服务器在Linux上运行，首先需要准备Node.js。

### 安装nvm

为此，首次运行以下命令：

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

这将下载并安装[nvm](https://nvm.sh)，它允许在多个Node.js版本之间快速切换。 这将允许Peacock始终使用它所需的Node.js版本。

### 安装Node.js

接下来，对解压Peacock文件的目录使用`cd`命令，并运行以下命令：

```shell
nvm install
```

这会安装Peacock所需的Node.js版本。 每当Peacock更新时，你需要重新使用该命令。

### 创建一个启动器脚本

最后，使用下面推荐的内容，创建一个能让你轻松启动服务器的脚本：

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

这一部分将比较困难。 你需要在_和游戏相同的Wine Prefix_上运行补丁。

一些用户可以正常使用，但某些用户未必。 请在Discord的`#help`频道留下你的经历以供将来其他遇到此问题的人作参考。

一些用户通过以下的命令即可让补丁有效：

```shell
STEAM_COMPAT_DATA_PATH="$HOME/.steam/root/steamapps/compatdata/1659040" \
  WINEPREFIX="$STEAM_COMPAT_DATA_PATH/pfx" \
  STEAM_COMPAT_CLIENT_INSTALL_PATH="$home/.steam/steam" \
  "$HOME/.steam/root/steamapps/common/Proton\ -\ Experimental/proton" run /path/to/PeacockPatcher.exe
```

当然，你需要修改命令中的文件路径，来匹配你的Steam、Proton以及补丁位置。
