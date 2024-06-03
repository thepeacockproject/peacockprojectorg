---
title: Hello World and Basics
---

## Starter Code

The bare minimum required for a plugin is the following starter code:

```js
module.exports = function myPlugin(controller) {
    // code
}
```

The exported function will be called when the plugin is loaded.

## Logging

From there, we can add some logging so we know everything is working:

```js
const { log, LogLevel } = require("@peacockproject/core/loggingInterop");

module.exports = function myPlugin(controller: Controller) {
    log(LogLevel.INFO, "Hello World!");
}
```

This will log the string `Hello World!` to the console.

Notice how we import the `log` function from the `loggingInterop` module.
Almost all of Peacock's core APIs are available to be consumed from plugins.
You can take a look at the generated API type definitions [here](https://unpkg.com/browse/@peacockproject/core/).

:::info Exposed APIs

While the type definitions are a complete representation of the API, some files are not exposed at runtime.
Namely, files that only contain type definitions as well as `cli` and `index` are not exposed (either because they would be
empty, or trigger unwanted side effects when imported).

For a list of files that can be used at runtime,
see [this file](https://github.com/thepeacockproject/Peacock/blob/master/components/generatedPeacockRequireTable.ts).

:::
