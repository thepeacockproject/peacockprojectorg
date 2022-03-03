---
title: Knowledge Base
description: Details on what Peacock is, how to install it, how to use it, and more.
---

<div class="make_h2_smaller">

## What is Peacock?

<details><summary>Click to Expand</summary>
<p>

-   Peacock is essentially a Hitman server emulator that runs on your own PC.
-   Benefits of using Peacock include:
    -   **Obtain all unlocks immediately**
        -   Note: If it is your first time playing (on either Peacock or official servers), some exits will be locked. You will need to unlock Dubai exits ([need to unlock the elevators](https://youtu.be/IEQgRQyQRf8)), Dartmoor exits ([need to exit via bike at least once](https://youtu.be/AJtJZe9jEi8?t=151)), and Colorado exits ([need to use tornado exit at least once](https://youtu.be/3XKWHrKpXwk?t=140)). These exits are handled client-side.
    -   Play [custom](custom-content.mdx) or otherwise discontinued/ time limited content such as [Ghost Mode](https://thepeacockproject.org/wiki/ghost-mode), legacy escalations, elusive targets.
    -   Display leaderboards for other Peacock users
    -   Access Hitman's rating system without being connected to IOI's servers
        -   **Note: Peacock is not a fully offline experience.**
        -   Each time you start the game, you will initially need to be connected to the internet still, to pass Steam or Epic verification.
        -   After you have passed Steam/ Epic verification and have connected to Peacock, you are free to disconnect your internet if you like and you will stay connected to Peacock for the duration of your game session.
-   Trivia: Peacock is the name that the game uses in its source code for the mission "The Showstopper", which ushered in a new era of Hitman. Hence, the reason for the name "Peacock".

</p>
</details>

## Supported Games / Operating Systems

<details><summary>Click to Expand</summary>
<p>

**Supported Games / Platforms**

-   Hitman 2016 ([Steam](https://store.steampowered.com/app/236870/HITMAN/) / [Epic](https://www.epicgames.com/store/en-US/p/hitman))
-   Hitman 2 ([Steam](https://store.steampowered.com/app/863550/HITMAN_2/))
-   Hitman 3 ([Steam](https://store.steampowered.com/app/1659040/HITMAN_3/) / [Epic](https://www.epicgames.com/store/en-US/p/hitman-3)).

Any platform missing from the list above (**including Hitman 3 on Game Pass**) is not supported by Peacock!
Also note: Hitman 2016 / Hitman 2 are not as well supported as Hitman 3, there may be bugs.

**Supported Operating Systems**

-   For the server:
    -   A platform supported by Node.js, meaning Windows 8.1 or up, or a recent Linux/macOS/FreeBSD installation.
    -   We have alternatives available if you are unable to meet these requirements, please ask in the Discord.
-   For the patcher:
    -   Windows 7 or up
-   You can run the server on any machine that supports the Node.js version that Peacock targets, but the patcher must be run on the same machine as the game.

</p>
</details>

## How to Install / Use Peacock

<details>
<summary>Click to Expand</summary>

<p>

1. Join the Peacock Discord server (https://thepeacockproject.org/discord). You must have a 7 day or older Discord account and have proof of buying Hitman 2016/ Hitman 2/ Hitman 3 to join.

2. Go to the `#downloads` channel in the above Discord server and download the latest Peacock build.

3. Extract (unzip) files. Running the files from within the zipped folder will not work.

4. Open the unzipped `Peacock-vx.x.x` folder (where `x.x.x` stands for whatever the current Peacock version is), and then open the second `Peacock-vx.x.x` folder within as well. From this `...Peacock-vx.x.x\Peacock-vx.x.x` folder, run `Start Server.cmd`, then `PeacockPatcher.exe`. Then open Hitman as normal.

    - Note: If you are playing on Hitman 3, you will have to repeat steps 2-3 each time Hitman 3 receives a new update (more info below, in the "When/ How to Update Peacock" section). And for any of the three supported Hitman games, you will need to repeat step 4 every time you launch the game.. The game defaults back to the official servers otherwise.

</p>

</details>

## When / How to Update Peacock

<details>
<summary>Click to Expand</summary>

<p>

1. When you run `Start Server.cmd`, you may get an alert that Peacock is out of date, as [shown here](https://i.ibb.co/NtGMJjN/peacock-out-of-date.png).
2. Usually you will need to update Peacock only when there is a new game update, but stay tuned in the Peacock Discord's `#updates` and `#downloads` channels to be safe.
    - Note: Peacock may be temporarily unavailable after a game update, as it takes a few hours for the Peacock Patcher to be updated as well.
3. If there is a new Peacock update, go to the `#downloads` channel in the Peacock Discord to download the latest build.
4. Extract (unzip) files. Running the files from within the zipped folder will not work.
5. **Assuming you have used Peacock during the previous game update**, follow the instructions below to keep your loadouts and in-game savefiles (Otherwise, your loadouts will all default back to ICA19/coins/fiberwire, and your in-game save files will be lost).

    - Copy your old userdata and contractSessions folders (ex: `...Peacock-vx.x.x\Peacock-vx.x.x\userdata`) and (ex: `...Peacock-vx.x.x\Peacock-vx.x.x\contractSessions`) from your previous Peacock build, and paste it into your new Peacock build's main folder (`...Peacock-vy.y.y\Peacock-vy.y.y`), where `x.x.x` stands for the old Peacock version, and `y.y.y` stands for the new Peacock version. Replace any existing files in the new Peacock build's folder, if necessary.

        - Note that Peacock versions before v4.1.0 use the file convention `...Peacock-vx.x.x\assembled\userdata` and `...Peacock-vx.x.x\assembled\contractSessions`instead.

</p>

</details>

## General Peacock Use Tips

<details>
<summary>Click to Expand</summary>

<p>

-   It may take a few tries to connect to Peacock. If you can't connect, try going back to the Peacock Patcher application and clicking on "Re-patch" until the Peacock Patcher shows "Successfully patched ID".
-   If your game is already connected to the official servers, you may need to disconnect the game from official servers first to connect to Peacock. To disconnect from official servers, go to "Options" from the Hitman 3 main menu, then "Privacy Policy", then "Opt out". Then when you reconnect you should be on Peacock.

-   Similarly, you can go offline while connected to Peacock, then toggle the Peacock Patcher application to patch you to Official Servers, then go "online" again to connect to official servers.

-   To use 7 deadly sins items, make sure you have actually purchased the 7 deadly sins DLC. Then delete the `...Peacock-vx.x.x\Peacock-vx.x.x\userdata` folder, and restart the game.
-   To save multiple loadouts per map (loadout profiles): [Follow this tutorial](https://www.youtube.com/watch?v=ouD9QBSVHI0)
    -   Note: You should open Hitman with Peacock before following the steps in this tutorial. In addition, Peacock has received a new update, so now just go to `localhost` in your browser instead of `localhost/loadouts`. When you are on the `localhost` page, click on `Loadout Profiles` in the upper left navbar. Then proceed with the rest of the video tutorial.
-   In Game Saving is supported, but note that you can only use official server saves on the official servers version of the game, and Peacock saves on the Peacock version of the game.

-   Using Peacock will affect your official servers profile in very small ways.
    -   Due to the fact that we have not properly implemented some minor features like content/story spoiler warnings, it will change them all to the 'I have already played' state. Other than that, it shouldn't have any affect.
-   Note: If it is your first time playing (on either Peacock or official servers), some exits will be locked. You will need to unlock Dubai exits ([need to unlock the elevators](https://youtu.be/IEQgRQyQRf8)), Dartmoor exits ([need to exit via bike at least once](https://youtu.be/AJtJZe9jEi8?t=151)), and Colorado exits ([need to use tornado exit at least once](https://youtu.be/3XKWHrKpXwk?t=140)). These exits are handled client-side.

</p>
</details>

## Autosplitter Setup (For Full Game Speedruns)

<details>
<summary>Click to Expand</summary>

<p>

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

2. Download LiveSplit server component from here: https://github.com/LiveSplit/LiveSplit.Server/releases/tag/1.8.17

3. Unzip and place the two files that you just downloaded in the LiveSplit Server component zip into the Components folder inside the `LiveSplit` installation folder.

4. Start LiveSplit.

5. Right click on main Livesplit window, then click on `Edit Splits`. Edit your split names (`Segment Name`) to your liking. Click on `Insert Above / Below` to add new segments. If you like, you can enter your estimated times in `Segment Times`.

6. Click `ok` on the Splits Editor, then right click the main Livesplit window and select `save layout` for future use.

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

</p>
</details>

## For Additional Help / Troubleshooting

<p>

-   Ask in the Peacock Discord `#help` channel (https://thepeacockproject.org/discord)

</p>

</div>
