export type Media = {
    id: number
    url: string;
}

export type Photos = Media[];

export type Videos = Media[];

export type Place = {
    id: number;
    title: string;
    price: string;
    area: string;
    desc: string;
    cadastralNumber: string;
    backgroundImage: string;
    path: string;
    photos: Photos;
    videos: Videos
}

export type Places = Place[];

