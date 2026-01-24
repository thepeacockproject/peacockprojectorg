---
title: Steam Deck Setup Guide
description: Guide for setting up Peacock on Steam Deck.
---

This guide is intended for setting up Peacock on the Steam Deck by running the Windows version of Hitman via Wine.

## Installation

Enter desktop mode and install Peacock as described in [this guide](../intel/installation.md).

Note that you will be running Peacock within Windows and therefore won't use the Linux installation.

### Settings
The two issues facing the Wine/Linux installatiion are the limitations on port 80 and the compatiblity of Node.js with Wine.

Edit the ```Start Server.cmd``` file to set the ```PORT``` and ```NODE_SKIP_PLATFORM_CHECK``` variables as follows:

```shell
@echo off
SET PORT=6969
SET NODE_SKIP_PLATFORM_CHECK=1
SET LOG_LEVEL_CONSOLE=info
SET LOG_CATEGORY_DISABLED=
SET LOG_MAX_FILES=14d
pushd "%~dp0"
.\nodedist\node.exe chunk0.js
PAUSE
```

### Create Launcher
Using a text editor, create a new file and save it as ```Launcher.bat``` in the main Hitman directory.

Add the text below and save the file.

```shell
@ECHO OFF

TITLE Peacock
set "HITMAN=%~dp0"
set "PEACOCK=%HITMAN%\Peacock"
set "EXENAME=HITMAN3.exe"
cd "%PEACOCK%"
start "" /low /d "%PEACOCK%" PeacockPatcher.exe
start /B "Peacock" cmd /c "start Server.cmd"

cd "%HITMAN%\Retail"
"%EXENAME%"
```

Add the ```Launcher.bat``` file to Steam as a non-steam game in the usual way, instead of launching ```Hitman.exe``` directly. This file launches the Peacock utilities and Hitman from a single shortcut.

### Launch the Game
Launch the game by opening the ```Launcher.bat``` shortcut via Wine.

On the first launch, you will need to change the IP in the Peacock Patcher to 127.0.0.1:6969 per [this guide](../troubleshooting/fix-port-in-use.md).

This only needs to be done once. 

It is easier to do this from desktop mode rather than the Deck's gaming mode.

### Closing the Game
After quitting the main Hitman game, you will need to close the other two windows manually by using the Steam button and selecting 'Exit Game'.

