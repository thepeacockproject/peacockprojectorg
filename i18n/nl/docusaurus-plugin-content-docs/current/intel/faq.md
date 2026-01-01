---
title: Veelgestelde vragen / Probleemoplossing
---

## Hoe krijg ik alle items

Peacock v6.1.0 heeft ondersteuning voor progressie geïntroduceerd, wat betekent dat je nu voorwerpen kunt vrijspelen terwijl je speelt. Dit is standaard **ingeschakeld**, om de ervaring van de officiële servers na te bootsen.

Om progressie uit te schakelen en **onmiddellijk alle items te krijgen**, zet je `enableMasteryProgression` in `options.ini` op `false`.

## Probleemoplossing FAQ

### Voordat je problemen oplost

-   Controleer de [Vereisten](./requirements.md) sectie van deze handleiding, zorg ervoor dat je een ondersteunde spelversie en platform hebt, etc.
    -   **Microsoft Store-versie van Hitman 3 wordt niet ondersteund (zoals vaak gevraagd)**.
    -   Bekijk [Linux Installatiegids](../guides/./linux-setup.md) als je Linux gebruikt.
-   Zorg ervoor dat je de nieuwste versies van Hitman en Peacock hebt, oudere versies worden mogelijk niet ondersteund.

### Probeer opnieuw verbinding te maken

-   Zorg ervoor dat Peacock Patcher is ingesteld op de optie “Peacock Local” en niet op “IOI Official” wanneer je verbinding probeert te maken met Peacock.
-   Het kan enkele pogingen kosten om verbinding te maken met Peacock. Als je geen verbinding kunt maken, ga dan terug naar de Peacock Patcher-toepassing en klik op “Re-patch” totdat de Peacock Patcher “Successfully patched ID” weergeeft.
-   Als je spel al is verbonden met de officiële servers, moet je het spel mogelijk eerst loskoppelen van de officiële servers om verbinding te maken met Peacock. Om de verbinding met de officiële servers te verbreken, ga je naar “Opties” in het hoofdmenu van Hitman 3, dan naar ‘Privacybeleid’ en vervolgens naar “Opt out”. Wanneer je dan opnieuw verbinding maakt, zou je op Peacock moeten zijn.
-   Om terug te keren naar de officiële servers, kun je offline gaan terwijl je verbonden bent met Peacock. Schakel vervolgens de Peacock Patcher-toepassing in om je te laten patchen naar de officiële servers en ga vervolgens weer “online” om verbinding te maken met de officiële servers.
-   **Als je nog steeds problemen hebt met de verbinding, ga dan door naar de volgende sectie hieronder.**

### Verbindingsproblemen

-   Zoals uitgelegd in de [Wat is Peacock](./what-is-peacock.md) pagina, **moet je, tenminste in het begin, verbonden zijn met het internet om Peacock te kunnen gebruiken**. Dit is om voorbij Steam / Epic verificatie te komen. Nadat je de eerste keer verbinding hebt gemaakt met Peacock, kun je de verbinding met het internet verbreken en verbonden blijven met Peacock voor de duur van je spelsessie.
    -   Als je een telefoon hebt met een mobiel data-abonnement, kun je de telefoon gebruiken als hotspot voor je computer om verbinding te maken met internet.
-   Probeer Peacock niet te gebruiken als het de eerste keer is dat je het spel speelt. Je moet minstens één keer verbinding maken met de officiële servers voordat je verbinding kunt maken met Peacock. Als je ten minste één keer verbinding hebt gemaakt met officiële servers, hoef je dat in de toekomst niet meer te doen om Peacock te gebruiken.
-   Probeer de `PeacockPatcher.exe` uit te voeren als administrator.
-   Houd de optie “Gebruik http in plaats van https” in Peacock patcher aangevinkt tenzij je Ghost Mode speelt.

#### Poort in gebruik

Als je een fout krijgt die er als volgt uitziet:

