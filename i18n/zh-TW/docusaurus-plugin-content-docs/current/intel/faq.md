---
title: 常見問題
---

## 如何獲得所有物品

Peacock v6.1.0 引入了進度支持，這意味著你現在可以在遊戲過程中解鎖物品。 此功能**預設為啟用**，以模擬官方伺服器的體驗。

若要停用進度並**立即獲得所有物品**，請在 `options.ini` 中將 `enableMasteryProgression` 設定為 `false`。

## 故障排除常見問題解答

### 故障排除前

-   請查看本指南的[要求](./requirements.md)部分，確保您擁有受支援的遊戲版本和平台等。
    -   **微軟商店版《Hitman 3》不支援（常見問題）**。
    -   如果您使用的是 Linux 系統，請查看[Linux 設定指南](../guides/./linux-setup.md)。
-   請確保您擁有最新版本的《Hitman》和 Peacock，舊版本可能不受支援。

### 嘗試重新連線

-   當您嘗試連結到 Peacock 時，請確保 Peacock Patcher 設定為「Peacock Local」選項，而不是「IOI Official」選項。
-   可能需要嘗試幾次才能連結到 Peacock。 如果無法連結，請嘗試返回 Peacock Patcher 應用程式並點擊「重新修補」，直到 Peacock Patcher 顯示「成功修補 ID」。
-   如果您的遊戲已經連結到官方伺服器，您可能需要先中斷遊戲與官方伺服器的連結，才能連結到 Peacock。 要斷開與官方伺服器的連結，請從 Hitman 3 主選單轉到「選項」，然後選擇「隱私權政策」，再選擇「退出」。 然後當你重新連線後，你應該就能造訪 Peacock 了。
-   要返回官方伺服器，您可以先在連結到 Peacock 的情況下離線，然後切換 Peacock Patcher 應用程式將您連結到官方伺服器，然後再「上線」連結到官方伺服器。
-   **如果連結仍然有問題，請繼續閱讀下面的下一部分。**

### 連結問題

-   正如「[什麼是 Peacock](./what-is-peacock.md)」頁面中所述，**要使用 Peacock，您至少在最初階段需要連結到互聯網**。 This is to get past Steam / Epic verification. After connecting to Peacock the first time, you may disconnect from the Internet and stay connected to Peacock for the duration of your game session.
    -   If you have a phone with cellular data plan, you can use the phone as hotspot for your computer to connect to Internet.
-   Don't try to use Peacock if it's literally your first time playing the game. You need to connect to the official servers at least once before you can connect to Peacock. After you've connected to official servers at least once you no longer have to do so in the future in order to use Peacock.
-   Try running the `PeacockPatcher.exe` as admin.
-   Keep the option "Use http instead of https" in Peacock patcher ticked unless you are playing Ghost Mode.

#### Port In Use

If you're getting an error that looks like this:

![The error message shown when Peacock tries to use a port that's in use](/img/wiki/port_in_use.png)

The error message for this issue will be something along the lines of "failed to bind the server to port X".

Check [this guide](../troubleshooting/fix-port-in-use.md) for an explanation and instructions on how to fix it.

## 其他

-   Check [Peacock Unique Features](../intel/loadout-profiles-elp.md) page for info on how to set multiple loadouts per map or choose specific escalation levels with Peacock.
-   Default Suits - If you tick `getDefaultSuits = true` in your `options.ini` file in your Peacock Install folder, please note the following behavior:
    -   Any discussion for "default suits" below refers to the version of the default suit **without gloves** - whichever version of the suit you normally would use for that level when starting it up for the first time ever.
    -   Some Hitman 2 and Hitman 3 default suits are not usable in all maps in the vanilla game. This can be fixed using https://www.nexusmods.com/hitman3/mods/401/
    -   If you choose not to use the above mod, then note the following:
        -   Season 1 default suits (e.g. Summer Suit from Marrakesh): Works on all maps
        -   Season 2 default suits (e.g. Casual Tourist from Santa Fortuna): Works on Season 2 and 3 Maps
            -   New York and Maldives (Haven) are included in Season 2
        -   Season 1 default suits (e.g. Neon City Suit from Chongqing): Works on Season 3 Maps Only
        -   Ambrose Island is outside of the Season system so to speak, Ambrose Default suit (Guerilla Wetsuit) is usable on all maps, and all maps' Default Suits can be used in Ambrose

### Request Tech Support

-   Question not answered in FAQ above? Ask in the Peacock Discord `#help` channel (https://thepeacockproject.org/discord)
    -   Close the Peacock Server. Then run `Tools.cmd`, and press enter.
    -   Be prepared to provide the `DEBUG_PROFILE.zip` you'll find in the Peacock directory after that.

## How Peacock Works FAQ

-   See [What is Peacock](./what-is-peacock.md)
    -   See above link for questions on Freelancer integration with Peacock, whether or not you need Internet to use Peacock, or any other general questions on how Peacock works

## Feature Request FAQ

-   Before asking any questions about Ghost Mode, escalations, user contracts, elusive targets, please check the [Custom Content Page](.././custom-content.md) as well as the [Ghost Mode Page](.././ghost-mode.md).
-   Mod compatibility: almost all mods are compatible with Peacock without extra work, including contract and unlockable mods. Menu changes may sometimes be incompatible, but should usually be fine.

## Piracy FAQ
-   We do not support pirated games.
-   Why though?
    -   IOI is aware that Peacock exists and is not hostile towards the project, supporting piracy would be the quickest way to change that and get the project taken down, erasing over 3 years of work on the project.
    -   Peacock exists, because we enjoy the WoA trilogy games, and want to preserve them, we have little reason to support anything that could significantly hurt IOI financially.
