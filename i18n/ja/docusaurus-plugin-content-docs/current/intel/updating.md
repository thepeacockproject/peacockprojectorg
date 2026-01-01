---
title: 新しいバージョンへのアップデート
description: このページでは、アップデートを行うべきタイミングや、 正しくアップデートするための手順について、 詳細にご説明致します。
---

## 解説動画

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nF5ngiuDe5M?start=484" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media;picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>

上にございますアップデートの手順についての解説動画をご確認下さい。 フルスクリーンモードにするとよりわかりやすくなるかもしれません。

## プラグインごとの説明書について

1. `Start Server.cmd`を起動する際、以下の画像のようにPeacockのバージョンが古くなっていることを伝える警告画面が表示される場合がございます: ![Out of date Peacock warning](/img/peacock_out_of_date.png).
2. Usually you will need to update Peacock only when there is a new game update, but stay tuned in the Peacock Discord's `#updates` and `#downloads` channels to be safe.
    - Note: Peacock may be temporarily unavailable after a game update, as it takes a few hours for the Peacock Patcher to be updated as well.
3. If there is a new Peacock update, go to the [latest Peacock release on GitHub](https://github.com/thepeacockproject/Peacock/releases/latest) to download the latest build.
4. Extract (unzip) files. Running the files from within the zipped folder will not work.
5. **Assuming you have used Peacock during the previous game update**, follow the instructions below to keep your loadouts and in-game save files (Otherwise, your loadouts will all default back to ICA19/coins/fiberwire, and your in-game save files will be lost).

    - Copy your old `userdata` and `contractSessions` folders from your previous Peacock Install folder, and paste it into your new Peacock Install folder. Replace any existing files in the new Peacock build's folder, if necessary.
    - Check this example image if you have trouble finding the `userdata` and `contractSessions` folders: ![](/img/userdata_contractsessions.png)
