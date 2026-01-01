---
title: Auto-Splitter Setup
description: Hoe je de Peacock auto-splitter in moet stellen voor speedruns van de volledige game.
---

_Gids oorspronkelijk geschreven door [Fusha](https://github.com/fu5ha)_.

Deze tool is bedoeld voor gebruik in Hitman speedruns van de volledige game.

## Specificaties

(zie "Hoe te gebruiken" en "Andere gebruiksopmerkingen" ook hieronder)

-   100% nauwkeurig hoe runs worden getimed voor verificatiedoeleinden, in tegenstelling tot de [Official Servers Autosplitter](https://hitruns-wiki.vercel.app/docs/livesplit_auto_official).

-   Verschillende fouten, zoals de splitter die niet goed werkt vanaf de startlocatie “buiten” Roemenië, zijn verholpen.

-   Splits volledig automatisch op basis van op welk niveau je begint en welke volledige spelcategorie je speelt. Het starten en stoppen van de splitter (door het indrukken van numpad-toetsen enz.) is niet nodig.

-   Werkt op zowel Steam als Epic versies van Hitman 3 in tegenstelling tot de Official Servers Autosplitter (die alleen Epic is).

-   Dit werkt natuurlijk alleen op [Peacock](./what-is-peacock.md), als je om een of andere reden op officiële servers speelt moet je een van de [andere twee Livesplit-gidsen](https://hitruns-wiki.vercel.app/docs/livesplit) gebruiken.

## Installatie

1. Installeer [Peacock](./installation.md) en [LiveSplit](https://livesplit.org/downloads/) als je geen van beide hebt geïnstalleerd (pak ze gewoon uit waar je wilt). **If you already have Peacock installed, make sure to you have it updated to the latest version.** After you get these apps installed/updated, close Peacock for now and start LiveSplit if you haven't yet.

2. Klik met de rechtermuisknop op het hoofd-LiveSplit venster, en klik dan op `Edit Splits`. Bewerk je splitsingsnamen (`Segment Name`) naar wens. Klik op `Insert Above / Below` om nieuwe segmenten toe te voegen. Als je wilt, kun je jouw geschatte tijden invullen in `Segment Times`.

3. Klik op `ok` in de Splits Editor, klik dan met de rechtermuisknop op het hoofd-LiveSplit venster en selecteer dan `Save Splits` voor toekomstig gebruik.

4. Klik met de rechtermuisknop op het hoofd-LiveSplit venster, en klik dan op `Edit Layout`. Dubbelklik op `Timer`, en selecteer dan `Game Time` voor de timingmethode.

5. Terwijl je nog op de `Edit Layout` pagina bent: klik op de `+` knop, dan op `Control`, en dan op `LiveSplit Server`.

6. Klik op `ok` in de Layout Editor, klik dan met de rechtermuisknop op het hoofd-LiveSplit venster en selecteer dan `Save Layout` voor toekomstig gebruik.

7. Open `options.ini` in the Peacock folder and set `liveSplit = false` to be `liveSplit = true` instead to enable the livesplit integration (turned off by default), and adjust the other LiveSplit options as needed.

## Hoe te gebruiken

(Doe dit elke keer als je het spel opstart, de volgorde is belangrijk! Zorg ervoor dat je LiveSplit en de server start voordat je Peacock start).

1. Open LiveSplit

2. Right-click on the main LiveSplit window, then select `Control`, then `Start TCP Server`. If this button isn't there you are likely running an outdated version of LiveSplit, as this server was originally separate from the main LiveSplit download, please update to at least LiveSplit 1.8.29, released May 11, 2024.

3. Als je wilt veranderen welk spelcategorie je speelt, bewerk dan het `options.ini` bestand in de Peacock folder en verander dan de `autoSplitterCampaign` optie naar `trilogy`, `1`, `2` of `3` afhankelijk van welke campaign je wilt runnen (Dit is automatisch op `trilogy` ingesteld). De autosplitter zal alleen werken zolang je de geselecteerde campaign speelt, in volgorde.

4. Open de map waarin je Peacock hebt geïnstalleerd en voer `Start Server.cmd` en `PeacockPatcher.exe` uit. You should see a message in the Peacock Server Window saying `LiveSplit initialized`.

5. Start het spel zoals je normaal doet.

## Andere gebruiksopmerkingen

-   De splitter zal altijd volledig herstarten als je het eerste level van de geselecteerde campaign speelt, ongeacht in welke andere staat de splitter zich bevindt. Je hoeft niet handmatig de timer te starten of te herstarten in LiveSplit (door op de toetsen, etc. te drukken).

-   Als je een missie start die niet de eerste missie is, de missie die je net hebt gespeeld of de volgende missie na het voltooien van de missie die je net hebt gespeeld, stopt de timer en worden de tijden niet meer bijgehouden totdat je teruggaat naar de eerste missie in de campagne.

-   De splitter splitst automatisch (registreert de tijd en gaat naar de volgende missie) zodra je een missie met succes hebt voltooid. Als je echter dezelfde missie meerdere keren opnieuw speelt (anders dan de eerste in de geselecteerde campagne), worden de resettijden automatisch bij elkaar opgeteld, zelfs als je de missie “voltooit” en deze splitst (als je er bijvoorbeeld niet in slaagt om SA te halen op de laatste seconde, kun je de missie opnieuw spelen en wordt de missie automatisch gesplitst en wordt de resettijd toegevoegd).

-   Nadat je een missie hebt voltooid of hebt gefaald, wordt gedetailleerde timinginformatie over de poging die je zojuist hebt gedaan afgedrukt in het venster van de Peacock-server, met timinginformatie tot op tienden/honderdsten van seconden voor de poging die je zojuist hebt gedaan en met details over de totale tijd met resets voor de huidige missie.

-   Vanaf v4.5.0 zal Peacock Autosplitter nu standaard in een modus gaan die een succesvolle voltooiing van de missie niet zal loggen (splitsen en naar de volgende map laten gaan) tenzij je de huidige missie voltooit met Silent Assassin rating. Als je de autosplitter wilt gebruiken voor any% runs, verander dan de optie `autoSplitterForceSilentAssassin` in `options.ini` in `false`.

-   Voor degenen die willen deelnemen aan de wekelijkse RTA SASO races in het volledige spel, kun je je aanmelden op [racetime.gg](https://racetime.gg/hitman-3), en stel dan `autoSplitterRacetimegg = true` in `options.ini` in om toegang te krijgen tot de RTA livesplit die integreert met racetime.gg
