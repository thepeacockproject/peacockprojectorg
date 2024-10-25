---
title: Requirements
description: Requirements for running and using Peacock.
---

:::tip Video Tutorial

Want this guide in video/spoken form? Check out our [video tutorial](https://www.youtube.com/watch?v=nF5ngiuDe5M).

:::

## Supported Games / Platforms

-   Hitman 2016 ([Steam](https://store.steampowered.com/app/236870/HITMAN/) / [Epic](https://www.epicgames.com/store/en-US/p/hitman))
-   Hitman Sniper Assassin ([Steam Depot](https://steamdb.info/app/783780/))
-   Hitman 2 ([Steam](https://store.steampowered.com/app/863550/HITMAN_2/))
-   Hitman 3 ([Steam](https://store.steampowered.com/app/1659040/HITMAN_3/) / [Epic](https://www.epicgames.com/store/en-US/p/hitman-3))

### Unsupported games and platforms

-   Any other platform not listed in "Supported" section, such as console platforms, are not supported.
-   Demo versions of Hitman 3 are not supported.
-   Game Pass or Microsoft PC edition of Hitman 3 is not supported.
-   **Any cracked or pirated version of Hitman 1-3 is not supported, and you will be banned from the Peacock Discord upon asking about how to use any pirated or cracked version.**

## Supported Operating Systems

### Server

The server is the part responsible for handling the game's requests. It is portable, and doesn't even need to run on the same machine as the game.

-   A platform supported by Node.js, meaning Windows 8.1 or up, or a recent Linux/macOS/FreeBSD installation.
-   We have alternatives available if you are unable to meet these requirements, please ask in the Discord.
-   Check the Linux NodeJS install guide: https://thepeacockproject.org/wiki/guides/linux-setup/

### Patcher

The patcher tells the game to actually connect to Peacock, and must be on the same machine as the game.

-   Windows 7 or up

### Summary

Windows 10 and 11 are the best supported operating systems, but Windows 7 or 8 and Linux should work as well, with additional troubleshooting. **Ask in the [Discord](https://thepeacockproject.org/discord) if in doubt.**

:::warning Windows 7 Support

Windows 7 is no longer supported by Microsoft or Node.js, and as such, we provide no guarantees that it will be a bug-free experience.

Please upgrade to a newer version of Windows to get security updates and a more stable experience.

Some previous Hitman games (2016 and 2) support Windows 7, but you will need to host the server on another machine or virtual machine in order to make things work.

:::
