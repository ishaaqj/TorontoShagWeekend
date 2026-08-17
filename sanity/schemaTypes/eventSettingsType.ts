import { defineField, defineType } from "sanity";

export const eventSettingsType = defineType({
    name: "eventSettings",
    title: "Event Settings",
    type: "document",
    fields: [
        defineField({
            name: "eventName",
            title: "Event name",
            type: "string",
        }),
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string",
        }),
        defineField({
            name: "dates",
            title: "Dates",
            type: "string",
            description: 'e.g. "March 20–22, 2027"',
        }),
        defineField({
            name: "city",
            title: "City",
            type: "string",
        }),
        defineField({
            name: "essentials",
            title: "The Essentials",
            type: "object",
            fields: [
                defineField({ name: "what", title: "What", type: "text" }),
                defineField({ name: "who", title: "Who", type: "text" }),
                defineField({ name: "where", title: "Where", type: "text" }),
                defineField({ name: "when", title: "When", type: "text" }),
                defineField({ name: "howMuch", title: "How much", type: "text" }),
            ],
        }),
        defineField({
            name: "whatIsShag",
            title: "What is Shag",
            type: "object",
            fields: [
                defineField({ name: "heading", title: "Heading", type: "string" }),
                defineField({
                    name: "body",
                    title: "Body paragraphs",
                    type: "array",
                    of: [{ type: "text" }],
                }),
            ],
        }),
        defineField({
            name: "pricing",
            title: "Pricing",
            type: "object",
            fields: [
                defineField({ name: "fullPass", title: "Full weekend pass", type: "string" }),
                defineField({ name: "singleWorkshop", title: "Single workshop", type: "string" }),
                defineField({ name: "socialOnly", title: "Social only", type: "string" }),
                defineField({ name: "note", title: "Note", type: "string" }),
            ],
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "object",
            fields: [
                defineField({ name: "name", title: "Venue name", type: "string" }),
                defineField({ name: "address", title: "Address", type: "string" }),
                defineField({ name: "city", title: "City", type: "string" }),
            ],
        }),
        defineField({
            name: "links",
            title: "Links",
            type: "object",
            fields: [
                defineField({ name: "eventbrite", title: "Eventbrite URL", type: "url" }),
                defineField({ name: "facebookEvent", title: "Facebook event URL", type: "url" }),
                defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
                defineField({ name: "contactEmail", title: "Contact email", type: "string" }),
            ],
        }),
    ],
});