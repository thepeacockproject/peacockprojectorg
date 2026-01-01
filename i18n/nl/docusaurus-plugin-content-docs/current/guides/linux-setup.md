---
title: Linux Installatiegids
description: Gids voor het opzetten van Peacock op Linux of macOS.
---

Peacock is primair gemaakt om te werken op Windows, maar ben niet bang, het is namelijk mogelijk om het ook op Linux gebruiken!

:::info Update vanaf november 2022

-   Ga naar [deze GitHub repo](https://github.com/thepeacockproject/linux-steam-setup) voor bijgewerkte instructies over hoe je Peacock draaiend krijgt op Linux met Steam.
-   **De originele instructies hieronder kunnen ook werken.**

:::

## Server

Om de server werkend te krijgen op Linux, moet je eerst Node.js voorbereiden.

### Installeer nvm

Voer hiervoor de eerste keer het volgende commando uit:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Hiermee wordt [nvm](https://nvm.sh) gedownload en geïnstalleerd, waarmee snel tussen meerdere Node.js-versies kan worden gewisseld. Hierdoor zal Peacock altijd de versie van Node.js gebruiken die het nodig heeft.

### Installeer Node.js

Ga vervolgens met `cd` naar de map waarin Peacock is uitgepakt en voer het volgende commando uit:

```shell
nvm install
```

Dit installeert de versie van Node.js die Peacock nodig heeft. Je moet dit opnieuw uitvoeren wanneer Peacock een update heeft.

### Maak een launcher-script

Maak ten slotte een script waarmee je de server gemakkelijk kunt starten, met de volgende voorgestelde inhoud:

```shell
node --enable-source-maps --harmony chunk0.js --hmr
```

-   Opmerking: Als je een andere poort dan poort 80 gebruikt, moet je de poort opgeven in je launcher-script. Vervang `PORTNUMBER` in het onderstaande script door een poortnummer naar keuze.

    -   ` ```shell PORT=PORTNUMBER node --enable-source-maps --harmony chunk0.js --hmr `

En maak het script vervolgens uitvoerbaar:

```shell
```shell
chmod +x ./theScriptsName.sh
```

Je kunt nu de server starten door het script uit te voeren dat je zojuist hebt gemaakt.

## Patcher

Dit deel is een stuk lastiger. Je moet de patcher uitvoeren in _dezelfde Wine-prefix als het spel_.

Sommige gebruikers hebben het werkend gekregen, anderen niet. Deel je ervaring in het `#help`-kanaal van de Discord, zodat iedereen die in de toekomst problemen ondervindt deze kan raadplegen.

Sommige mensen hebben het werkend gekregen met het volgende commando:

```shell
STEAM_COMPAT_DATA_PATH="$HOME/.steam/root/steamapps/compatdata/1659040" \
  WINEPREFIX="$STEAM_COMPAT_DATA_PATH/pfx" \
  STEAM_COMPAT_CLIENT_INSTALL_PATH="$home/.steam/steam" \
  "$HOME/.steam/root/steamapps/common/Proton\ -\ Experimental/proton" run /path/to/PeacockPatcher.exe
```

Uiteraard moet je de paden aanpassen aan je installatie van Steam, Proton en de patcher.
