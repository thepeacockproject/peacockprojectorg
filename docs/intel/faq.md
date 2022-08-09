---
title: Frequently Asked Questions / Troubleshooting
---

## General Peacock Use Tips

-   It may take a few tries to connect to Peacock. If you can't connect, try going back to the Peacock Patcher application and clicking on "Re-patch" until the Peacock Patcher shows "Successfully patched ID".
-   If your game is already connected to the official servers, you may need to disconnect the game from official servers first to connect to Peacock. To disconnect from official servers, go to "Options" from the Hitman 3 main menu, then "Privacy Policy", then "Opt out". Then when you reconnect you should be on Peacock.

-   Similarly, you can go offline while connected to Peacock, then toggle the Peacock Patcher application to patch you to Official Servers, then go "online" again to connect to official servers.

-   To use 7 deadly sins items, make sure you have actually purchased the 7 deadly sins DLC. Then delete the `userdata` folder, and restart the game.

    -   If you have trouble finding the `userdata` folder, [check this example image](https://media.discordapp.net/attachments/833505136290299935/991071183732613200/unknown.png).

-   In Game Saving is supported, and as of Peacock v5.0.1 you can load official server saves in Peacock.

-   Using Peacock will affect your official servers profile in very small ways.
    -   Due to the fact that we have not properly implemented some minor features like content/story spoiler warnings, it will change them all to the 'I have already played' state. Other than that, it shouldn't have any affect.
-   Note: If it is your first time playing (on either Peacock or official servers), some exits will be locked. You will need to unlock Dubai exits ([need to unlock the elevators](https://youtu.be/IEQgRQyQRf8)), Dartmoor exits ([need to exit via bike at least once](https://youtu.be/AJtJZe9jEi8?t=151)), and Colorado exits ([need to use tornado exit at least once](https://youtu.be/3XKWHrKpXwk?t=140)). These exits are handled client-side.

### Troubleshooting FAQ

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

    -   If for some reason you can't stand the idea of stopping whatever process you already have going on Port 80, edit your `Start Server.cmd` file to start the port on another line. Make sure to enter `127.0.0.1:PORTNUMBER` into your Peacock Patcher "Server Address" input as well, with `PORTNUMBER` standing in for whatever port you typed into `Start Server.cmd`.
        -   Refer to [this example image](https://media.discordapp.net/attachments/839264571990343681/985885230634242048/unknown.png) for what to write in the `Start Server.cmd`.
        -   Refer to [this example image](https://media.discordapp.net/attachments/839264571990343681/992523717869568050/unknown.png) for what to type into the Peacock Patcher.

-   Question not answered in FAQ above? Ask in the Peacock Discord `#help` channel (https://thepeacockproject.org/discord)
    -   Be prepared to provide:
        -   Screenshots of Peacock Server running in the terminal
        -   Screenshots of Peacock Patcher running
        -   Information on your operating system and game version
        -   Information on what is running on Port 80 (check FAQ above)
        -   Any further pertinent information

### Feature Request FAQ

-   To be very clear: Progression (unlocking items as you go) is currently not supported, although planned for the future. Peacock will give you all unlocks right away (that you are eligible for based on DLC you have purchased).
-   In-game challenges are actively being implemented as of Peacock v5.0.1.
-   Before asking any questions about Ghost Mode, escalations, user contracts, elusive targets, please check the [Custom Content Page](https://thepeacockproject.org/wiki/custom-content) as well as the [Ghost Mode Page](https://thepeacockproject.org/wiki/ghost-mode/).
-   Peacock is not responsible for any compatibility issues between any third party game modifications and Peacock.
    -   You can consider asking mod creators to add a plugin functionality to their mod to make it work with Peacock, as was done with Sarajevo Six mod, for instance.
    -   As of Peacock v.5.0.1, mod compatibility is greatly increased as Repo mods (typically mods that alter inventory item properties) are now supported.
