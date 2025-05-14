---
title: Campaigns & Play Next
---

Making a campaign? Great! We've got an API specifically for adding your own campaigns.

## Adding to the story menu

The [`contributeCampaigns`](https://github.com/thepeacockproject/Peacock/blob/3b6c7362107dbd94d1c2623f604de488904521cf/components/controller.ts#L337) hook allows you to add new campaigns to the story menu

Here's an example plugin which adds a campaign with 2 new contracts, and a video between them:

```ts
import { Controller } from "@peacockproject/core/controller"

module.exports = function roccoCampaign(controller: Controller) {
    // register the new campaign missions
    controller.addMission(someJson);
    controller.addMission(someJson);

    // register a video that will be played between the missions
    // must be added client side, otherwise the game won't be able to find the video
    controller.configManager.configs.Videos["debriefing_rocco1"] = {
        "VideoTitle": "UI_MENU_PAGE_STORY_ROCCO_CAMPAIGN_1",
        "VideoHeader": "UI_MENU_PAGE_STORY_CUTSCENE_HEADER",
        "VideoId": "debriefing_rocco1",
        "Entitlements": [],
        "IsLocked": false,
        "VideoType": null,
        "VideoImage": "images/Cinematics/tiles/MY_CINEMATIC_IMAGE.jpg",
        "RequiredResources": [
            "[assembly:/_PRO/Scenes/Missions/Rocco/MyMission1.entity].entitytemplate",
            "[assembly:/_pro/scenes/Missions/Rocco/MyMission1ScenarioBrick.brick].entitytype"
        ],
        "LockedReason": "",
        "Data": {
            "DlcName": "GAME_STORE_METADATA_GAME_TITLE",
            "DlcImage": "images/livetile/dlc/wide_logo.png"
        }
    };

    controller.hooks.contributeCampaigns.tap(
        "RoccoCampaignPlugin",
        (
            campaigns: Campaign[],
            genSingleMission: GenSingleMissionFunc,
            genSingleVideo: GenSingleVideoFunc,
            gameVersion: GameVersion
        ) => {
            const myStoryData: StoryData[] = [
                genSingleMission(
                    // your mission's ID
                    "f0148e04-d9ca-4ddc-9fcb-fe06b09a2666",
                    gameVersion,
                ),
                // NOTE: this must match a valid video added to the `Videos` config
                // you also don't need videos, this is just to demonstrate how to add one if needed
                genSingleVideo("debriefing_rocco1", gameVersion),
                genSingleMission(
                    // your second mission's id
                    "bfe244ac-df50-462e-9950-7d2570f3ebda",
                    gameVersion,
                )
            ];

            const campaignTemplate = {
                BackgroundImage: "images/story/my_story_image.jpg",
                Image: "",
                Name: "UI_MY_PLUGIN_NEW_CAMPAIGN",
                Properties: {
                    BackgroundImage: "images/story/my_story_image.jpg",
                },
                StoryData: myStoryData,
            };

            // add the campaign
            campaigns.push(campaignTemplate);
        }
    );
};
```

Now, you will have a campaign with 2 missions and 1 video!

## Play Next menu

At the end of the mission, the game isn't smart enough to infer what the next mission will be.
In order to give it the information it needs, we need to tap another hook which allows us to register play next results.

```ts
// contractId is the contract that just finished, NOT the next mission.
controller.hooks.getNextCampaignMission.tap(
    "RoccoPlayNextAdditions",
    (
        contractId: string,
        gameVersion: GameVersion
    ): PlayNextGetCampaignsHookReturn | undefined => {
    if (contractId !== "my_first_mission_uuid") {
        // we are not currently playing the first mission in the campaign, so we don't need to do anything
        return;
    }
    
    return {
        nextContractId: "campaign_second_mission_uuid",
        campaignDetails: {
            CampaignName: "UI_SOME_CAMPAIGN_NAME",
            ParentCampaignName: null
        }
    };
});
```

It will now be shown to the player.
