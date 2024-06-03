---
title: Contracts
---

## What is a contract?

Contracts are the bread and butter of Peacock's core logic.
Just to be clear, when we say "contract", we don't just mean the stuff in the game's contracts mode.
Every mission, escalation, and piece of playable content has a contract.
For the purposes of this guide, we'll be talking about contracts as a whole, unless we specify we're talking about
contracts *mode*.

:::note "Mission manifest" Naming

`getMissionManifest` (and it's siblings like `addMission`) were added earlier on then a lot of the other APIs. Their
names are inconsistent with the rest of the system, but "mission manifest" and "contracts" are synonymous.
In the future, we'll rename these to be more consistent.

:::

## Adding a contract

In order for a player to be able to play a contract, Peacock needs to know about it.
There are a few ways to do this.

### Register with `addMission`

To tell Peacock about a contract (and allow it to be looked up by its UUID), you can call the `addMission` method on
the `controller` object.

```js
const { Controller } = require("@peacockproject/core");

module.exports = function myPlugin(controller) {
    controller.addMission({
        Data: {
            // ...
        },
        Metadata: {
            Id: "my-contract-uuid",
            // ...
        }
    });
};
```

### Alternative: `getMissionManifest` hook

The `getMissionManifest` hook is a way to register a contract without having to use the `addMission` method.
This is useful if you want to register a contract in a way that is not compatible with the `addMission` method.

```js
const { Controller } = require("@peacockproject/core");

module.exports = function myPlugin(controller) {
    controller.hooks.getMissionManifest.tap("MyPluginName", (contractId) => {
        if (contractId === "my-contract-uuid") {
            return {
                // the contract data object goes here
            };
        }
        
        // if the contract being requested is not ours, let the system take care of it.
        return undefined;
    });
};
```

Just adding a contract to the controller will not make it visible to players.
You will need to give the player a way to access it from the menus.
