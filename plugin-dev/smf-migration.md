---
title: Migration to the new SMFv3 helpers
---

SMFv3 radically changes how the Simple Mod Framework operates, and that carries over to Peacock's SMF integration. In Peacock v9, the `modIsInstalled` helper no longer exists; it is replaced by two new helpers, `modEnabledForUser` and `modEnabledForGame`.

In general, these helpers were previously used for notifying users via the terminal when they don't have the correct mods enabled. This use case can be easily converted to the new `modEnabledForUser` helper (since semantically, you are trying to notify _users_ who don't have the right mods):

```js
module.exports = function initPlugin(controller) {
    controller.hooks.onUserLogin.tap("myPlugin", (gameVersion, userId) => {
        if (controller.smf.modEnabledForUser(userId, "Author.ModID@1.0.0")) {
            // code that runs if mod is installed
        } else {
            log(LogLevel.WARN, "The mod is not installed!", "myPlugin")
        }
    })
}
```

You'll notice one more difference - the helpers now expect the mod version alongside the ID, just like in SMF's `requirements`/`incompatibilities` fields. Note that this isn't an exact match - `1.0.0` will work for any version that matches `1.x.x` (any version that is semver-compatible), so you just need to update this version to whatever is latest at the time you update the plugin.
