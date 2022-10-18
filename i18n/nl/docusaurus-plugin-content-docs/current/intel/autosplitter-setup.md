---
title: Auto-Splitter Setup
description: Hoe je de Peacock auto-splitter in moet stellen voor full-game speedruns.
---

Gids origineel geschreven door [Fusha](https://www.speedrun.com/user/Fusha)

This tool is meant for use in full game Hitman speedruns.

## Specificaties

(zie "Hoe te gebruiken" en "Andere gebruiksopmerkingen" ook hieronder)

-   Het is 100% nauwkeurig om runs te timen voor verificatie-doelen, in tegenstelling tot de [Officiële Servers Autosplitter](https://www.speedrun.com/hitman_3/guide/kbydm).

-   Verschillende fouten zoals dat de splitter niet correct werkt vanuit de startlocatie "Outside" Romania zijn gefixt.

-   Het maakt automatisch splits, gebaseerd op welk level je start en welke spelcategorie je speelt. Het starten en stoppen van de splitter (door op knoppen te drukken) is niet meer nodig.

-   Het werkt op beide de Steam en Epic versie van Hitman 3 in tegenstelling tot de Officiële Servers Autosplitter (wat alleen Epic ondersteund).

-   Dit werkt vanzelfsprekend ook op [Peacock](https://thepeacockproject.org/wiki/intel/), als je toch op de officiële server speelt moet je een van de [andere twee Livesplit Gidsen gebruiken](https://www.speedrun.com/hitman_3/guides).

## Installatie

1. Installeer [Peacock](https://thepeacockproject.org/wiki/intel/) en [LiveSplit](https://livesplit.org/downloads/) als je die nog niet hebt geïnstalleerd (unzip ze waar je ook wilt). **Als je al Peacock hebt geïnstalleerd, ben er dan zeker van dat je Peacock naar de laatste versie hebt geupdate.** Nadat je deze applicaties hebt geïnstalleerd/geupdate, kan je ze voor nu sluiten.

2. Download hier de LiveSplit server component: https://github.com/LiveSplit/LiveSplit.Server/releases/latest

3. Unzip `Livesplit.Server.zip`. Unzip en plaats de twee bestanden die je zojuist hebt gedownload (vanuit de LiveSplit Server component zip folder), en plaats die bestanden in de `LiveSplit` Components folder. Here is an [example image](https://media.discordapp.net/attachments/839264571990343681/1013559084814958694/unknown.png) of how your `Livesplit/Components`folder should look afterwards.

4. Start LiveSplit.

5. Klik met de rechtermuisknop op het hoofd-LiveSplit venster, en klik dan op `Edit Splits`. Bewerk de namen van jouw splits (`Segment Name`) naar jouw preferentie. Klik op `Insert Above / Below` om nieuwe segmenten toe te voegen. Als je wilt, kan je jouw geschatte tijden invullen in `Segment Times`.

6. Klik op `ok` in de Splits Editor, klik dan met de rechtermuisknop op het hoofd-LiveSplit venster en selecteer dan `Save Splits` voor toekomstig gebruik.

7. Klik dan met de rechtermuisknop op het hoofd-LiveSplit venster, en klik dan op `Edit Layout`. Dubbelklik dan op `Timer`, en selecteer dan `Game Time` voor de timingmethode.

8. Terwijl je nog op de `Edit Layout` pagina bent: klik op de `+` knop, dan op `Control`, en dan op `LiveSplit Server`.

9. Klik op `ok` in de Layout Editor, klik dan met de rechtermuisknop op het hoofd-LiveSplit venster en selecteer dan `Save Layout` voor toekomstig gebruik.

## Hoe te gebruiken

(Doe dit elke keer als je het spel opstart, de volgorde is belangrijk! Start altijd LiveSplit (en dan Control > Start Server) voordat je Peacock opstart).

1. Open LiveSplit

2. Klik dan met de rechtermuisknop op het hoofd-LiveSplit venster, selecteer dan `Control`, en dan `Start Server`.

3. Als je wilt veranderen welk spelcategorie je speelt, bewerk dan het `options.ini` bestand in de Peacock folder en verander dan de `autoSplitterCampaign` optie naar `trilogy`, `1`, `2` of `3` afhankelijk van welke campaign je wilt runnen (Dit is autmatisch op `trilogy` ingesteld). De autosplitter zal alleen werken zolang je de geselecteerde campaign speelt, in volgorde.

4. Open de folder waar je Peacock hebt geïnstalleerd, en start dan het `Start Server.cmd` bestand en het `PeacockPatcher.exe` bestand.

5. Start het spel zoals je normaal doet.

## Andere gebruiksopmerkingen

-   De splitter zal altijd volledig herstarten als je het eerste level van de geselecteerde campaign speelt, ongeacht in welke andere staat de splitter zich bevindt. Je hoeft niet handmatig de timer te starten of te herstarten (door op knoppen te drukken).

-   Als je een level start dat niet het eerste level is, het level dat je net hebt gespeelt of het volgende level nadat je een level hebt beëindigd, zal de timer stoppen en geen tijd meer tellen zolang je niet herstart op het eerste level van de campaign.

-   De splitter zal automatisch splitten (recordtijd en naar het volgende level gaan) zo snel mogelijk als je een level beëindigd. Als je echter hetzelfde level meerdere keren achter elkaar speelt (een level anders dan de eerste in de campaign), zal het automatisch tijd voor je toevoegen, zelfs als je het level beëindigd en als het dan dus split (bijvoorbeeld als je op de laatste seconde net niet SA hebt gehaalt en als je dan het level opnieuw speelt, voegt het de tijd toe).

-   Nadat een level mislukt of beëindigd is, zal Peacock een gedetailleerde tijd (in de Start Server.cmd) weergeven, met een nauwkeurigheid op tienden/honderdsten seconden voor de poging die je gemaakt hebt en het zal ook de tijd van resets (van het huidige level) erbij optellen.

-   Vanaf v4.5.0 zal de Peacock Autosplitter niet meer een poging weergeven (de tijd van de split en de tijd van het volgende level) zolang je het level niet hebt beëindigd met de rating van Silent Assassin. Als je de autosplitter wilt gebruiken voor any% runs, zal je de `autoSplitterForceSilentAssassin` optie in het `options.ini` bestand naar `false` moeten zetten.

-   For those that would like to participate in the weekly RTA SASO full game races, you can sign up at [racetime.gg](https://racetime.gg/hitman-3), and then set `autoSplitterRacetimegg = true` in `options.ini` in order to get access to RTA livesplit that integrates with racetime.gg
