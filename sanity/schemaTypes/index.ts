import { type SchemaTypeDefinition } from 'sanity'

import { teacherType } from './teacherType'
import { workshopType } from './workshopType'
import { eventSettingsType } from './eventSettingsType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teacherType, workshopType, eventSettingsType],
}