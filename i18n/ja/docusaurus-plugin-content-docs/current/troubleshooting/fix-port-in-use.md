---
title: ”Port in Use(ポートが使用中です)"エラー
---

Peacockが起動しようとしているが、Peacockが使用するよう設定されているポートが既に使用中である場合、"Port in Use"エラーが発生します。

エラーが発生すると、以下のようなメッセージが表示されます:

![Peacockが既に使用されているポートを使用しようとした際に表示されるエラーメッセージ](/img/wiki/port_in_use.png)

## ポートとは何か?

In simple terms, a port is a thing programs and other computers can connect to and get data from.
In order for the game to talk to Peacock's server, the server has to occupy a port.
Ports must have an assigned number. Peacockがデフォルトで使用するポートは80番ですが、1から65535までのあらゆる整数がポート番号になり得ます。

## Visual Studio

If you use Visual Studio, you may have installed some services that interfere with Peacock by also running on Port 80. 以下の手順で修正を試みて下さい:

1. WindowsキーとRキーを同時に押して下さい。
2. ポップアップされた画面に"services.msc"と入力し、Okayを押して下さい。
3. Check for `W3SVC: World Wide Web Publishing Service` and `Web Deployment Agent Service` in the service manager.
4. もしこれらが存在している場合、両方を無効化して下さい。
5. Try again, if it doesn't work, restart your computer, then try once more.

## ポートの変更

Here's how to change the port Peacock uses, if you don't want to stop the process on Port 80:

In the instructions below, please substitute `PORTNUMBER` with a port that is not currently in use on your PC, e.g. `8080`, `6969`, `3000`, etc.

- Change `Start Server.cmd` to be as follows:
  ```bash
  @echo off
  SET PORT=PORTNUMBER
  SET LOG_LEVEL_CONSOLE=info
  SET LOG_CATEGORY_DISABLED=
  SET LOG_MAX_FILES=14d
  .\nodedist\node.exe chunk0.js
  PAUSE
  ```
- Type `127.0.0.1:PORTNUMBER` into the Patcher's URL field, as shown here (click on the text and then type, the UI/UX will hopefully be improved soon): ![](/img/wiki/patcher_port.png)

## Linuxの場合

Peacockのデフォルトのポートは80番ですが、Linuxでは、通常のユーザーアカウントには80番のポートを使用する権限がございません。
上記の『ポートの変更』の項目をご確認下さい。
