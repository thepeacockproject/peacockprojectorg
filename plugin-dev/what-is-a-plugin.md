---
title: What is a Plugin?
---

Peacock plugins allow you to extend Peacock's functionality and add new features.

If you're interested in creating a plugin, you're in the right place.

If you're a user and you want to install a plugin, check out the [Custom Content page](/wiki/custom-content), which has instructions.

## Plugin Specification

Peacock plugins are written in JavaScript. They can also be written in TypeScript, but must be compiled to JavaScript before Peacock can load it. Peacock comes with full type definitions.

Plugins can use the latest ECMAScript features [available](https://node.green) in the version of Node.js [that Peacock uses](https://github.com/thepeacockproject/Peacock/blob/v7/.nvmrc).

Plugins can be written in [CommonJS or ES Modules](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/), but must be compiled to CommonJS before Peacock can load it.

Plugins can be installed and managed by [Simple Mod Framework](https://www.nexusmods.com/hitman3/mods/200) mods, or manually by the user.

Peacock loads plugins that match the file name schema from the Peacock folder itself or (the new and better) `plugins` folder.

The file name schema is `*Plugin.js` or `*.plugin.js`, where `*` is the name of the plugin.
