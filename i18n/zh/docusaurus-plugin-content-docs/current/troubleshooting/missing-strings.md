---
title: 缺少字符串（UI_PEACOCK）
---

这是由于未从 Peacock 下载动态资源包导致的。

模组可以禁用下载功能以允许他们的武器（或其他存储库编辑）更改通过thumbs命令在官方模式上显示。
但这也阻止了 Peacock 的动态资源包被下载，它只包含 Peacock 自定义内容的本地化文件。

您可以通过自定义 Peacock 菜单元素的文本来识别它，该文本显示以 `['UI_PEACOCK` 开头的文本，如图所示。

![来自《杀手暗杀世界》中Peacock的特色页面截图。 自定义Peacock菜单元素显示以“`['UI PEACOCK`”开头的文本。(/img/wiki/missing_strings.png)

## 如何修复

:::note 无模组/其他游戏版本

如果您不使用Simple Mod Framework或者您使用的是《杀手2016》或《杀手2》。
确保您的“thumbs.dat”文件不会通过控制台命令禁用动态资源包。

如果您不确定如何检查，您可以验证您的游戏文件以确保您拥有原始版本。

:::

您可以通过安装使用Simple Mod Framework的模组来解决此问题。

- 使用[此链接](https://hitman-resources.netlify.app/smf-install-link/https://github.com/thepeacockproject/peacock-strings/releases/latest/download/mod.framework.zip)，或；
- 通过[直接下载](https://github.com/thepeacockproject/peacock-strings/releases/latest/download/mod.framework.zip)并通过模组管理器添加。

不要忘记重新应用你的模组。

:::note 如果你已经安装了模组

确保它已更新！ 您可以通过 Simple Mod Framework 的模组管理器执行此操作。

:::
