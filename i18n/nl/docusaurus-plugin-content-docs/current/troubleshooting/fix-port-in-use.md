---
title: Poort in gebruik error
---

De fout “Poort in gebruik” treedt op wanneer Peacock probeert te starten, maar de poort waarvoor het is ingesteld al in gebruik is.

Here's what it looks like:

![The error message shown when Peacock tries to use a port that's in use](/img/wiki/port_in_use.png)

## What is a Port?

In simple terms, a port is a thing programs and other computers can connect to and get data from.
In order for the game to talk to Peacock's server, the server has to occupy a port.
Ports must have an assigned number. The default port used by Peacock is 80, but port numbers can be any whole number between 1 and 65535.

## Visual Studio

If you use Visual Studio, you may have installed some services that interfere with Peacock by also running on Port 80. To fix:

1. Press the Windows key and R at the same time.
2. Type services.msc in the popup box, then hit Okay.
3. Check for `W3SVC: World Wide Web Publishing Service` and `Web Deployment Agent Service` in the service manager.
4. Disable both if present.
5. Try again, if it doesn't work, restart your computer, then try once more.

## Changing the Port

Here's how to change the port Peacock uses, if you don't want to stop the process on Port 80:

In the instructions below, please substitute `PORTNUMBER` with a port that is not currently in use on your PC, e.g. `8080`, `6969`, `3000`, etc.

- Change `Start Server.cmd` to be as follows:
  ```bash
  @echo off
  SET PORT=PORTNUMBER
  SET LOG_LEVEL_CONSOLE=info
  SET LOG_CATEGORY_DISABLED=
  SET LOG_MAX_FILES=14d
  .\nodedist\node.exe chunk0.js
  PAUSE
  ```
- Type `127.0.0.1:PORTNUMBER` into the Patcher's URL field, as shown here (click on the text and then type, the UI/UX will hopefully be improved soon): ![](/img/wiki/patcher_port.png)

## On Linux

Peacock's default port is 80, but on Linux, the normal user account does not have permission to use port 80.
Check out the Changing the Port section above.
