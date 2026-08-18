import { defineField, defineType } from "sanity";

export const teacherType = defineType({
  name: "teacher",
  title: "Teacher",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "bio", title: "Bio", type: "text" }),
    defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
  ],
});