---
title: Missing Strings (UI_PEACOCK)
---

This is caused by the dynamic resources package not being downloaded from Peacock.

Mods can disable downloading this to allow their weapon (or other repository edits) changes to show on official via a thumbs command.
But this also stops Peacock's dynamic resources package from being downloaded, this only contains a localisation file for Peacock's custom content.

You can identify it by the text of custom Peacock menu elements showing text starting with `['UI_PEACOCK` as shown in the image.

![Screenshot from the featured page of Peacock in HITMAN: World of Assassination. Custom Peacock menu elements show text starting with ['UI_PEACOCK.](/img/wiki/missing_strings.png)

## 修正方法

:::note No mods/other game versions

If you do not use Simple Mod Framework or you are using Hitman 2016 or 2.
Ensure that your `thumbs.dat` file does not disable the dynamic resources package through a console command.

確認方法がわからない場合は、ゲームファイルの整合性を確認することでバニラバージョンのゲームを確実に入手できます。

:::

Simple Mod Frameworkを用いてModをインストールすることで修正できます。

- [こちらのリンク](https://hitman-resources.netlify.app/smf-install-link/https://github.com/thepeacockproject/peacock-strings/releases/latest/download/mod.framework.zip)をご利用頂くか、
- [直接ダウンロード](https://github.com/thepeacockproject/peacock-strings/releases/latest/download/mod.framework.zip) して頂いた後、Modマネージャーを通して追加して頂いたりすることができます。

Modを再適用するのをお忘れなく。

:::note 既にModがインストールされている場合

Modがアップデートされていることをご確認下さい。 Simple Mod FrameworkのModマネージャーからご確認頂けます。

:::
