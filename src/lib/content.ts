// Placeholder content, shaped the way it will eventually arrive from the CMS
// (Sanity/Contentful). Swap this module for a CMS fetch later without
// touching the components below — they only depend on these types.

export type Workshop = {
  id: string;
  title: string;
  instructors: string[];
  time: string;
  location: string;
  price: string;
  level: string;
  description: string;
};

export type Teacher = {
  id: string;
  name: string;
  bio: string;
  instagram?: string;
};

export const event = {
  name: "Toronto Shag Weekend",
  tagline: "A weekend of collegiate shag workshops, socials, and community.",
  dates: "Dates TBD, 2027",
  city: "Toronto, Ontario",
};

export const essentials = {
  what: "A weekend of collegiate shag: workshops for every level, a Saturday night social, and a chance to meet the Toronto swing community.",
  who: "Everyone - total beginners, dancers switching over from Lindy Hop, and shag dancers who've been at this for years.",
  where: "Workshops and socials in downtown Toronto. Full venue details coming soon.",
  when: "Novemeber 2027 — full weekend, schedule below.",
  howMuch: "Full weekend pass, or single workshops and social tickets available separately.",
};

export const whatIsShag = {
  heading: "What is collegiate shag?",
  body: [
    "Collegiate shag is a fast (and chill!!) dance born in the 1930s alongside swing music's early years — built for up-tempo jazz, tight spaces, and dancers who wanted to move fast without slowing down for anyone.",
    "It's danced in 6-count phrases with a syncopated kick-step rhythm, which is where its reputation for being both simple to start and endlessly deep to develop comes from. Join the Toronto shag scene and try it out!",
  ],
};

export const workshops: Workshop[] = [
  {
    id: "workshop-1",
    title: "Shag Foundations",
    instructors: ["Instructor Name"],
    time: "Sat, 1:00pm–2:30pm",
    location: "Studio A",
    price: "$25",
    level: "All levels",
    description:
      "Core rhythm, basic step, and the kick-ball-change that makes shag feel like shag. Start here if you're new.",
  },
  {
    id: "workshop-2",
    title: "Musicality & Variations",
    instructors: ["Instructor Name"],
    time: "Sat, 3:00pm–4:30pm",
    location: "Studio A",
    price: "$25",
    level: "Open level",
    description:
      "Playing with the beat, adding variations, and dancing to what the band is actually doing.",
  },
];

export const teachers: Teacher[] = [
  {
    id: "teacher-1",
    name: "Teacher Name",
    bio: "A sentence or two on their background in shag and swing dance.",
    instagram: "https://instagram.com/",
  },
  {
    id: "teacher-2",
    name: "Teacher Name",
    bio: "A sentence or two on their background in shag and swing dance.",
    instagram: "https://instagram.com/",
  },
];

export const pricing = {
  fullPass: "$65",
  singleWorkshop: "$25",
  socialOnly: "$15",
  note: "Prices are placeholders — update once finalized.",
};

export const location = {
  name: "Venue name TBD",
  address: "Address to be announced",
  city: "Toronto, Ontario",
};

export const links = {
  eventbrite: "https://www.eventbrite.com/",
  facebookEvent: "https://www.facebook.com/events/",
  instagram: "https://instagram.com/",
  contactEmail: "hello@example.com",
};

export const navSections = [
  { id: "info", label: "Info" },
  { id: "about", label: "What is Shag" },
  { id: "workshops", label: "Workshops" },
  { id: "teachers", label: "Teachers" },
  { id: "tickets", label: "Tickets" },
] as const;
