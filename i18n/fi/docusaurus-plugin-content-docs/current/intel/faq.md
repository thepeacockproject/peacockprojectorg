---
title: Frequently Asked Questions
---

## How to Get All Items

Peacock v6.1.0 introduced progression support, meaning you now can unlock items as you play. This is **enabled by default**, to emulate the experience of the official servers.

To disable progression and **immediately get all items**, set `enableMasteryProgression` in `options.ini` to `false`.

## Troubleshooting FAQ

### Before Troubleshooting

-   Check the [Requirements](./requirements.md) section of this guide, make sure you have a supported game version and platform, etc.
    -   **Microsoft Store version of Hitman 3 is not supported (commonly asked)**.
    -   Check [Linux Setup Guide](../guides/./linux-setup.md) if on Linux.
-   Make sure you have the latest versions of Hitman and Peacock, older versions may not be supported.

### Try to Reconnect

-   Make sure Peacock Patcher is set to "Peacock Local" option and not "IOI Official" when you are trying to connect to Peacock.
-   It may take a few tries to connect to Peacock. If you can't connect, try going back to the Peacock Patcher application and clicking on "Re-patch" until the Peacock Patcher shows "Successfully patched ID".
-   If your game is already connected to the official servers, you may need to disconnect the game from official servers first to connect to Peacock. To disconnect from official servers, go to "Options" from the Hitman 3 main menu, then "Privacy Policy", then "Opt out". Then when you reconnect you should be on Peacock.
-   To return to Official servers, you can go offline while connected to Peacock, then toggle the Peacock Patcher application to patch you to Official Servers, then go "online" again to connect to official servers.
-   **If you still have trouble connecting, then continue to the next section below.**

### Connection Issues

-   As explained in the [What is Peacock](./what-is-peacock.md) page, **you need to be connected to the Internet, at least initially, to use Peacock**. This is to get past Steam / Epic verification. After connecting to Peacock the first time, you may disconnect from the Internet and stay connected to Peacock for the duration of your game session.
    -   If you have a phone with cellular data plan, you can use the phone as hotspot for your computer to connect to Internet.
-   Don't try to use Peacock if it's literally your first time playing the game. You need to connect to the official servers at least once before you can connect to Peacock. After you've connected to official servers at least once you no longer have to do so in the future in order to use Peacock.
-   Try running the `Start Server.cmd` as admin.
-   Keep the option "Use http instead of https" in Peacock patcher ticked unless you are playing Ghost Mode.

#### Port In Use

If you're getting an error that looks like this:

![The error message shown when Peacock tries to use a port that's in use](/img/wiki/port_in_use.png)

The error message for this issue will be something along the lines of "failed to bind the server to port X".

Check [this guide](../troubleshooting/fix-port-in-use.md) for an explanation and instructions on how to fix it.

## Muut

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
