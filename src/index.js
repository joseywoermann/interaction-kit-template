import { Application } from "interaction-kit";

// Import the commands
import PingCommand from "./commands/ping";
import InviteCommand from "./commands/invite";
import EmbedCommand from "./commands/embed";
import ButtonCommand from "./commands/button";
import AgeCommand from "./commands/input";

const { APPLICATION_ID, PUBLIC_KEY, TOKEN } = process.env;

// Create the application / client and pass the authentication details
export default new Application({
    applicationID: APPLICATION_ID,
    publicKey: PUBLIC_KEY,
    token: TOKEN,
})
    // Add the commands. These will be updates automatically when the bot restarts
    .addCommands(
        PingCommand,
        InviteCommand,
        EmbedCommand,
        ButtonCommand,
        AgeCommand
    )
    // This will start the application / bot
    .startServer();
