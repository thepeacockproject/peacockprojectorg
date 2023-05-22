---
title: Veelgestelde vragen / Probleemoplossing
---

## Probleemoplossing FAQ

### Wrong Game Version / Platform

-   Check the [Requirements](./requirements.md) section of this guide, make sure you have a supported game version and platform, etc.
    -   **Xbox Game Pass / Microsoft PC version of Hitman 3 is not supported (commonly asked)**.
    -   Check [Linux Setup Guide](../guides/./linux-setup.md) if on Linux.
-   Controleer dat je de laatste versie van Hitman 3 en Peacock hebt, oudere versies kunnen mogelijk niet ondersteund zijn.

### Try to Reconnect

-   Make sure Peacock Patcher is set to "Peacock Local" option and not "IOI Official" when you are trying to connect to Peacock.
-   Het kan enkele pogingen kosten om verbinding te maken met Peacock. Als je niet kan verbinden, probeer dan terug naar de Peacock Patcher applicatie te gaan, en klik dan op "Re-Patch" totdat er "Successfully patched ID" te zien is.
-   Als het spel al met de officiële servers is verbonden moet je eerst de verbinding van de officiële servers verbreken om te verbinden met Peacock. Om de verbinding te verbreken met de officiële servers, ga naar "Options" op het startmenu, dan naar "Privacy Policy", en klik dan op "Opt out". Als je dan weer verbinding maakt zou je met de Peacock server verbonden moeten zijn.
-   Je kunt dus ook op dezelfde manier de verbinding verbreken als je met Peacock verbonden bent, via de patcher de server naar "IOI Official" zetten, en dan weer verbinding maken om zo te verbinden met de officiële servers.
-   **If you still have trouble connecting, then continue to the next section below.**

### Connection Troubleshooting

-   As explained in the [What is Peacock](./what-is-peacock.md) page, **you need to be connected to the Internet, at least initially, to use Peacock**. This is to get past Steam / Epic verification. After connecting to Peacock the first time, you may disconnect from the Internet and stay connected to Peacock for the duration of your game session.
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
        -   Type `localhost:PORTNUMBER` or `127.0.0.1:PORTNUMBER` into the server window, as shown here: ![](/img/patcher_port.png)

### Missing Items / Maps

-   Starting from v6, Peacock should be able to automatically detect when you obtain a new DLC, and give you access to those new items / maps

### Andere

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

-   Is jouw vraag niet in de FAQ hierboven beantwoord? Vraag het in het `#help` kanaal van de Peacock Discord server (https://thepeacockproject.org/discord)
    -   Ben voorbereid om het volgende klaar te hebben:
        -   Schermafbeeldingen van de Peacock Server werkend in de terminal
        -   Schermafbeeldingen van de Peacock Patcher werkend
        -   Informatie over jouw besturingssysteem en spelversie
        -   Information on what is running on Port 80 (check [Connection Troubleshooting](#connection-troubleshooting) above)
        -   Alle informatie verder relevant

## How Peacock Works FAQ

-   See [What is Peacock](./what-is-peacock.md)
    -   See above link for questions on progression (challenges and mastery etc), Freelancer integration with Peacock, whether or not you need Internet to use Peacock, or any other general questions on how Peacock works

## Feature aanvraag FAQ

-   Before asking any questions about Ghost Mode, escalations, user contracts, elusive targets, please check the [Custom Content Page](.././custom-content.md) as well as the [Ghost Mode Page](.././ghost-mode.md).
-   Mod Compatability:
    -   Most mods are compatible with Peacock; there are only three kinds that aren't.
        -   If a mod edits contracts (missions, special assignments, etc.), it'll need a Peacock plugin to be compatible.
        -   If a mod edits the planning inventory (that is, changes the properties of starting locations, changes which items you can bring into missions, or edits the suits available to you), it will also need a plugin.
        -   Menu changes may also sometimes be incompatible, but should otherwise be fine. Other than those, mods should be compatible with Peacock without any effort on the part of the mod creator.
