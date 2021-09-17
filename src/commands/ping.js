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
