---
title: Frequently Asked Questions
---

## Troubleshooting FAQ

### Wrong Game Version / Platform

-   Check the [Requirements](https://thepeacockproject.org/wiki/intel/requirements) section of this guide, make sure you have a supported game version and platform, etc.
    -   **Xbox Game Pass / Microsoft PC version of Hitman 3 is not supported (commonly asked)**.
    -   Check [Linux Setup Guide](https://thepeacockproject.org/wiki/guides/linux-setup) if on Linux.
-   Make sure you have the latest versions of Hitman and Peacock, older versions may not be supported.

### Try to Reconnect

-   Make sure Peacock Patcher is set to "Peacock Local" option and not "IOI Official" when you are trying to connect to Peacock.
-   It may take a few tries to connect to Peacock. If you can't connect, try going back to the Peacock Patcher application and clicking on "Re-patch" until the Peacock Patcher shows "Successfully patched ID".
-   If your game is already connected to the official servers, you may need to disconnect the game from official servers first to connect to Peacock. To disconnect from official servers, go to "Options" from the Hitman 3 main menu, then "Privacy Policy", then "Opt out". Then when you reconnect you should be on Peacock.
-   To return to Official servers, you can go offline while connected to Peacock, then toggle the Peacock Patcher application to patch you to Official Servers, then go "online" again to connect to official servers.
-   **If you still have trouble connecting, then continue to the next section below.**

### Connection Troubleshooting

-   As explained in the [What is Peacock](https://thepeacockproject.org/wiki/intel/what-is-peacock) page, **you need to be connected to the Internet, at least initially, to use Peacock**. This is to get past Steam / Epic verification. After connecting to Peacock the first time, you may disconnect from the Internet and stay connected to Peacock for the duration of your game session.
    -   If you have a phone with cellular data plan, you can use the phone as hotspot for your computer to connect to Internet.
-   Don't try to use Peacock if it's literally your first time playing the game. You need to connect to the official servers at least once before you can connect to Peacock. After you've connected to official servers at least once you no longer have to do so in the future in order to use Peacock.
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

    -   Here's how to change the port Peacock uses, if you don't want to stop the process on Port 80:
        -   In the instructions below, please substitute `PORTNUMBER` with a port that is not currently running on your PC, e.g. `8080`, `6969`, `3000`, etc.
        -   Change `Start Server.cmd` to be as follows:
        ```
        @echo off
        SET PORT=PORTNUMBER
        .\nodedist\node.exe chunk0.js
        PAUSE
        ```
        -   Type `localhost:PORTNUMBER` into the server window, [as shown here](https://media.discordapp.net/attachments/839264571990343681/992523717869568050/unknown.png)

### Missing Items / Maps

-   If you have recently purchased a DLC and you aren't seeing it in Peacock, make sure you have actually purchased said DLC. Then delete the `userdata` folder, and restart the server.

    -   If you have trouble finding the `userdata` folder, [check this example image](https://media.discordapp.net/attachments/833505136290299935/991071183732613200/unknown.png).
-   Starting from v6, Peacock should be able to automatically get your latest DLCs. So no need to delete the userdata folder anymore.

### Muut

-   In Game Saving is supported, and as of Peacock v5.0.1 you can load official server saves in Peacock.
-   Challenges are still in development and may be buggy. Report issues in the `#help` forum in Peacock discord.
-   Using Peacock will affect your official servers profile in very small ways.
    -   Due to the fact that we have not properly implemented some minor features like content/story spoiler warnings, it will change them all to the 'I have already played' state. Other than that, it shouldn't have any affect.
-   Note: If it is your first time playing (on either Peacock or official servers), some exits will be locked. You will need to unlock Dubai exits ([need to unlock the elevators](https://youtu.be/IEQgRQyQRf8)), Dartmoor exits ([need to exit via bike at least once](https://youtu.be/AJtJZe9jEi8?t=151)), and Colorado exits ([need to use tornado exit at least once](https://youtu.be/3XKWHrKpXwk?t=140)). These exits are handled client-side.
-   Check [Peacock Unique Features](../intel/loadout-profiles-elp) page for info on how to set multiple loadouts per map or choose specific escalation levels with Peacock.

### Request Tech Support

-   Question not answered in FAQ above? Ask in the Peacock Discord `#help` channel (https://thepeacockproject.org/discord)
    -   Be prepared to provide:
        -   Screenshots of Peacock Server running in the terminal
        -   Screenshots of Peacock Patcher running
        -   Information on your operating system and game version
        -   Information on what is running on Port 80 (check [Connection Troubleshooting](faq/#connection-troubleshooting) above)
        -   Any further pertinent information

## Feature Request FAQ

-   To be very clear: Progression (unlocking items as you go) is currently not supported, although planned for the future. Peacock will give you all unlocks right away (that you are eligible for based on DLC you have purchased).
-   In-game challenges are mostly done as of Peacock v6.0.0 but some might not be working. Please report it if you come across one.
-   Before asking any questions about Ghost Mode, escalations, user contracts, elusive targets, please check the [Custom Content Page](https://thepeacockproject.org/wiki/custom-content) as well as the [Ghost Mode Page](https://thepeacockproject.org/wiki/ghost-mode).
-   Mod Compatability:
    -   Most mods are compatible with Peacock; there are only three kinds that aren't.
        -   If a mod edits contracts (missions, special assignments, etc.), it'll need a Peacock plugin to be compatible.
        -   If a mod edits the planning inventory (that is, changes the properties of starting locations, changes which items you can bring into missions, or edits the suits available to you), it will also need a plugin.
        -   Menu changes may also sometimes be incompatible, but should otherwise be fine. Other than those, mods should be compatible with Peacock without any effort on the part of the mod creator.
