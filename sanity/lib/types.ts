export type EventSettings = {
    eventName?: string;
    tagline?: string;
    dates?: string;
    city?: string;
    essentials?: {
        what?: string;
        who?: string;
        where?: string;
        when?: string;
        howMuch?: string;
    };
    whatIsShag?: {
        heading?: string;
        body?: string[];
    };
    pricing?: {
        fullPass?: string;
        singleWorkshop?: string;
        socialOnly?: string;
        note?: string;
    };
    location?: {
        name?: string;
        address?: string;
        city?: string;
    };
    links?: {
        eventbrite?: string;
        facebookEvent?: string;
        instagram?: string;
        contactEmail?: string;
    };
};

export type Teacher = {
    _id: string;
    name: string;
    bio?: string;
    instagram?: string;
}

export type Workshop = {
    _id: string;
    title: string;
    instructors?: string[];
    time?: string;
    location?: string;
    price?: string;
    level?: string;
    description?: string;
}