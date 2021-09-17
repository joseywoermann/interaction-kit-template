import { Command, Embed } from "interaction-kit";

export default new Command({
    name: "embed",
    description: "A basic command that uses embeds.",
    handler: (interaction) => {
        interaction.reply({
            // You can set all attributes in the constructor, or add them later with chained methods (.addField(), .setAuthor() etc).
            embed: new Embed({
                title: '"Eval deez nuts"',
                description: "- Ian Mitchell, 2021",
                fields: [
                    {
                        name: "There can also be fields",
                        value: `And you can access some extra data, like the channel (<#${interaction.channelID}>).`,
                    },
                ],
            }),
        });
    },
});
