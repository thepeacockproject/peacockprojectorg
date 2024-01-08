---
title: Linux初始化指南
description: 在Linux或macOS上初始化Peacock的教程。
---

Peacock主要是为在Windows上工作而构建的，但不要担心，在Linux上使用它也是可能的！

:::info Update as of November 2022

-   Go to [this GitHub repo](https://github.com/thepeacockproject/linux-steam-setup) for updated instructions on how to get Peacock running on Linux with Steam.
-   **下面的原始指南可能仍然有效。**

:::

## 服务器

To get the server working on Linux, you will need to first prepare Node.js.

### 安装nvm

In order to do so, run the following command the first time:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

This will download and install [nvm](https://nvm.sh), which allows quickly swapping between multiple Node.js versions. This will allow Peacock to always use the version of Node.js it needs to.

### 安装Node.js

Next, `cd` to the directory you have Peacock unzipped to, and run the following command:

```shell
nvm install
```

This will install the version of Node.js required by Peacock. You will need to re-run this when Peacock updates.

### 创建一个启动器脚本

Finally, create a script that lets you easily start the server, with the suggested contents being as follows:

```shell
node --enable-source-maps --harmony chunk0.js --hmr
```

-   备注：如果你的80端口已被使用，你需要在你的启动器脚本中指定一个其他端口。 将下面脚本中的`端口号`替换为你的你选择的端口号码。

    -   `PORT=端口号 node --enable-source-maps --harmony chunk0.js --hmr`

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
