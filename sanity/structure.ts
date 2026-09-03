import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Event Settings')
        .id('eventSettings')
        .child(S.document().schemaType('eventSettings').documentId('eventSettings')),
      S.divider(),
      S.documentTypeListItem('teacher').title('Teachers'),
      S.documentTypeListItem('workshop').title('Workshops'),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['teacher', 'workshop', 'eventSettings'].includes(item.getId()!),
      ),
    ])