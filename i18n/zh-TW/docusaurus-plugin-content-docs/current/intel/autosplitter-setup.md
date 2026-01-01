---
title: Auto-Splitter 設定
description: 如何設定 Peacock auto-splitter以實現全遊戲速通。
---

_本指南由[Fusha](https://github.com/fu5ha)_原創。

此工具適用於完整版 Hitman 快速通關遊戲。

## 規格

（另請參閱下面的「如何使用」和「其他使用說明」）

-   與[官方伺服器 Autosplitter](https://hitruns-wiki.vercel.app/docs/livesplit_auto_official) 不同，為了驗證目的，執行計時的準確性為 100%。

-   修復了一些雜項故障，例如分離器在「羅馬尼亞外部」的起始位置無法正常工作。

-   根據您開始的關卡和正在玩的完整遊戲類別，完全自動分割。 不需要啟動和停止分離器（透過按數字鍵盤鍵等）。

-   與官方伺服器自動分割器（僅適用於 Epic）不同，它適用於 Steam 和 Epic 版本的 Hitman 3。

-   顯然，這只適用於[Peacock](./what-is-peacock.md)，如果您出於某種原因在官方伺服器上玩遊戲，則應該使用[其他兩個 Livesplit 指南](https://hitruns-wiki.vercel.app/docs/livesplit)之一。

## 安裝

1. 如果您尚未安裝 [Peacock](./installation.md) 和 [LiveSplit](https://livesplit.org/downloads/)，請安裝它們（只需將它們解壓縮到您想要的位置即可）。 **If you already have Peacock installed, make sure to you have it updated to the latest version.** After you get these apps installed/updated, close Peacock for now and start LiveSplit if you haven't yet.

2. 右鍵點選主 LiveSplit 窗口，然後點選 `Edit Splits`。 根據您的喜好編輯分割名稱（`Segment Name`）。 點擊`插入上方/下方`以新增片段。 如果您願意，您可以在`Segment Times`中輸入您的預計時間。

3. 點擊 Splits Editor 上的 `ok`，然後右鍵點擊主 LiveSplit 視窗並選擇 `Save Splits` 以供將來使用。

4. 右鍵點選主 LiveSplit 窗口，然後點選 `編輯佈局`。 雙擊`Timer`，然後選擇`Game Time`作為計時方法。

5. 仍在 `編輯版面配置` 頁面上：點選 `+` 按鈕，然後點選 `控制`，再按一下 `Livesplit 伺服器`。

6. 點擊佈局編輯器上的 `ok`，然後右鍵點擊主 LiveSplit 視窗並選擇 `save layout` 以供將來使用。

7. Open `options.ini` in the Peacock folder and set `liveSplit = false` to be `liveSplit = true` instead to enable the livesplit integration (turned off by default), and adjust the other LiveSplit options as needed.

## 如何使用

（每次打開遊戲時都這樣做，順序很重要！ 確保在啟動 Peacock 之前啟動 LiveSplit 並啟動伺服器。）

1. 打開 LiveSplit

2. Right-click on the main LiveSplit window, then select `Control`, then `Start TCP Server`. If this button isn't there you are likely running an outdated version of LiveSplit, as this server was originally separate from the main LiveSplit download, please update to at least LiveSplit 1.8.29, released May 11, 2024.

3. 如果您想要變更正在運行的完整遊戲類別，請編輯 Peacock 資料夾中的 `options.ini` 文件，並將 `autoSplitterCampaign` 選項變更為 `trilogy`、`1`、`2` 或 `3`） Autosplitter 僅在您按順序進行所選活動時才會起作用。

4. 開啟安裝 Peacock 的資料夾，執行 `Start Server.cmd` 和 `PeacockPatcher.exe`。 You should see a message in the Peacock Server Window saying `LiveSplit initialized`.

5. 正常開始遊戲。

## 其他使用說明

-   無論分離器處於何種狀態，當您開始所選戰役中的第一個任務時，分離器都會完全重置並開始新的運作。 您不需要手動啟動或重設 LiveSplit 中的運行（透過按數字鍵盤鍵等）。

-   如果您開始的任務不是第一個任務、剛玩過的任務或完成剛剛玩過的任務後的下一個任務，它將停止計時器並停止追蹤時間，直到您重置回戰役中的第一個任務。

-   一旦您成功完成任務，分離器將自動分離（記錄時間並轉到下一個任務）。 但是，如果您多次重播相同的任務（所選戰役中的第一個任務除外），它將自動為您添加重置時間，即使您「完成」了該任務並且它分裂了（例如，如果您在最後一秒未能獲得 SA，只需重播該任務，它就會自動取消分裂並添加重置時間）。

-   在您完成或失敗任務後，它會在 Peacock 伺服器視窗中列印有關您剛剛嘗試的詳細計時信息，其中包含您剛剛嘗試的十分之一/百分之一秒的計時信息以及當前任務重置的總時間。

-   從 v4.5.0 開始，Peacock Autosplitter 現在預設進入一種模式，除非您以無聲殺手評級完成當前任務，否則不會記錄成功完成任務（分裂並允許移動到下一張地圖）。 如果您想在任何運行中使用自動分割器，請將 `options.ini` 中的 `autoSplitterForceSilentAssassin` 選項變更為 `false`。

-   對於想要參加每週 RTA SASO 完整遊戲比賽的人，您可以在 [racetime.gg](https://racetime.gg/hitman-3) 上註冊，然後在 `options.ini` 中設定 `autoSplitterRacetimegg = true`，以便訪問與 racetime.gg
