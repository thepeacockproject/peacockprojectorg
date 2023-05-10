---
title: Veelgestelde vragen / Probleemoplossing
---

## Probleemoplossing FAQ

### Wrong Game Version / Platform

-   Check the [Requirements](https://thepeacockproject.org/wiki/intel/requirements) section of this guide, make sure you have a supported game version and platform, etc.
    -   **Xbox Game Pass / Microsoft PC version of Hitman 3 is not supported (commonly asked)**.
    -   Check [Linux Setup Guide](https://thepeacockproject.org/wiki/guides/linux-setup) if on Linux.
-   Controleer dat je de laatste versie van Hitman 3 en Peacock hebt, oudere versies kunnen mogelijk niet ondersteund zijn.

### Try to Reconnect

-   Make sure Peacock Patcher is set to "Peacock Local" option and not "IOI Official" when you are trying to connect to Peacock.
-   Het kan enkele pogingen kosten om verbinding te maken met Peacock. Als je niet kan verbinden, probeer dan terug naar de Peacock Patcher applicatie te gaan, en klik dan op "Re-Patch" totdat er "Successfully patched ID" te zien is.
-   Als het spel al met de officiële servers is verbonden moet je eerst de verbinding van de officiële servers verbreken om te verbinden met Peacock. Om de verbinding te verbreken met de officiële servers, ga naar "Options" op het startmenu, dan naar "Privacy Policy", en klik dan op "Opt out". Als je dan weer verbinding maakt zou je met de Peacock server verbonden moeten zijn.
-   Je kunt dus ook op dezelfde manier de verbinding verbreken als je met Peacock verbonden bent, via de patcher de server naar "IOI Official" zetten, en dan weer verbinding maken om zo te verbinden met de officiële servers.
-   **If you still have trouble connecting, then continue to the next section below.**

### Connection Troubleshooting

-   As explained in the [What is Peacock](https://thepeacockproject.org/wiki/intel/what-is-peacock) page, **you need to be connected to the Internet, at least initially, to use Peacock**. This is to get past Steam / Epic verification. After connecting to Peacock the first time, you may disconnect from the Internet and stay connected to Peacock for the duration of your game session.
    -   If you have a phone with cellular data plan, you can use the phone as hotspot for your computer to connect to Internet.
-   Don't try to use Peacock if it's literally your first time playing the game. You need to connect to the official servers at least once before you can connect to Peacock. After you've connected to official servers at least once you no longer have to do so in the future in order to use Peacock.
-   Try running the `PeacockPatcher.exe` as admin.
-   Laat de optie "Use http instead of https" in de Peacock Patcher aangevinkt behalve als je Ghost Mode speelt.

-   Peacock gebruikt standaard Poort 80 vanuit jouw PC voor de Peacock server.

    -   Als het mogelijk is, controleer door welk proces Peacock gebruikt wordt door `netstat -ano | find ":80" | find "LISTEN"` in de terminal te typen, en dan het "Details" venster van Taakbeheer te controleren om het PID proces te vinden wat Poort 80 gebruikt.
    -   Als je Visual Studio gebruikt, kan je wat services hebben geïnstalleerd dat met Peacock stoort wat ook Poort 80 gebruikt. Om dit op te lossen:

        1. Druk de Windows- en R knop tegelijkertijd in
        2. Typ `services.msc` in het venster, en klik dan ok "ok"
        3. Controleer voor "W3SVC: World Wide Web Publishing Service" en "Web Deployment Agent Service" in de service manager
        4. Zet deze beide uit als ze zichtbaar zijn
        5. Probeer het nog een keer, als dat niet werkt, herstart jouw computer, en probeer het dan nog een keer

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

### Andere

-   Check [Peacock Unique Features](../intel/loadout-profiles-elp) page for info on how to set multiple loadouts per map or choose specific escalation levels with Peacock.
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

-   Is jouw vraag niet in de FAQ hierboven beantwoord? Vraag het in het `#help` kanaal van de Peacock Discord server (https://thepeacockproject.org/discord)
    -   Ben voorbereid om het volgende klaar te hebben:
        -   Schermafbeeldingen van de Peacock Server werkend in de terminal
        -   Schermafbeeldingen van de Peacock Patcher werkend
        -   Informatie over jouw besturingssysteem en spelversie
        -   Information on what is running on Port 80 (check [Connection Troubleshooting](faq/#connection-troubleshooting) above)
        -   Alle informatie verder relevant

## How Peacock Works FAQ

-   See [What is Peacock](what-is-peacock)

## Feature aanvraag FAQ

-   Voordat je vragen stelt over Ghost Mode, escalations, user contracts of elusive targets, controleer eerst de [Aangepaste Inhoud Pagina](https://thepeacockproject.org/wiki/custom-content) net als de [Ghost Mode Pagina](https://thepeacockproject.org/wiki/ghost-mode/).
-   Mod Compatability:
    -   Most mods are compatible with Peacock; there are only three kinds that aren't.
        -   If a mod edits contracts (missions, special assignments, etc.), it'll need a Peacock plugin to be compatible.
        -   If a mod edits the planning inventory (that is, changes the properties of starting locations, changes which items you can bring into missions, or edits the suits available to you), it will also need a plugin.
        -   Menu changes may also sometimes be incompatible, but should otherwise be fine. Other than those, mods should be compatible with Peacock without any effort on the part of the mod creator.