![De foutmelding die wordt weergegeven wanneer Peacock een poort probeert te gebruiken die in gebruik is](/img/wiki/port_in_use.png)

De foutmelding voor dit probleem zal iets zijn in de vorm van “failed to bind the server to port X”.

Bekijk [deze handleiding](../troubleshooting/fix-port-in-use.md) voor uitleg en instructies om het te op te lossen.

## Andere

-   Bekijk [Peacock's Unieke Functies](../intel/loadout-profiles-elp.md) voor informatie over hoe je meerdere loadouts per map kunt instellen of specifieke escalatieniveaus kunt kiezen met Peacock.
-   Standaardoutfits - Als je `getDefaultSuits = true` aanvinkt in je `options.ini` bestand in je Peacock installatiemap, let dan op het volgende gedrag:
    -   Elke discussie over “standaard outfits” hieronder verwijst naar de versie van de standaard outfit **zonder handschoenen** - welke versie van de outfit je normaal gesproken zou gebruiken voor dat level als je het voor de allereerste keer opstart.
    -   Sommige Hitman 2 en Hitman 3 standaardoutfits zijn niet bruikbaar in alle maps in de standaardversie van het spel. Dit kan worden opgelost met https://www.nexusmods.com/hitman3/mods/401/
    -   Als je ervoor kiest om de bovenstaande mod niet te gebruiken, let dan op het volgende:
        -   Seizoen 1 standaardoutfits (bijv. zomeroutfit uit Marrakech): Werkt op alle maps
        -   Seizoen 2 standaardoutfits (bijv. Casual Tourist uit Santa Fortuna): Werkt op seizoen 2 en 3 maps
            -   New York en Malediven (Haven) zijn werkend in Seizoen 2
        -   Seizoen 1 standaardoutfits (bijv. Neon City Suit uit Chongqing): Werkt alleen op seizoen 3 maps
        -   Ambrose Island valt als het ware buiten het seizoenssysteem, de standaardoutfit van Ambrose (Guerilla Wetsuit) kan op alle maps worden gebruikt en de standaardoutfits van alle maps kunnen in Ambrose worden gebruikt

### Technische ondersteuning aanvragen

-   Is jouw vraag niet in de FAQ hierboven beantwoord? Vraag het in het `#help` kanaal van de Peacock Discord server (https://thepeacockproject.org/discord)
    -   Sluit de Peacock Server. Voer dan `Tools.cmd` uit en druk op enter.
    -   Daarna vind je `DEBUG_PROFILE.zip` in de Peacock-directory. Zorg ervoor dat je deze kunt voorzien.

## Hoe Peacock werkt FAQ

-   Zie [Wat is Peacock](./what-is-peacock.md)
    -   Zie bovenstaande link voor vragen over de Freelancer integratie met Peacock, of je internet nodig hebt om Peacock te gebruiken of andere algemene vragen over hoe Peacock werkt

## Functie aanvragen FAQ

-   Voordat je vragen stelt over Ghost Mode, escalaties, gebruikerscontracten, elusive targets, moet je eerst de [Aangepaste inhoud pagina](.././custom-content.md) en de [Ghost Mode pagina](.././ghost-mode.md) bekijken.
-   Mod compatibiliteit: bijna alle mods zijn compatibel met Peacock zonder extra werk, inclusief contract- en unlockable mods. Wijzigingen in het menu kunnen soms niet compatibel zijn, maar zouden meestal goed moeten zijn.

## Piraterij FAQ
-   Wij ondersteunen geen illegale games.
-   Waarom eigenlijk?
    -   IOI weet dat Peacock bestaat en staat niet vijandig tegenover het project. Piraterij steunen zou de snelste manier zijn om dat te veranderen en het project te laten verwijderen, waardoor meer dan 3 jaar werk aan het project verdwijnt.
    -   Peacock bestaat omdat we genieten van de WoA trilogie games en ze willen behouden, we hebben weinig reden om iets te steunen dat IOI financieel zou kunnen schaden.
