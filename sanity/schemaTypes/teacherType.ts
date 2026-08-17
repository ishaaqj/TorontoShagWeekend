import { defineField, defineType } from "sanity";

export const teacherType = defineType({
  name: "teacher",
  title: "Teacher",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      description: "A sentence or two about their background in shag/swing.",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    }),
  ],
});
