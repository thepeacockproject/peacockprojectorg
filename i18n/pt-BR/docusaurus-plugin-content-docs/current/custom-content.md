---
title: Conteúdo Customizado
description: Uma visão geral do conteúdo customizado que existe no Peacock.
---

O Peacock tem vários benefícios incluídos para nossos usuários. Aqui vai uma espiada no nosso conteúdo customizado!

## Alvos Elusivos

Dentro do Peacock, você pode jogar Alvos Elusivos sem nenhum tempo limite ao reiniciar (ao contrário do Arcade de Alvos Elusivos), e sem nenhum tempo limite.

- **Como Jogar:**
    - Depois de iniciar o Hitman 3 usando o Peacock, vá para `Career` -> `Elusive Targets` no jogo.
- Veja a seção [Plugins](#plugins) por informações sobre a instalação do alvo elusivo "Os Irmãos" (conteúdo cortado) em Hitman 3.

## Agravamentos

### Agravamentos Peacock Customizados

O Peacock suporta agravamentos (Originais Peacock) customizados. Esses agravamentos estão disponíveis em jogo por predefinição. Você pode ver alguns dos agravamentos customizados listados nos [Roadmaps](./roadmaps.mdx) também.

### Agravamentos dos Servidores Oficiais e Agravamentos Legado

O Peacock também suporta todos os agravamentos dos servidores oficiais, incluindo agravamentos de Hitman 2016 que não foram portados para o Hitman 2 e 3 (agravamentos legado). Esses agravamentos estão disponíveis em jogo por predefinição.

- Nota: Você pode selecionar níves específicos de agravamentos para iniciar usando a ferramenta Escalation Level Picker, como explicado [aqui](./intel/loadout-profiles-elp.md#escalation-level-picker)

## Modo Contratos

O Peacock suporta ambos contratos de servidores oficiais e contratos personalizados Peacock.

### Contratos em Destaque

Aqui estão incluídos contratos customizados (Originais Peacock) criados pela equipe de desenvolvimento do Peacock. Você pode ver alguns desses contratos em destaque customizados [aqui](./roadmaps.mdx).

- **Aviso: Contratos em Destaque dos Servidores Oficiais não estão incluídos.**

#### Como Jogar

Vá para o menu `Game Modes` -> `Contracts` -> `Featured` em jogo.

### Contratos de Servidores Oficiais Criados por Usuários

#### Como Instalar

- Nota: Isso funciona apenas se o bot do HITMAPS está autenticado para a plataforma em questão.
  - [Mais informações sobre como autenticar](https://bot.hitmaps.com/).
  - Para checar se o bot está online, execute o comando `botstatus` no canal `#bot-spam` no Discord do Peacock. O status é atualizado a cada 10 minutos.
- Vá para o menu `Game Modes` -> `Contracts` -> `Contract Lookup` em jogo.
- Entre com o ID do contrato do servidor oficial (**Contratos de qualquer plataforma exceto Nintendo Switch são suportados para isso**).
- O contrato será baixado na sua pasta `contracts`.

#### Como Jogar

Vá para o menu `Game Modes` -> `Contracts` -> `My Contracts` em jogo.

### Contratos Personalizados Peacock Criados por Usuários

#### Como Instalar

Faça o Download dos arquivos `.json` de contratos do canal `share-contracts` no Discord do Peacock. Coloque o arquivo `.json` na sua pasta `Contracts`, como mostrado aqui: ![](/img/wiki/contracts_folder.png).

#### Como criar o seu

- Se você criar um contrato em jogo enquanto estiver conectado ao servidor Peacock, seu contrato será salvo como um arquivo `.json` na pasta `Contracts`, como mostrado na imagem acima.
- Certifique-se de compartilhar seu arquivo `.json` no canal `share-contracts` do servidor Discord do Peacock se quiser que outros joguem seu contrato customizado Peacock.

#### Como Jogar

- Vá para o menu `Game Modes` -> `Contracts` -> `My Contracts` em jogo.

## Plugins

O Peacock suporta uma grande variedade de mods de servidor (plugins). Esses incluem, mas não estão limitados a:

- Modo Massacre
    - Todos os NPCs reais são marcados como alvos, podendo receber avaliação Assassino Silencioso depois de ter matado a todos.
    - Nota: Bem bugado em mapas com mais de 200 alvos, armas podem falhar em momentos aleatórios. Você pode precisar matar usando métodos corpo a corpo.
- Alvo Elusivo Os Irmãos (Conteúdo Cortado / Mod de Fã)
    - NOTA: Apesar de o Alvo Elusivo Os Irmãos ser compatível com o Peacock, é uma **interpretação de fãs** de como a missão iria se desenrolar, e não é necessariamente canônico
    - Download de Arquivo: https://www.nexusmods.com/hitman3/mods/375?tab=files
    - Instale a porção principal do mod (o arquivo não marcado como "Peacock Plugin") através do Simple Mod Framework. Instale a seção do mod "Peacock Plugin" colocando-o na sua pasta de instalação do Peacock
- Plugins para adicionar armas não usadas no jogo
- Plugins para modificar armas e disfarces existentes

### Como Instalar Plugins

Amplamente falando, para baixar plugins, vá para os canais `plugins` ou `#plugin-releases` no servidor Discord do Peacock e faça o download de um plugin em que tenha interesse.

- Coloque os plugins na pasta `plugins`, localizada na pasta Peacock (criada automaticamente pelo servidor na primeira vez em que foi executado).
- O plugin deve terminar com `.plugin.js` ou `Plugin.js` - se foi obtido como um arquivo `.zip`, extraia seus conteúdos primeiro.

Exemplo: ![Pasta de plugins](/img/wiki/plugins_folder.png)

- Verifique por quaisquer outras instruções na descrição do plugin, já que alguns deles podem necessitar de configurações adicionais ou não irão funcionar com versões mais recentes do Peacock.

:::nota

Plugins são apenas uma pequena parte da comunidade Hitman de mods. **Vários mods de Hitman são manipulados pelo lado do cliente e estão fora da alçada do Peacock.** Mais mods gerais de uso pelo usuário, fora da responsabilidade do Peacock, estão agregados aqui:

- [Nexusmods](https://www.nexusmods.com/hitman3)
- [Discord de Mods Glacier](https://discord.com/invite/6UDtuYhZP6)

:::
