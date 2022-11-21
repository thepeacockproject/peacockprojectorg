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

    -   Als je voor welke reden dan ook het idee van het stoppen van het proces op Poort 80, kan je het `Start Server.cmd` bestand bewerken om het op een andere poort te starten. Zorg er ook voor dat je `127.0.0.1:POORTNUMMER` bij "Server Address" van de Peacock Patcher invoert, `POORTNUMMER` staat voor welke poort je in `Start Server.cmd` hebt ingevuld.
        -   Verwijs naar [deze voorbeeldafbeelding](https://media.discordapp.net/attachments/839264571990343681/985885230634242048/unknown.png) voor wat je in `Start Server.cmd` moet typen.
        -   Verwijs naar [deze voorbeeldafbeelding](https://media.discordapp.net/attachments/839264571990343681/992523717869568050/unknown.png) voor wat je in de Peacock Patcher moet typen.

### Missing Items / Maps

-   Om de 7 deadly sins dingen te gebruiken, moet je er zeker van zijn dat je de 7 deadly sins DLC gekocht hebt. Verwijder dan de `userdata` folder, er herstart het spel.

    -   Als je moeilijkheden hebt met het vinden van de `userdata` folder, [zie deze afbeelding](https://media.discordapp.net/attachments/833505136290299935/991071183732613200/unknown.png).

### Andere

-   Het is ondersteund om in het spel op te slaan, maar bedenk wel dat je alleen de officiële server saves op de officiële server kan gebruiken, en de Peacock saves op de Peacock server.
-   Challenges (currently implemented in Paris) are still in development and may be buggy. Report issues in the `#help` channel in Peacock discord.
-   Als je Peacock gebruikt heeft het heel kleine effecten op jouw officiële serverprofiel.
    -   Dit komt omdat wij een aantal kleine functies, zoals spoilerwaarschuwingen voor inhoud/verhaal, niet correct hebben geïmplementeerd, en dat alles naar 'Ik heb het al gespeeld' zet. Verder zou het geen invloed moeten hebben.
-   Opmerking: Als je het spel voor de eerste keer speelt (op Peacock of op de officiële servers), zullen sommige uitgangen afgesloten zijn. Je moet eerst de uitgangen in Dubai ontgrendelen ([de liften ontgrendelen)](https://youtu.be/IEQgRQyQRf8), de Dartmoor uitgangen ([je moet minimaal een keer met de motor vertrekken](https://youtu.be/AJtJZe9jEi8?t=151)), en de Colorado uitgangen ([je moet minimaal een keer met de tornado uitgang de map verlaten](https://youtu.be/3XKWHrKpXwk?t=140)). Deze uitgangen worden client-side afgehandeld.
-   Check [Peacock Unique Features](../intel/loadout-profiles-elp) page for info on how to set multiple loadouts per map or choose specific escalation levels with Peacock.

### Request Tech Support

-   Is jouw vraag niet in de FAQ hierboven beantwoord? Vraag het in het `#help` kanaal van de Peacock Discord server (https://thepeacockproject.org/discord)
    -   Ben voorbereid om het volgende klaar te hebben:
        -   Schermafbeeldingen van de Peacock Server werkend in de terminal
        -   Schermafbeeldingen van de Peacock Patcher werkend
        -   Informatie over jouw besturingssysteem en spelversie
        -   Information on what is running on Port 80 (check [Connection Troubleshooting](faq/#connection-troubleshooting) above)
        -   Alle informatie verder relevant

## Feature aanvraag FAQ

-   To be very clear: Progression (unlocking items as you go) is currently not supported, although planned for the future. Peacock zal je alle unlocks meteen vrijstellen (waar jij mee in aanmerking komt qua DLC die jij hebt gekocht).
-   In-game challenges are actively being implemented as of Peacock v5.0.1.
-   Voordat je vragen stelt over Ghost Mode, escalations, user contracts of elusive targets, controleer eerst de [Aangepaste Inhoud Pagina](https://thepeacockproject.org/wiki/custom-content) net als de [Ghost Mode Pagina](https://thepeacockproject.org/wiki/ghost-mode/).
-   Mod Compatability:
    -   Most mods are compatible with Peacock; there are only three kinds that aren't.
        -   If a mod edits contracts (missions, special assignments, etc.), it'll need a Peacock plugin to be compatible.
        -   If a mod edits the planning inventory (that is, changes the properties of starting locations, changes which items you can bring into missions, or edits the suits available to you), it will also need a plugin.
        -   Menu changes may also sometimes be incompatible, but should otherwise be fine. Other than those, mods should be compatible with Peacock without any effort on the part of the mod creator.
