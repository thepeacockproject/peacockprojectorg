---
title: Aangepaste Inhoud
description: Een overzicht van de aangepaste inhoud die Peacock levert.
---

Peacock heeft heel veel leuke dingen voor haar gebruikers. Hier is een kijkje in onze zelfgemaakte inhoud!

## Elusive Targets

Binnen Peacock kan je Elusive Targets opnieuw spelen zonder een tijdlimiet gezet te hebben als je wilt herstarten (in tegenstelling tot de Elusive Target Arcade), en zonder een globaal tijdlimiet.

-   **Hoe te spelen:**
    -   Na Hitman 3 opgestart te hebben met Peacock, kun je naar `Career` -> `Elusive Targets` in het spel.
-   See the [Plugins](#plugins) section for information on installing "The Brothers" Elusive Target (cut content) in Hitman 3.

## Escalations

-   **Door Peacock-gemaakte Escalations**

    -   Peacock ondersteund aangepaste (door Peacock gemaakte) escalations. Deze escalations zijn standaard beschikbaar. Je kan ook wat door Peacock gemaakte escalations zien in de [Roadmaps](https://thepeacockproject.org/wiki/roadmaps).

-   **Official Server Escalations and Legacy Escalations**

    -   Peacock also supports all official server escalations, including Hitman 2016 escalations that have not been ported to Hitman 2 or 3 (legacy escalations). Deze escalations zijn standaard beschikbaar.

-   Note: You can select specific escalation levels to start on using the Escalation Level Picker tool, as explained [here](./intel/loadout-profiles-elp#escalation-level-picker.md)

## Alleenstaande Peacock missies

Peacock heeft twee aangepaste missies dat alleenstaand zijn (deze missies zijn niet escalations óf contracten, maar ze zijn meer uitgewerkte "bonus missies"):

-   **Traditions of the Trade**
    -   Toeganglijk via `Destinations` > `Bangkok` in het spel
-   **The Lee Hong Assassination**
    -   Toeganglijk via `Destinations` > `Chongqing` in het spel

## Contractmodus

Peacock understeund zowel officiële server- én aangepaste Peacock-contracten.

-   **Featured contracts**
    -   Dit bevat alle featured contracts van de officiële server, evenals een paar aangepaste (door Peacock gemaakte) contracten gemaakt door het developer team van Peacock en zelf normale Peacock gebruikers. You can see some of these custom featured contracts [here](./roadmaps.mdx).
        -   **Note: Official Servers Featured Contracts are not included.**
    -   Hoe te spelen:
        -   Ga naar het `Game Modes` -> `Contracts` -> `Featured` menu in het spel
-   **Door gebruiker-gemaakte, en officiële server contracten**
    -   Hoe te installeren:
        -   Opmerking: Dit werkt alleen zolang de bot geauthenticeerd is voor het platform waarvan je het contract ophaalt. [Klik voor meer informatie](https://bot.hitmaps.com/).
            -   If you want to check if HITMAPS bot is online, run the command `/botstatus` in the `#bot-spam` channel in the Peacock Discord. Note that the `/botstatus` command only updates every 10 minutes.
            -   Note: Downloaded official servers contracts are compatible with every game engine, assuming said game engine contains the relevant maps. For example, if you download a contract from Sapienza (Season 1 map) in Hitman 3 engine, you can play this contract in Hitman 2016 and Hitman 2 engine with Peacock as well. However, if you download a contract from Sgail (Season 2 map), then you can't play this contract in the Hitman 2016 engine as the Hitman 2016 engine doesn't contain any Season 2 maps.
        -   Ga naar het `Game Modes` -> `Contracts` -> `Contract Lookup` menu in het spel.
        -   Voer hier het officiële server contract ID (**Contracten zijn voor elk platform behalve Switch understeund**).
        -   Het contract zal nu gedownload worden in de `Contracts` folder.
    -   Hoe te spelen: Ga naar het `Game Modes` -> `Contracts` -> `My Contracts` in het spel om het contract te spelen.
-   **Door gebruiker-gemaakte, en Peacock contracten**
    -   Hoe te installeren:
        -   Download het `.ocre` bestand van het contract van het `share-contracts` kanaal in de Discord van Peacock. Installeer dit `.ocre` bestand naar jouw `Contracts` folder, [zoals in deze afbeelding is weergegeven](https://media.discordapp.net/attachments/833505136290299935/991101789426421760/unknown.png).
    -   Hoe je jouw eigen contract kunt maken:
        -   Als je een contract maakt en als je op de server van Peacock zit, wordt jouw contract opgeslagen als een `.ocre` bestand in `Contracts` folder, [zoals in deze afbeelding is weergegeven](https://media.discordapp.net/attachments/833505136290299935/991101789426421760/unknown.png).
        -   Deel jouw `.ocre` bestand in het kanaal `share-contracts` van de Peacock Discord server als je wilt dat anderen jouw contract kunnen spelen.
    -   Hoe te spelen:
        -   Ga naar `Game Modes` -> `Contracts` -> `My Contracts` in het spel om te spelen.

## Plugins

Peacock supports a broad variety of server side mods (plugins). Deze mods bevatten, maar zijn niet beperkt tot:

-   Kill Everyone Mode
    -   Alle echte NPC's zijn als doelwit gemarkeerd. Je kan Silent Assassin terugkrijgen nadat je iedereen hebt vermoord.
    -   Opmerking: Werkt mogelijk minder goed met maps die meer dan 200+ doelwitten bevatten. Geweren kunnen willekeurig vastlopen. Mogelijk moet je beginnen met doden via melee.
-   Sarajevo Six
    -   Bonus missies anders alleen beschikbaar op de Playstation versie van Hitman 2016.
    -   Installation Instructions: https://github.com/solderq35/hitman-tech-tips/blob/main/modding/sarajevo_six.md
-   Brothers Elusive Target (Cut Content)
    -   File Download: https://www.nexusmods.com/hitman3/mods/375?tab=files
    -   Install the main portion of the mod (the file not marked "Peacock Plugin") through Simple Mod Framework. Install the "Peacock Plugin" portion of the mod by putting it into your Peacock Install folder. Read the Sarajevo Six instructions above for guidance if confused about either of those steps.
-   Plugins om anders ongebruikte wapens toe te voegen aan het spel
-   Plugins om bestaande wapens en vermommingen te bewerken

### How to Install Plugins

-   In grote lijnen, om plugins te installeren, ga je naar `#plugin-releases` in de Discord server van Peacock, en dan download je de plugin waarin je interesse hebt.
-   Installeer dan de plugin in dezelfde folder waar `Start Server.cmd` en `peacockpatcher.exe` in zitten.
-   Alternatively, create a folder named `plugins`, and then put your plugins there, to organize your files better.
    -   Example: ![PluginsFolder](https://media.discordapp.net/attachments/1018323831468851202/1072614932790648922/image.png)
-   Kijk voor verdere instructies in het `#plugin-releases` kanaal voor een specifieke plugin; sommige plugins kunnen meerdere installatiestappen hebben en/of kunnen mogelijk niet werken met nieuwere versies van Peacock.

**Opmerking: Plugins zijn maar een klein deel van het modding-gedeelte van Hitman. Veel Hitman mods worden client-side uitgevoerd en zijn buiten het bereik van Peacock.** Meer normaal-gebruikte mods, buiten bereik van Peacock, zijn hier geaggregeerd:

-   [Nexusmods](https://www.nexusmods.com/hitman3)
-   [Glacier Modding Discord](https://discord.com/invite/6UDtuYhZP6)
