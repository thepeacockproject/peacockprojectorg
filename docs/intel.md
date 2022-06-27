---
title: Knowledge Base
description: Details on what Peacock is, how to install it, how to use it, and more.
---

<div class="make_h2_smaller">

## What is Peacock?

<p>
<details>
<summary>Click to Expand</summary>

-   Peacock is essentially a Hitman server emulator that runs on your own PC.
-   Benefits of using Peacock include:
    -   **Obtain unlocks without grinding mastery levels**
        -   You will only have access to DLC items if you have purchased said DLC. Piracy is not condoned.
        -   **Unlocking items as you go, as well as completing in-game challenges is not supported at the moment**, although it is planned to be added in the future.
        -   If it is your first time playing (on either Peacock or official servers), some exits will be locked. You will need to unlock Dubai exits ([need to unlock the elevators](https://youtu.be/IEQgRQyQRf8)), Dartmoor exits ([need to exit via bike at least once](https://youtu.be/AJtJZe9jEi8?t=151)), and Colorado exits ([need to use tornado exit at least once](https://youtu.be/3XKWHrKpXwk?t=140)). These exits are handled client-side.
    -   Play [custom](custom-content.mdx) or otherwise discontinued/ time limited content such as [Ghost Mode](https://thepeacockproject.org/wiki/ghost-mode), legacy escalations, elusive targets.
    -   Display leaderboards for other Peacock users
    -   Access Hitman's rating system without being connected to IOI's servers
        -   **Note: Peacock is not a fully offline experience.**
        -   Each time you start the game, you will initially need to be connected to the internet still, to pass Steam or Epic verification.
        -   After you have passed Steam/ Epic verification and have connected to Peacock, you are free to disconnect your internet if you like and you will stay connected to Peacock for the duration of your game session.
-   Trivia: Peacock is the name that the game uses in its source code for the mission "The Showstopper", which ushered in a new era of Hitman. Hence, the reason for the name "Peacock".

</details>
</p>

## What do I need to run Peacock?

<p>
<details>
<summary>Click to Expand</summary>

**Supported Games / Platforms**

-   Hitman 2016 ([Steam](https://store.steampowered.com/app/236870/HITMAN/) / [Epic](https://www.epicgames.com/store/en-US/p/hitman))
-   Hitman Sniper Assassin ([Steam Depot](https://steamdb.info/app/783780/))
-   Hitman 2 ([Steam](https://store.steampowered.com/app/863550/HITMAN_2/))
-   Hitman 3 ([Steam](https://store.steampowered.com/app/1659040/HITMAN_3/) / [Epic](https://www.epicgames.com/store/en-US/p/hitman-3)).

**Not supported**:

-   Any other platform not listed in "Supported" section, such as console platforms, are not supported
-   Demo versions of Hitman 3 are not supported
    -   Note: This does not apply if you own the Hitman 1 or 2 access passes DLC within Hitman 3. Despite having Hitman 3 demo version, you will be able to access those Hitman 1 or 2 levels within Hitman 3.
-   Game Pass or Microsoft PC edition of Hitman 3 is not supported
-   **Any cracked or pirated version of Hitman 1-3 is not supported, and you will be banned from the Peacock Discord upon asking about how to use any pirated or cracked version.**

**Supported Operating Systems**

-   For the server:
    -   A platform supported by Node.js, meaning Windows 8.1 or up, or a recent Linux/macOS/FreeBSD installation.
    -   We have alternatives available if you are unable to meet these requirements, please ask in the Discord.
    -   Check the Linux NodeJS install guide: https://thepeacockproject.org/wiki/guides/linux-setup/
-   For the patcher:
    -   Windows 7 or up
-   You can run the server on any machine that supports the Node.js version that Peacock targets, but the patcher must be run on the same machine as the game.

**OS Summary: Windows 10 is probably the best supported operating system, but Windows 7 and Linux should work as well, with additional troubleshooting. Ask in the [Discord](https://thepeacockproject.org/discord) if in doubt.**

</details>
</p>

## How to Install / Use Peacock

<p>
<details>
<summary>Click to Expand</summary>

1. Join the Peacock Discord server (https://thepeacockproject.org/discord). You must have a 7 day or older Discord account to join.

2. Go to the `#downloads` channel in the above Discord server and download the latest Peacock build.

3. Extract (unzip) files. Running the files from within the zipped folder will not work.

4. Navigate to where you installed Peacock, and run the files `Start Server.cmd` and `PeacockPatcher.exe`.

    - Depending on how you installed Peacock, you may need to open two folders to find these files, [as shown in this example image](https://media.discordapp.net/attachments/833505136290299935/991068578579107870/unknown.png).

    - Note: If you are playing on Hitman 3, you will have to repeat steps 2-3 each time Hitman 3 receives a new update (more info below, in the "When/ How to Update Peacock" section). And for any of the three supported Hitman games, you will need to repeat step 4 every time you launch the game. The game defaults back to the official servers otherwise.

5. Now open the game as normal.

</details>
</p>

## When / How to Update Peacock

<p>
<details>
<summary>Click to Expand</summary>

1. When you run `Start Server.cmd`, you may get an alert that Peacock is out of date, as [shown in this example image](https://i.ibb.co/NtGMJjN/peacock-out-of-date.png).
2. Usually you will need to update Peacock only when there is a new game update, but stay tuned in the Peacock Discord's `#updates` and `#downloads` channels to be safe.
    - Note: Peacock may be temporarily unavailable after a game update, as it takes a few hours for the Peacock Patcher to be updated as well.
3. If there is a new Peacock update, go to the `#downloads` channel in the Peacock Discord to download the latest build.
4. Extract (unzip) files. Running the files from within the zipped folder will not work.
5. **Assuming you have used Peacock during the previous game update**, follow the instructions below to keep your loadouts and in-game savefiles (Otherwise, your loadouts will all default back to ICA19/coins/fiberwire, and your in-game save files will be lost).

    - Copy your old `userdata` and `contractSessions` folders from your previous Peacock Install folder, and paste it into your new Peacock Install folder. Replace any existing files in the new Peacock build's folder, if necessary.
    - Check [this example image](https://media.discordapp.net/attachments/833505136290299935/991070487654334464/unknown.png) if you have trouble finding the `userdata` and `contractSessions` folders.

</details>
</p>

## Loadout Profiles / Escalation Level Picker

<p>
<details>
<summary>Click to Expand</summary>

-   To save multiple loadouts per map (loadout profiles): [Follow this tutorial](https://www.youtube.com/watch?v=ouD9QBSVHI0)
    -   Note: You should open Hitman with Peacock before following the steps in this tutorial. In addition, Peacock has received a new update, so now just go to `localhost` or `127.0.0.1` in your browser instead of `localhost/loadouts`. When you are on the `localhost` page, click on `Loadout Profiles` in the upper left navbar. Then proceed with the rest of the video tutorial.
-   To pick specific escalation levels, run `Start Server.cmd` from your Peacock Install folder, then open up a web browser and go to `localhost` or `127.0.0.1`. Go to `Escalation Level Picker` and proceed from there following instructions on screen.
    -   If you have installed the LegacyEscalations plugin in the past, you may have to reinstall it to make the escalation level picker work.

</details>
</p>

## General Peacock Use Tips

<p>
<details>
<summary>Click to Expand</summary>

-   It may take a few tries to connect to Peacock. If you can't connect, try going back to the Peacock Patcher application and clicking on "Re-patch" until the Peacock Patcher shows "Successfully patched ID".
-   If your game is already connected to the official servers, you may need to disconnect the game from official servers first to connect to Peacock. To disconnect from official servers, go to "Options" from the Hitman 3 main menu, then "Privacy Policy", then "Opt out". Then when you reconnect you should be on Peacock.

-   Similarly, you can go offline while connected to Peacock, then toggle the Peacock Patcher application to patch you to Official Servers, then go "online" again to connect to official servers.

-   To use 7 deadly sins items, make sure you have actually purchased the 7 deadly sins DLC. Then delete the `userdata` folder, and restart the game.

    -   If you have trouble finding the `userdata` folder, [check this example image](https://media.discordapp.net/attachments/833505136290299935/991071183732613200/unknown.png).

-   In Game Saving is supported, but note that you can only use official server saves on the official servers version of the game, and Peacock saves on the Peacock version of the game.

-   Using Peacock will affect your official servers profile in very small ways.
    -   Due to the fact that we have not properly implemented some minor features like content/story spoiler warnings, it will change them all to the 'I have already played' state. Other than that, it shouldn't have any affect.
-   Note: If it is your first time playing (on either Peacock or official servers), some exits will be locked. You will need to unlock Dubai exits ([need to unlock the elevators](https://youtu.be/IEQgRQyQRf8)), Dartmoor exits ([need to exit via bike at least once](https://youtu.be/AJtJZe9jEi8?t=151)), and Colorado exits ([need to use tornado exit at least once](https://youtu.be/3XKWHrKpXwk?t=140)). These exits are handled client-side.

</details>
</p>

## Autosplitter Setup (For Full Game Speedruns)

<p>
<details>
<summary>Click to Expand</summary>

_Guide written originally by [Fusha](https://www.speedrun.com/user/Fusha)_

### Specifications

(see "How to Use" and "Other Usage Notes" below as well)

-   100% accurate to how runs are timed for verification purposes, unlike the [Official Servers Autosplitter](https://www.speedrun.com/hitman_3/guide/kbydm).

-   Several miscellaneous glitches like the splitter not working correctly from "Outside" Romania starting location are fixed.

-   Splits fully automatically, based on which level you start on and which full game category you are playing. Starting and stopping the splitter (by pressing numpad keys etc) is not needed.

-   Works on both Steam and Epic versions of Hitman 3 unlike the Official Servers Autosplitter (which is Epic only).

-   Obviously this only works on [Peacock](https://thepeacockproject.org/wiki/intel/), if you are playing on official servers for some reason you should use one of the [other two Livesplit Guides](https://www.speedrun.com/hitman_3/guides).

### Installation

1. Install [Peacock](https://thepeacockproject.org/wiki/intel/) and [LiveSplit](https://livesplit.org/downloads/) if you don't have either of them installed (just unzip them wherever you want). **If you already have Peacock installed, make sure to you have it updated to the latest version.** After you get these apps installed/updated, close them for now.

2. Download LiveSplit server component from here: https://github.com/LiveSplit/LiveSplit.Server/releases/latest

3. Unzip and place the two files that you just downloaded in the LiveSplit Server component zip into the Components folder inside the `LiveSplit` installation folder.

4. Start LiveSplit.

5. Right click on main Livesplit window, then click on `Edit Splits`. Edit your split names (`Segment Name`) to your liking. Click on `Insert Above / Below` to add new segments. If you like, you can enter your estimated times in `Segment Times`.

6. Click `ok` on the Splits Editor, then right click the main Livesplit window and select `save splits` for future use.

7. Right click on main Livesplit window, then click on `Edit Layout`. Double click on `Timer`, then select `Game Time` for timing method.

8. While still on the `Edit Layout` page: Click `+` button, then `Control`, then `Livesplit Server`.

9. Click `ok` on the Layout Editor, then right click the main Livesplit window and select `save layout` for future use.

### How to Use

(Do each time you open the game, order is important! Make sure to start LiveSplit and start the server before you start Peacock).

1. Open LiveSplit

2. Right click on the main LiveSplit window, then select `Control`, then `Start Server`.

3. If you would like to change what full game category you are running, edit `options.ini` file inside the Peacock folder and change the `autoSplitterCampaign` option to either `trilogy`, `1`, `2`, or `3` depending on which campaign you want to run (The autosplitter is set to `trilogy` by default). The autosplitter will only work so long as you play the selected campaign, in order.

4. Open the folder where you have installed Peacock, and run `Start Server.cmd` and `PeacockPatcher.exe`.

5. Start game as normal.

### Other Usage Notes

-   The splitter will always fully reset and start a new run as soon as you start the first mission in the selected campaign, no matter what other state it is in. You do not need to start or reset the run in LiveSplit manually (by pressing numpad keys etc).

-   If you start a mission that is not the first mission, the one you just played, or the next mission after completing the mission you just played, it will stop the timer and stop tracking times until you reset back to the first mission in the campaign.

-   The splitter will automatically split (record time and move to next mission) as soon as you successfully complete a mission. However, if you replay the same mission multiple times (other than the first one in the selected campaign), it will automatically add reset times together for you, even if you "complete" the mission and it splits (for example if you failed to get SA at the last second, just replay the mission and it will auto-unsplit and add the reset time).

-   After you complete or fail a mission, it will print detailed timing info about the attempt you just made into the Peacock server window, with timing information down to tenths/hundredths of seconds for the attempt you just made as well as detailing the total amount of time with resets on the current mission.

-   As of v4.5.0, Peacock Autosplitter now defaults into a mode which will not log a successful mission completion (splitting and allow moving to next map) unless you complete the current mission with Silent Assassin rating. If you want to use the auto splitter for any% runs, change the `autoSplitterForceSilentAssassin` option in `options.ini` to be `false`.

</details>
</p>

## For Additional Help / Troubleshooting

### FAQ

<p>

<details>
<summary>Click to Expand</summary>

**Troubleshooting FAQ**

-   Check the "What do I need to run Peacock" section of this guide, make sure you have a supported game version and platform, etc.
-   Check "General Peacock Use Tips" section of this guide for instructions on how to disconnect and reconnect to the server. Sometimes it can take a few tries to connect.
-   Make sure you have the latest versions of Hitman 3 and Peacock, older versions may not be supported.
-   Try running the `Start Server.cmd` as admin.
-   Keep the option "Use http instead of https" in Peacock patcher ticked unless you are playing Ghost Mode.

-   Peacock by default uses Port 80 on your PC for the Peacock server.

    -   If possible, check whatever process is currently using Peacock by typing `netstat -ano | find ":80" | find "LISTEN"` into your terminal, and then checking "Details" tab of Task Manager to find the process based on PID of whatever is on Port 80.
    -   If you use Visual Studio, you may have installed some services that interfere with Peacock by also running on Port 80. To fix:

        1. Press the Windows key and R at the same time
        2. Type services.msc in the popup box, then hit ok
        3. Check for W3SVC: World Wide Web Publishing Service and Web Deployment Agent Service in the service manager
        4. Disable both if present
        5. Try again, if it doesn't work, restart your computer, then try once more

    -   If for some reason you can't stand the idea of stopping whatever process you already have going on Port 80, edit your `Start Server.cmd` file to to start the port on another line, [like shown in this image](https://media.discordapp.net/attachments/839264571990343681/985885230634242048/unknown.png). Make sure to enter `127.0.0.1:PORTNUMBER` into your Peacock Patcher "Server Address" input as well, with `PORTNUMBER` standing in for whatever port you typed into `Start Server.cmd`.

**Feature Request FAQ**

-   To be very clear: Completing challenges and normal progression are currently not supported, although planned for the future. Peacock will give you all unlocks right away (that you are eligible for based on DLC you have purchased).
-   Before asking any questions about Ghost Mode, escalations, user contracts, elusive targets, please check the [Custom Content Page](https://thepeacockproject.org/wiki/custom-content).
-   Peacock is not responsible for any compatibility issues between any third party game modifications and Peacock.
    -   You can consider asking mod creators to add a plugin functionality to their mod to make it work with Peacock, as was done with Sarajevo Six mod, for instance.

</details>

-   Question not answered in FAQ above? Ask in the Peacock Discord `#help` channel (https://thepeacockproject.org/discord)
    -   Be prepared to provide:
        -   Screenshots of Peacock Server running in the terminal
        -   Screenshots of Peacock Patcher running
        -   Information on your operating system and game version
        -   Information on what is running on Port 80 (check FAQ above)
        -   Any further pertinent information

</p>

</div>
