---
title: راهنمای نصب لینوکس
description: راهنمای راه اندازی Peacock بر روی لینوکس و مک او اس.
---

Peacock is primarily built to work on Windows, but fear not, using it on Linux is possible!

## Server

To get the server working on Linux, you will need to first prepare Node.js. In order to do so, run the following command the first time:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

This will download and install [nvm](https://nvm.sh), which allows quickly swapping between multiple Node.js versions. This will allow Peacock to always use the version of Node.js it needs to.
