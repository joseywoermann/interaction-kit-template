import { ActionRow, Button, Command } from "interaction-kit";

export default new Command({
    name: "invite",
    description: "Add this bot to your server.",
    handler: (interaction) => {
        interaction.reply({
            message: "Invite me!",
            components: [
                // An Action Row that contains a Button with a link to a website. This button doesn't need a handler, because it's a link button.
                new ActionRow(
                    new Button({
                        label: "Do it.",
                        url: `https://discord.com/api/oauth2/authorize?client_id=${process.env.APPLICATION_ID}&scope=applications.commands`,
                    })
                ),
            ],
        });
    },
});
