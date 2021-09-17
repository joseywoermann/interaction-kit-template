# A basic example / getting started guide for [interaction-kit](https://github.com/IanMitchell/interaction-kit).

The purpose of this guide is not to explain everything, but rather to give an overview over the features and some code examples.

Unfortunately, there is no documentation as of now. This means that you'll have to dig through the [source code](https://github.com/IanMitchell/interaction-kit/tree/main/packages/interaction-kit/src) yourself to see what's possible and how to do those things. There are some examples in the [#interaction-kit channel](https://discord.com/channels/815369174096412692/839006448057974826) in [the Discord server](https://discord.gg/ian), which is also the best place for support.

# Setup process:

-   Clone this repository or create a project with the following file structure:

```
my-project/
├─ src/
│  ├─ commands/
│  │  ├─ ping.js
│  │  ├─ invite.js
│  │  └─ ...
│  │
│  └─ index.js
│
├─ .env
└─ package.json
```

-   Run `npm install` inside `my-project/` to install the necessary dependencies
-   Set up your `.env` file like this:

```
APPLICATION_ID=
PUBLIC_KEY=
TOKEN=
DEVELOPMENT_SERVER_ID=
```

-   Download and install [cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation).

-   Go to the [Discord dev portal](https://discord.com/developers/applications/) and create a bot, copy the **Application ID**, **Public Key** and **Token**. Add these to your `.env` file. You'll also need to add the ID of your Discord server you want to test the bot in. **At the moment, interaction-kit only supports guild commands.**
-   Run `npm run start` inside `my-project/`. This will start the bot.
-   Now, run `cloudflared.exe tunnel --url http://localhost:3000` in the same directory you "installed" cloudflared in. This will allow Discord to send requests to your bot.
-   Copy the URL you are greeted with, and paste this as the "Interactions Endpoint URL" in the application settings.
-   Your bot should be up and running now, check if the commands show up in your test server. If they do, you did everything correctly and are ready to code!

# Code example:

`index.js`

```js
import { Application } from "interaction-kit";

// Import the commands
import PingCommand from "./commands/ping";
import InviteCommand from "./commands/invite";

const { APPLICATION_ID, PUBLIC_KEY, TOKEN } = process.env;

// Create the application / client and pass the authentication details
export default new Application({
    applicationID: APPLICATION_ID,
    publicKey: PUBLIC_KEY,
    token: TOKEN,
})
    // Add the commands. These will be updates automatically when the bot restarts
    .addCommands(PingCommand, InviteCommand)
    // This will start the bot
    .startServer();
```

`commands/ping.js`

```js
import { Command } from "interaction-kit";

// Create a command with a name and a description.
export default new Command({
    name: "ping",
    description: "Get a pong back.",

    // This is the function that will be called when the command is executed. It will receive the interaction object as a parameter.
    handler: (interaction) => {
        // interaction.reply() will send a message back to the user.
        interaction.reply({
            message: "Pong",
            ephemeral: true,
        });
    },
});
```

# Roadmap:

Features that are still missing in interaction-kit:

-   [Selects / Dropdowns [open issue]](https://github.com/IanMitchell/interaction-kit/issues/41)
-   [Context Menus [open PR]](https://github.com/IanMitchell/interaction-kit/pull/63)
-   Better Attachment support
-   Global Commands
-   A `npx create-ikit-app` script / [CLI [open PR]](https://github.com/IanMitchell/interaction-kit/pull/28)
-   [Hot command reloading [open PR]](https://github.com/IanMitchell/interaction-kit/pull/66)

#### Want to suggest something? [Create an issue on GitHub](https://github.com/IanMitchell/interaction-kit/issues/new?assignees=&labels=Feature&template=feature_request.md&title=)
