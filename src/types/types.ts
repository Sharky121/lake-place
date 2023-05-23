export type Photo = {
    id: number
    url: string;
}

export type Photos = Photo[];

export type Place = {
    id: number;
    title: string;
    backgroundImage: string;
    photos: Photos;
}

export type Places = Place[];

