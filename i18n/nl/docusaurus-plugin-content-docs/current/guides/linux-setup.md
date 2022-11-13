---
title: Linux Installatiegids
description: Gids voor het opzetten van Peacock op Linux of macOS.
---

Peacock is primair gemaakt om te werken op Windows, maar ben niet bang, het is namelijk mogelijk om het ook op Linux gebruiken!

## Server

Om de server aan de praat te krijgen op Linux, moet je eerst Node.js voorbereiden.

### Install nvm

Om dit te doen moet je het volgende commando uitvoeren:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Dit zal [nvm](https://nvm.sh) downloaden en installeren, wat het mogelijk maakt om snel tussen Node.js versies te wisselen. Dit maakt het mogelijk om Peacock altijd de juiste Node.js versie te geven die nodig is.

### Install Node.js

Next, `cd` to the directory you have Peacock unzipped to, and run the following command:

```shell
nvm install
```

This will install the version of Node.js required by Peacock. You will need to re-run this when Peacock updates.

### Create a launcher script

Finally, create a script that lets you easily start the server, with the suggested contents being as follows:

```shell
node --enable-source-maps --harmony chunk0.js --hmr
```

-   Note: If you are using a port other than port 80, you should specify the port in your launcher script. Substitute `PORTNUMBER` in the script below with your port number of choice.

    -   ```shell PORT=PORTNUMBER node --enable-source-maps --harmony chunk0.js --hmr
        ```

```shell
chmod +x ./theScriptsName.sh
```

You can now launch the server by running the script you just created.

## Patcher

This part is a lot more tricky. You need to run the patcher in *the same Wine prefix as the game*.

Some users have gotten it to work, but others haven't. Feel free to document your experience in the Discord's `#help` channel for anybody that has problems in the future to reference.

Some people have gotten it to work using the following command:

```shell
STEAM_COMPAT_DATA_PATH="$HOME/.steam/root/steamapps/compatdata/1659040" \
  WINEPREFIX="$STEAM_COMPAT_DATA_PATH/pfx" \
  STEAM_COMPAT_CLIENT_INSTALL_PATH="$home/.steam/steam" \
  "$HOME/.steam/root/steamapps/common/Proton\ -\ Experimental/proton" run /path/to/PeacockPatcher.exe
```

Obviously, you will need to change the paths to match your install of Steam, Proton, and the patcher.
