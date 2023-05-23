import exp from "constants";

export type Place = {
    title: string;
    backgroundImage: string;
}

export type Places = Place[];

export type Photo = {
    id: number
    url: string;
}

export type Photos = Photo[];
