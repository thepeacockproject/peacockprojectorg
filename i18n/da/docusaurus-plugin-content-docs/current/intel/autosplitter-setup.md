---
title: Auto-Splitter Setup
description: How to set up the Peacock auto-splitter for full-game speedruns.
---

_Guide written originally by [Fusha](https://www.speedrun.com/user/Fusha)_

## Specifications

(see "How to Use" and "Other Usage Notes" below as well)

-   100% accurate to how runs are timed for verification purposes, unlike the [Official Servers Autosplitter](https://www.speedrun.com/hitman_3/guide/kbydm).

-   Several miscellaneous glitches like the splitter not working correctly from "Outside" Romania starting location are fixed.

-   Splits fully automatically, based on which level you start on and which full game category you are playing. Starting and stopping the splitter (by pressing numpad keys etc) is not needed.

-   Works on both Steam and Epic versions of Hitman 3 unlike the Official Servers Autosplitter (which is Epic only).

-   Obviously this only works on [Peacock](https://thepeacockproject.org/wiki/intel/), if you are playing on official servers for some reason you should use one of the [other two Livesplit Guides](https://www.speedrun.com/hitman_3/guides).

## Installation

1. Install [Peacock](https://thepeacockproject.org/wiki/intel/) and [LiveSplit](https://livesplit.org/downloads/) if you don't have either of them installed (just unzip them wherever you want). **If you already have Peacock installed, make sure to you have it updated to the latest version.** After you get these apps installed/updated, close them for now.

2. Download LiveSplit server component from here: https://github.com/LiveSplit/LiveSplit.Server/releases/latest

3. Unzip and place the two files that you just downloaded in the LiveSplit Server component zip into the Components folder inside the `LiveSplit` installation folder.

4. Start LiveSplit.

5. Right click on main LiveSplit window, then click on `Edit Splits`. Edit your split names (`Segment Name`) to your liking. Click on `Insert Above / Below` to add new segments. If you like, you can enter your estimated times in `Segment Times`.

6. Click `ok` on the Splits Editor, then right-click the main LiveSplit window and select `Save Splits` for future use.

7. Right click on main LiveSplit window, then click on `Edit Layout`. Double-click on `Timer`, then select `Game Time` for timing method.

8. While still on the `Edit Layout` page: Click `+` button, then `Control`, then `Livesplit Server`.

9. Click `ok` on the Layout Editor, then right-click the main LiveSplit window and select `save layout` for future use.

## How to Use

(Do each time you open the game, order is important! Make sure to start LiveSplit and start the server before you start Peacock).

1. Open LiveSplit

2. Right-click on the main LiveSplit window, then select `Control`, then `Start Server`.

3. If you would like to change what full game category you are running, edit `options.ini` file inside the Peacock folder and change the `autoSplitterCampaign` option to either `trilogy`, `1`, `2`, or `3` depending on which campaign you want to run (The autosplitter is set to `trilogy` by default). The autosplitter will only work so long as you play the selected campaign, in order.

4. Open the folder where you have installed Peacock, and run `Start Server.cmd` and `PeacockPatcher.exe`.

5. Start game as normal.

## Other Usage Notes

-   The splitter will always fully reset and start a new run as soon as you start the first mission in the selected campaign, no matter what other state it is in. You do not need to start or reset the run in LiveSplit manually (by pressing numpad keys etc).

-   If you start a mission that is not the first mission, the one you just played, or the next mission after completing the mission you just played, it will stop the timer and stop tracking times until you reset back to the first mission in the campaign.

-   The splitter will automatically split (record time and move to next mission) as soon as you successfully complete a mission. However, if you replay the same mission multiple times (other than the first one in the selected campaign), it will automatically add reset times together for you, even if you "complete" the mission and it splits (for example if you failed to get SA at the last second, just replay the mission and it will auto-unsplit and add the reset time).

-   After you complete or fail a mission, it will print detailed timing info about the attempt you just made into the Peacock server window, with timing information down to tenths/hundredths of seconds for the attempt you just made as well as detailing the total amount of time with resets on the current mission.

-   As of v4.5.0, Peacock Autosplitter now defaults into a mode which will not log a successful mission completion (splitting and allow moving to next map) unless you complete the current mission with Silent Assassin rating. If you want to use the auto splitter for any% runs, change the `autoSplitterForceSilentAssassin` option in `options.ini` to be `false`.
