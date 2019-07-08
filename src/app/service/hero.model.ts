export interface HeroModel {
    appearance: Appearance;
    biography: Biography;
    connections: Connections;
    id: string;
    image: Image;
    name: string;
    powerstats: Powerstats;
    response: string;
    work: Work;
}

export interface Appearance {
    eyeColor: string;
    gender: string;
    hairColor: string;
    height: string[];
    race: string;
    weight: string[];
}

export interface Biography {
    aliases: string[];
    alignment: string;
    alterEgos: string;
    firstAppearance: string;
    fullName: string;
    placeOfBirth: string;
    publisher: string;
}

export interface Connections {
    groupAffiliation: string;
    relatives: string;
}

export interface Image {
    url: string  ;
}

export interface Powerstats {
    combat: string;
    durability: string;
    intelligence: string;
    power: string;
    speed: string;
    strength: string;
}

export interface Work {
    base: string;
    occupation: string;
}