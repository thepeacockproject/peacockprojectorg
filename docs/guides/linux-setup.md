---
title: Linux Setup Guide
description: Guide for setting up Peacock on Linux or macOS.
---

Peacock is primarily built to work on Windows, but fear not, using it on Linux is possible!

## Update November 2022

Update as of November 2022:

-   Go to [this Github repo](https://github.com/thepeacockproject/linux-steam-setup) for updated instructions on how to get Peacock running on Linux with Steam.
-   **Original Instructions below may also work.**

## Server

To get the server working on Linux, you will need to first prepare Node.js.

### Install nvm

In order to do so, run the following command the first time:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

This will download and install [nvm](https://nvm.sh), which allows quickly swapping between multiple Node.js versions.
This will allow Peacock to always use the version of Node.js it needs to.

### Install Node.js

Next, `cd` to the directory you have Peacock unzipped to, and run the following command:

```shell
nvm install
```

This will install the version of Node.js required by Peacock.
You will need to re-run this when Peacock updates.

### Create a launcher script

Finally, create a script that lets you easily start the server,
with the suggested contents being as follows:

```shell
node --enable-source-maps --harmony chunk0.js --hmr
```

-   Note: If you are using a port other than port 80, you should specify the port in your launcher script.
    Substitute `PORTNUMBER` in the script below with your port number of choice.

    -   `PORT=PORTNUMBER node --enable-source-maps --harmony chunk0.js --hmr`

And then make the script executable:

```shell
chmod +x ./theScriptsName.sh
```

You can now launch the server by running the script you just created.

## Patcher

This part is a lot more tricky.
You need to run the patcher in _the same Wine prefix as the game_.

Some users have gotten it to work, but others haven't.
Feel free to document your experience in the Discord's `#help` channel for anybody that has problems in the future to reference.

Some people have gotten it to work using the following command:

```shell
STEAM_COMPAT_DATA_PATH="$HOME/.steam/root/steamapps/compatdata/1659040" \
  WINEPREFIX="$STEAM_COMPAT_DATA_PATH/pfx" \
  STEAM_COMPAT_CLIENT_INSTALL_PATH="$home/.steam/steam" \
  "$HOME/.steam/root/steamapps/common/Proton\ -\ Experimental/proton" run /path/to/PeacockPatcher.exe
```

Obviously, you will need to change the paths to match your install of Steam, Proton, and the patcher.
