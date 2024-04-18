---
title: 端口正在使用的错误
---

当 Peacock 试图启动，但设置使用的端口已在使用中时，就会出现“端口正在使用中”的错误。

下面是它的演示：

![Peacock尝试使用正在使用的端口时显示的错误信息](/img/wiki/port_in_use.png)

## 什么是端口？

简单地说，端口就是程序和其他计算机可以连接并获取数据的地方。
为了让游戏与Peacock的服务器通信，服务器必须占用一个端口。
端口必须分配指定的编号。 Peacock 使用的默认端口是 80，但端口号可以是 1 到 65535 之间的任何整数。

## Visual Studio

如果你使用Visual Studio，你可能安装了一些也运行在80端口上的服务，这会影响Peacock的服务。 解决方法：

1. 同时按下Windows徽标键和R键.
2. 在弹出窗口中输入services.msc，然后点击确定。
3. 在服务管理中搜索`W3SVC: World Wide Web Publishing Service`和`Web Deployment Agent Service`.
4. 如果它们存在，禁用它们。
5. 重试一次。如果仍然连接失败，重启你的电脑后再试一次。

## 改变端口

如果你不想停用80端口的进程，这里是修改Peacock使用端口的方式：

在下面的指引中，请将端口号替换为当前在你设备上一个未被占用的端口，例如`8080`、`6969`、`3000`等等。

- 如下修改`Start Server.cmd`文件：
  ```bash
  @echo off
  SET PORT=PORTNUMBER
  .\nodedist\node.exe chunk0.js
  PAUSE
  ```
- 在 Patcher 的 URL 字段中输入`127.0.0.1:PORTNUMBER` ，如下所示： ![](/img/wiki/patcher_port.png)

## 在 Linux 上

Peacock 的默认端口是 80，但在 Linux 上，普通用户账户没有使用 80 端口的权限。
请参阅上文的更改端口部分。
