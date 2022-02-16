---
title: Knowledge Base
description: Details on what Peacock is, how to install it, how to use it, and more.
---

<div class="knowlegebase_h2">

## What is Peacock?

<details><summary>Click to Expand</summary>
<p>

-   Peacock is essentially a Hitman server emulator that runs on your own PC.
-   Benefits of using Peacock include:
    -   **Obtain all unlocks immediately**
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
5. **Assuming you have used Peacock during the previous game update**, follow the instructions below to keep your loadouts and in-game savefiles (your loadouts will all default back to ICA19/coins/fiberwire, and your in-game save files will be lost otherwise).

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

</p>
</details>

## For Additional Help / Troubleshooting

<p>

-   Ask in the Peacock Discord `#help` channel (https://thepeacockproject.org/discord)

</p>

</div>
