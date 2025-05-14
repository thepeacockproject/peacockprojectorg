---
title: Start Building
---

Ready to develop a plugin? Great! Here's how to get started.

## Pre-Requisites

First, you will need to install [Node.js](https://nodejs.org) - use the [same major version as Peacock](https://github.com/thepeacockproject/Peacock/blob/v7/.nvmrc).

After installing Node, you will need to active Node.js' package manager-manager, `corepack`.
Visit a terminal or command prompt, and use the command `corepack enable` to do so.

:::note PowerShell error

If you are using PowerShell on Windows, you may run into an issue where it says you can't run unsigned scripts.
To fix this, run `Set-ExecutionPolicy Unrestricted` and try again.

:::

Lastly, you will need to install [Git](https://git-scm.com). The installer on Windows has a lot of options, and the defaults are fine.

Note: Peacock development will need to be done on a drive that supports symlinks, like NTFS. Older file systems like FAT32 and exFAT do not natively support symlinks. 

## Workspace Setup

Once you have all the pre-requisites satisfied, you will need to clone the Peacock repository.
You can develop your plugin alongside the Peacock source code for ease of access.

To clone the repository, run the following command in a terminal or command prompt:

```bash
git clone https://github.com/thepeacockproject/Peacock.git
```

You will then want to open the project in a code editor of your choice, such as [Visual Studio Code](https://code.visualstudio.com) or [WebStorm](https://jetbrains.com/webstorm).

Once you have opened the project, run the following command in an administrator terminal to install the dependencies:

```bash
yarn install
```

You now have the workspace fully set up. You can create a new file for your plugin in the `plugins` folder, and start developing.

To run the Peacock server from the repository in development mode, run the following command:

```bash
yarn run-dev
```

While in development mode, plugins written in TypeScript will be loaded and automatically transformed into JavaScript.
