import { groq } from 'next-sanity'

export const eventSettingsQuery = groq`*[_type == "eventSettings"][0]`