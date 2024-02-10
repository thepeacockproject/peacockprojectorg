---
title: Guia de Configuração Linux
description: Guia para configurar o Peacock no Linux ou macOS.
---

O Peacock foi feito para funcionar no Windows, mas não tema, usá-lo no Linux é possível!

:::informação Atualização em Novembro de 2022

-   Vá para [esse repositório do GitHub](https://github.com/thepeacockproject/linux-steam-setup) para instruções atualizadas sobre como fazer o Peacock rodar no Linux com Steam.
-   **As Instruções Originais abaixo podem também funcionar.**

:::

## Servidor

Para fazer o servidor funcionar no Linux, você precisará preparar o Node.js primeiro.

### Instale o nvm

Para fazê-lo, execute o seguinte comando pela primeira vez:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Isso vai realizar o download e a instalação do [nvm](https://nvm.sh), que permite alternar rapidamente entre diferentes versões do Node.js. Isso irá permitir o Peacock sempre utilizar a versão do Node.js que é necessária.

### Instale o Node.js

Depois disso, use o comando `cd` para o diretório em que você extraiu o Peacock e execute o seguinte comando:

```shell
nvm install
```

Isso vai realizar a instalação da última versão do Node.js necessário para o funcionamento do Peacock. Você precisará de refazer esse procedimento após atualizações do Peacock.

### Crie um Script de inicialização

Por último, crie um script que permita a você facilmente inicializar o servidor, com os conteúdos sugeridos abaixo:

```shell
node --enable-source-maps --harmony chunk0.js --hmr
```

-   Aviso: se você estiver utilizando uma porta diferente da porta 80, você deve especificar a porta no seu script de inicialização. Substitua `PORTNUMBER` no script abaixo com o número da porta de sua escolha.

    -   ` ```shell PORT=PORTNUMBER node --enable-source-maps --harmony chunk0.js --hmr `

E torne o script um arquivo executável:

```shell
chmod +x ./NomeDoScript.sh
```

Você pode agora inicializar o servidor rodando o script que acabou de criar.

## Patcher

Essa parte é mais complicada. Você precisará rodar o patcher no _mesmo Wine Prefix que o jogo_.

Alguns usuários conseguiram fazer isso funcionar, mas outros não. Sinta-se à vontade para documentar sua experiência no canal `#help` no Discord para auxiliar alguém que venha a ter problemas no futuro.

Algumas pessoas conseguiram esse processo usando o seguinte comando:

```shell
STEAM_COMPAT_DATA_PATH="$HOME/.steam/root/steamapps/compatdata/1659040" \
  WINEPREFIX="$STEAM_COMPAT_DATA_PATH/pfx" \
  STEAM_COMPAT_CLIENT_INSTALL_PATH="$home/.steam/steam" \
  "$HOME/.steam/root/steamapps/common/Proton\ -\ Experimental/proton" run /path/to/PeacockPatcher.exe
```

Obviamente, você precisará mudar os caminhos para aqueles da sua instalação do Steam, Proton e do patcher.
