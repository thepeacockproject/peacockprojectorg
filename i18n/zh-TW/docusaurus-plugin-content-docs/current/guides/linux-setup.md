---
title: Linux 安裝指南
description: 在 Linux 或 macOS 上設定 Peacock 的指南。
---

Peacock 主要在 Windows 上運行，但不用擔心，也可以在 Linux 上使用它！

:::info 截至 2022 年 11 月的更新

-   請造訪[此 GitHub 儲存庫](https://github.com/thepeacockproject/linux-steam-setup)，以取得有關如何使用 Steam 在 Linux 上執行 Peacock 的更新說明。
-   **以下原始說明可能也有效。**

:::

## Server

要讓伺服器在 Linux 上運行，您需要先準備 Node.js。

### 安裝 nvm

為此，第一次請執行以下命令：

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

這將下載並安裝[nvm](https://nvm.sh)，它允許在多個 Node.js 版本之間快速切換。 這將允許 Peacock 始終使用它所需的 Node.js 版本。

### 安裝 Node.js

接下來，`cd` 到 Peacock 解壓縮到的目錄，並執行以下命令：

```shell
nvm install
```

這將安裝 Peacock 所需的 Node.js 版本。 當 Peacock 更新時，您將需要重新執行此程式。

### 建立啟動器腳本

最後，建立一個腳本，以便輕鬆啟動伺服器，建議內容如下：

```shell
node --enable-source-maps --harmony chunk0.js --hmr
```

-   注意：如果您使用的連接埠不是 80，則應在啟動器腳本中指定該連接埠。 將下面腳本中的`PORTNUMBER`替換為您選擇的連接埠號碼。

    -   `PORT=PORTNUMBER node --enable-source-maps --harmony chunk0.js --hmr`

然後使腳本可執行：

```shell
chmod +x ./theScriptsName.sh
```

現在您可以透過執行剛剛建立的腳本來啟動伺服器。

## Patcher

這部分更加棘手。 您需要在_與遊戲相同的 Wine 前綴_中執行修補程式。

有些用戶已經讓它工作了，但是其他用戶卻沒有。 請隨意在 Discord 的 `#help` 頻道中記錄您的經驗，以供未來遇到問題的人參考。

有些人使用以下命令使其工作：

```shell
STEAM_COMPAT_DATA_PATH="$HOME/.steam/root/steamapps/compatdata/1659040" \
  WINEPREFIX="$STEAM_COMPAT_DATA_PATH/pfx" \
  STEAM_COMPAT_CLIENT_INSTALL_PATH="$home/.steam/steam" \
  "$HOME/.steam/root/steamapps/common/Proton\ -\ Experimental/proton" run /path/to/PeacockPatcher.exe
```

顯然，您需要更改路徑以符合 Steam、Proton 和修補程式的安裝。
