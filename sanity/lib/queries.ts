import { groq } from 'next-sanity'

export const eventSettingsQuery = groq`*[_type == "eventSettings"][0]`
export const teachersQuery = groq`*[_type == "teacher"] | order(name asc)`
export const workshopsQuery = groq`@[_type == "workshop"] | order(order asc, time asc){
    _id,
    title,
    "instructors": instructors[]-> name,
    time,
    location,
    price,
    level,
    description
}`