---
title: Guia de Configuração Linux
description: Guia para configurar o Peacock no Linux ou macOS.
---

O Peacock foi feito para funcionar no Windows, mas não tema, usá-lo no Linux é possível!

:::info Update as of November 2022

-   Go to [this GitHub repo](https://github.com/thepeacockproject/linux-steam-setup) for updated instructions on how to get Peacock running on Linux with Steam.
-   **As Instruções Originais abaixo podem também funcionar.**

:::

## Servidor

To get the server working on Linux, you will need to first prepare Node.js.

### Instale o nvm

In order to do so, run the following command the first time:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

This will download and install [nvm](https://nvm.sh), which allows quickly swapping between multiple Node.js versions. This will allow Peacock to always use the version of Node.js it needs to.

### Instale o Node.js

Next, `cd` to the directory you have Peacock unzipped to, and run the following command:

```shell
nvm install
```

This will install the version of Node.js required by Peacock. You will need to re-run this when Peacock updates.

### Crie um Script de inicialização

Finally, create a script that lets you easily start the server, with the suggested contents being as follows:

```shell
node --enable-source-maps --harmony chunk0.js --hmr
```

-   Aviso: se você estiver utilizando uma porta diferente da porta 80, você deve especificar a porta no seu script de inicialização. Substitua `PORTNUMBER` no script abaixo com o número da porta de sua escolha.

    -   ` ```shell PORT=PORTNUMBER node --enable-source-maps --harmony chunk0.js --hmr `

And then make the script executable:

```shell
chmod +x ./NomeDoScript.sh
```

You can now launch the server by running the script you just created.

## Patcher

This part is a lot more tricky. You need to run the patcher in _the same Wine prefix as the game_.

Some users have gotten it to work, but others haven't. Feel free to document your experience in the Discord's `#help` channel for anybody that has problems in the future to reference.

Some people have gotten it to work using the following command:

```shell
STEAM_COMPAT_DATA_PATH="$HOME/.steam/root/steamapps/compatdata/1659040" \
  WINEPREFIX="$STEAM_COMPAT_DATA_PATH/pfx" \
  STEAM_COMPAT_CLIENT_INSTALL_PATH="$home/.steam/steam" \
  "$HOME/.steam/root/steamapps/common/Proton\ -\ Experimental/proton" run /path/to/PeacockPatcher.exe
```

Obviously, you will need to change the paths to match your install of Steam, Proton, and the patcher.
