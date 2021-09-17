import { Command, ActionRow, Button } from "interaction-kit";

export default new Command({
    name: "button",
    description: "Send some buttons",
    handler: (interaction) => {
        interaction.reply({
            message: "Here are your buttons!",
            components: [
                // Add an action row that holds the buttons
                new ActionRow(
                    // Add a button with a label and event handler. When the button is pressed, the bot will respond with "hi".
                    new Button({
                        label: "I am a button",
                        customID: "button0",
                        handler: (event) => {
                            event.reply({
                                message: "hi",
                                ephemeral: true,
                            });
                        },
                    }),

                    // This is a link button, it doesn't have a handler
                    new Button({
                        label: "Click me",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    })
                ),
            ],
        });
    },
});
