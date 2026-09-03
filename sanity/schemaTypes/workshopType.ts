import { defineField, defineType } from "sanity";

export const workshopType = defineType({
    name: "workshop",
    title: "Workshop",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "instructors",
            title: "Instructors",
            type: "array",
            of: [{ type: "reference", to: [{ type: "teacher" }] }],
            description: "Link to existing Teacher entries.",
        }),
        defineField({
            name: "time",
            title: "Time",
            type: "string",
            description: 'e.g. "Sat, 1:00pm–2:30pm"',
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
            description: 'e.g. "Studio A"',
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "string",
            description: 'e.g. "$25"',
        }),
        defineField({
            name: "level",
            title: "Level",
            type: "string",
            description: 'e.g. "All levels", "Open level"',
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
    ],
    preview: {
        select: { title: "title", subtitle: "time" },
    },
});