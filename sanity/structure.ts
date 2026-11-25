import type { StructureResolver } from 'sanity/structure';

const singleton = (S: Parameters<StructureResolver>[0], type: string, title: string) =>
  S.listItem().id(type).title(title).child(S.document().schemaType(type).documentId(type).title(title));

export const structure: StructureResolver = S =>
  S.list()
    .title('VISUALRIF')
    .items([
      singleton(S, 'homepage', 'Homepage'),
      singleton(S, 'siteSettings', 'Site settings'),
      singleton(S, 'navigation', 'Navigation'),
      S.divider(),
      S.listItem()
        .id('projects')
        .title('Projects')
        .child(S.documentTypeList('project').title('Projects').defaultOrdering([{ field: 'order', direction: 'asc' }])),
      S.documentTypeListItem('projectCategory').title('Project categories'),
      S.divider(),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('client').title('Clients & agencies'),
      S.documentTypeListItem('skill').title('Skills'),
    ]);
