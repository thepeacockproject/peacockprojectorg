---
title: システム要件
description: Peacockを起動し利用するためのシステム要件は以下の通りです。
---

動画によるチュートリアル

このチュートリアルを動画や音声で確認したい場合はこちらの [解説動画](https://www.youtube.com/watch?v=nF5ngiuDe5M)をご視聴下さい。

:::

## サポートされているゲームおよびプラットフォームの一覧

-   Hitman 2016 ([Steam](https://store.steampowered.com/app/236870/HITMAN/) / [Epic](https://www.epicgames.com/store/en-US/p/hitman))
-   Hitman Sniper Assassin ([Steam Depot](https://steamdb.info/app/783780/))
-   Hitman 2 ([Steam](https://store.steampowered.com/app/863550/HITMAN_2/))
-   Hitman 3 ([Steam](https://store.steampowered.com/app/1659040/HITMAN_3/) / [Epic](https://www.epicgames.com/store/en-US/p/hitman-3))

### Unsupported games and platforms

-   Any other platform not listed in "Supported" section, such as console platforms, are not supported.
-   Hitman3のデモバージョンはサポートされていません。
-   ゲームパス版やMicrosoft PCエディションのヒットマン3はサポートされていません。
-   **不正に入手されたゲームや海賊版はサポートされていません。また、これらの非合法なバージョンの取り扱いについてPeacockのDiscordサーバーでご質問頂いた場合、追放処分を取らせて頂きます。**

## Supported Operating Systems

### Server

The server is the part responsible for handling the game's requests. It is portable, and doesn't even need to run on the same machine as the game.

-   A platform supported by Node.js, meaning Windows 8.1 or up, or a recent Linux/macOS/FreeBSD installation.
-   We have alternatives available if you are unable to meet these requirements, please ask in the Discord.
-   Check the Linux NodeJS install guide: https://thepeacockproject.org/wiki/guides/linux-setup/

### Patcher

The patcher tells the game to actually connect to Peacock, and must be on the same machine as the game.

-   Windows 7 or up

### Summary

Windows 10 and 11 are the best supported operating systems, but Windows 7 or 8 and Linux should work as well, with additional troubleshooting. **Ask in the [Discord](https://thepeacockproject.org/discord) if in doubt.**

:::warning Windows 7 Support

Windows7は現在MicrosoftやNode.jsによってサポートされていないため、Windows7でPeacockを利用する場合にバグが発生する可能性があることをあらかじめご了承下さい。

セキュリティに関連するアップデートやより安定したプレイングのために、より新しいバージョンのWindowsに更新して下さい。

Some previous Hitman games (2016 and 2) support Windows 7, but you will need to host the server on another machine or virtual machine in order to make things work.

:::
