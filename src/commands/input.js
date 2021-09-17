import { Command, IntegerInput } from "interaction-kit";

export default new Command({
    name: "input",
    description: "A basic command that uses inputs.",
    options: [
        // There are all kinds of inputs, and their constructors are all relatively similar.
        new IntegerInput({
            name: "age",
            description: "Enter your age",
            required: true,
        }),
    ],
    handler: (interaction) => {
        interaction.reply({
            message: `You are ${interaction.options.age} years old.`, // Access the input values with "interaction.options.NAME_OF_THE_INPUT"
        });
    },
});
