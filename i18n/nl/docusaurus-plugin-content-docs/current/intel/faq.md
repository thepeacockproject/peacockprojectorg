---
title: Veelgestelde vragen / Probleemoplossing
---

## Algemene Peacock gebruikstips

-   Het kan enkele pogingen kosten om verbinding te maken met Peacock. Als je niet kan verbinden, probeer dan terug naar de Peacock Patcher applicatie te gaan, en klik dan op "Re-Patch" totdat er "Successfully patched ID" te zien is.
-   Als het spel al met de officiële servers is verbonden moet je eerst de verbinding van de officiële servers verbreken om te verbinden met Peacock. Om de verbinding te verbreken met de officiële servers, ga naar "Options" op het startmenu, dan naar "Privacy Policy", en klik dan op "Opt out". Als je dan weer verbinding maakt zou je met de Peacock server verbonden moeten zijn.

-   Je kunt dus ook op dezelfde manier de verbinding verbreken als je met Peacock verbonden bent, via de patcher de server naar "IOI Official" zetten, en dan weer verbinding maken om zo te verbinden met de officiële servers.

-   Om de 7 deadly sins dingen te gebruiken, moet je er zeker van zijn dat je de 7 deadly sins DLC gekocht hebt. Verwijder dan de `userdata` folder, er herstart het spel.

    -   Als je moeilijkheden hebt met het vinden van de `userdata` folder, [zie deze afbeelding](https://media.discordapp.net/attachments/833505136290299935/991071183732613200/unknown.png).

-   Het is ondersteund om in het spel op te slaan, maar bedenk wel dat je alleen de officiële server saves op de officiële server kan gebruiken, en de Peacock saves op de Peacock server.

-   Als je Peacock gebruikt heeft het heel kleine effecten op jouw officiële serverprofiel.
    -   Dit komt omdat wij een aantal kleine functies, zoals spoilerwaarschuwingen voor inhoud/verhaal, niet correct hebben geïmplementeerd, en dat alles naar 'Ik heb het al gespeeld' zet. Verder zou het geen invloed moeten hebben.
-   Opmerking: Als je het spel voor de eerste keer speelt (op Peacock of op de officiële servers), zullen sommige uitgangen afgesloten zijn. Je moet eerst de uitgangen in Dubai ontgrendelen ([de liften ontgrendelen)](https://youtu.be/IEQgRQyQRf8), de Dartmoor uitgangen ([je moet minimaal een keer met de motor vertrekken](https://youtu.be/AJtJZe9jEi8?t=151)), en de Colorado uitgangen ([je moet minimaal een keer met de tornado uitgang de map verlaten](https://youtu.be/3XKWHrKpXwk?t=140)). Deze uitgangen worden client-side afgehandeld.

**Probleemoplossing FAQ**

-   Controleer eerst de "Hoe moet ik Peacock uitvoeren" sectie van deze gids, en ben er zeker van dat de versie van het spel en het platform, etc. understeund is.
-   Controleer de "Algemene Peacock gebruikstips" sectie van deze gids voor instructies van het verbreken en het herverbinden van de server van keuze. Soms kan het een paar pogingen kosten voordat je kunt verbinden.
-   Controleer dat je de laatste versie van Hitman 3 en Peacock hebt, oudere versies kunnen mogelijk niet ondersteund zijn.
-   Probeer de `Start Server.cmd` uit te voeren als administrator.
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

**Feature aanvraag FAQ**

-   Om volledig duidelijk te zijn: Challenges voltooien en normale progressie is nog niet ondersteund, maar het is wel ingepland voor toekomstige implementatie. Peacock zal je alle unlocks meteen vrijstellen (waar jij mee in aanmerking komt qua DLC die jij hebt gekocht).
-   Voordat je vragen stelt over Ghost Mode, escalations, user contracts of elusive targets, controleer eerst de [Aangepaste Inhoud Pagina](https://thepeacockproject.org/wiki/custom-content) net als de [Ghost Mode Pagina](https://thepeacockproject.org/wiki/ghost-mode/).
-   Peacock is niet aanspreekbaar voor compatibiliteitsproblemen tussen spelaanpassingen van derde partijen en Peacock.
    -   Je kan de makers van de mod(s) vragen of ze een plugin functionaliteit toe willen voegen om het te laten werken met Peacock, net zoals is gedaan met de Sarajevo Six mod, bijvoorbeeld.

-   Is jouw vraag niet in de FAQ hierboven beantwoord? Vraag het in het `#help` kanaal van de Peacock Discord server (https://thepeacockproject.org/discord)
    -   Ben voorbereid om het volgende klaar te hebben:
        -   Schermafbeeldingen van de Peacock Server werkend in de terminal
        -   Schermafbeeldingen van de Peacock Patcher werkend
        -   Informatie over jouw besturingssysteem en spelversie
        -   Informatie over wat er op Poort 80 werkend is (controleer de FAQ hierboven)
        -   Alle informatie verder relevant
